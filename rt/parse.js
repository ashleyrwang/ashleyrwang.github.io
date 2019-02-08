class LogParser {

    constructor() {
        this.progressions = [];
    }

    parse(file) {

        /// Initial setup.
        var lines        = file.split('\n');
        var lastDate;
        var lastLevel    = '';
        var lastCards    = '';
        var progression  = {};
        var progressions = [];

        /// Main loop.
        for (var line of lines) {

            /// Split line into words.
            var words = line.split(/\s+/);

            /// Get run type from words.
            var run   = {};
            run.type  = this.readType(words);

            /// Decide what to do with run info based on type.
            if (run.type === 'RUN' || run.type === 'COMPLETE') {

                run.date  = this.readDate(words);        
                run.level = this.readLevel(words);
                run.cards = this.readCards(words);

                /// If a new level has started, begin a new progression of moves.
                if (run.level !== lastLevel) {

                    /// Set up new progression.                  
                    progression = {};
                    progressions.push(progression);
                    progression.startDate  = run.date;
                    progression.level      = run.level;
                    progression.totalDiffs = 0;
                    progression.avgDiffs   = 0;
                    progression.status     = 'Incomplete';
                    progression.runs       = [];

                    /// Store bookkeeping variables. 
                    lastDate  = run.date;
                    lastLevel = run.level;
                    lastCards = '';
                }

                /// Process RUN lines.
                if (run.type === 'RUN') {
                    run.timeTaken = ((run.date - lastDate) * 1.0) / 1000.0;
                    var diffCards = this.diffCards(lastCards, run.cards);
                    run.cardsBefore = diffCards[0];
                    run.cardsAfter  = diffCards[1];
                    progression.totalDiffs += diffCards[2];
                    progression.runs.push(run);
                    progression.avgDiffs = progression.totalDiffs * 1.0 / (progression.runs.length - 1);
                    if (progression.runs.length === 1) progression.avgDiffs = progression.totalDiffs; 
                    progression.totalTime = ((run.date - progression.startDate) * 1.0) / 1000.0;
                    
                    /// Store bookkeeping variables. 
                    lastDate  = run.date;
                    lastLevel = run.level;
                    lastCards = run.cards;
                }

                /// Process COMPLETE lines.
                else {
                    progression.status    = 'Complete';
                }
            }
        }

        /// Return the array of progressions.
        this.progressions = progressions;
        return progressions;
    }

    /// Helper functions.
    readDate(words) {
        var hours   = parseInt(words[1].substring(0, 2), 10); if (words[1].substring(8, 10) === 'pm') hours += 12;
        var minutes = parseInt(words[1].substring(3, 5), 10);
        var seconds = parseInt(words[1].substring(6, 8), 10);
        var date    = new Date(words[0]);
        date.setUTCHours(hours);
        date.setUTCMinutes(minutes);
        date.setUTCSeconds(seconds);
        return date;
    }

    readType(words) {
        return words[2];
    }

    readLevel(words) {
        if (words[2] === 'LOGIN') return '0';
        else return words[4];
    }

    readCards(words) {
        if (words[2] !== 'RUN') return '';
        else if (words[6] == null) return '';
        else {
            var cardStr = '';
            for (var card of words[6].split(',')) {
                if      (card === 'event') cardStr += '' ;
                else if (card === 'move')  cardStr += 'M';
                else if (card === 'left')  cardStr += 'L';
                else if (card === 'right') cardStr += 'R';
                else if (card === 'laser') cardStr += 'Z';
                else                       cardStr += '?';
            }
            return cardStr;
        }
    }

    diffCards(prev, curr) {
        /// try reversing in case of deletion
        /// lowercase in case of no match
        /// uppercase when letters match
        var s1 = prev;
        var s2 = curr;
        var lcs = this.longestCommonSubstring(s1, s2);
        while (this.hasStuff(lcs)) {
            s1 = this.spaceFill(s1, lcs);
            s2 = this.spaceFill(s2, lcs);
            lcs = this.longestCommonSubstring(s1, s2);           
        }
        //if (!this.hasStuff(s2)) s2 = s1;
        var diffedCards = '';
        var diffs = 0;
        for (var i = 0; i < Math.max(prev.length, curr.length); i++) {
            if (s2.charAt(i) === curr.charAt(i)) {
                diffedCards += curr.charAt(i);
            }
            else {
                diffedCards += curr.charAt(i).toLowerCase(); diffs++;
            }
        } 
        return [s1, s2, diffs];
    }

    hasStuff(str) {
        if (!str.length) return 0;
        for (var char of str) if (char !== '_') return 1;
        return 0;
    }

    array2D(rows) {
        var array = [];
        for (var i = 0; i < rows; i++) array[i] = [];
        return array;
    }

    spaceFill(str, target) {
        var spaces = '';
        for (var i = 0; i < target.length; i++) spaces += '_';
        return str.replace(target, spaces);
    }

    longestCommonSubstring(s1, s2) {
        if (s1 === '' || s2 === '') return '';
        var a1  = [...s1];
        var a2  = [...s2];
        var L   = this.array2D(a1.length);
        var ret = [];
        var z   = 0;

        for (var i = 0; i < a1.length; i++) {
            for (var j = 0; j < a2.length; j++) {
                if (a1[i] === a2[j]) {
                    if (i === 0 || j === 0) L[i][j] = 1;
                    else                    L[i][j] = L[i - 1][j - 1] + 1;

                    if (L[i][j] > z) {
                        z = L[i][j];
                        var r = a1.slice((i - z + 1), i + 1);
                        ret = [r];
                    }

                    else if (L[i][j] === z) {
                        var r = a1.slice((i - z + 1), i + 1);
                        ret.push(r);
                    }
                }
                else L[i][j] = 0;
            }
        }
        var charArr = ret[0];
        var retStr = '';
        if (charArr != null && charArr.length > 0) for (var char of charArr) retStr += char;
        return retStr;
    }
}