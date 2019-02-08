Blockly.Blocks['event'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
		.appendField(new Blockly.FieldImage("art_assets/arrow.png", 50, 90, "M"));
    this.setColour('#ABCF8F');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
		.appendField(new Blockly.FieldImage("art_assets/forward_icon.png", 50, 90, "M"));
    this.setOutput(true, null);
    this.setColour('#2579FD');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['left'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
		.appendField(new Blockly.FieldImage("art_assets/left_icon.png", 50, 90, "M"));
    this.setOutput(true, null);
    this.setColour('#FFC405');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['right'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
		.appendField(new Blockly.FieldImage("art_assets/right_icon.png", 50, 90, "M"));
    this.setOutput(true, null);
    this.setColour('#9210AD');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['laser'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
		.appendField(new Blockly.FieldImage("art_assets/laser_icon.png", 50, 90, "M"));
    this.setOutput(true, null);
    this.setColour('#FB0103');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['event'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  inst.unshift("event");
  return '';
};

Blockly.JavaScript['move'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  inst.unshift("move");
  return '';
};

Blockly.JavaScript['left'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  inst.unshift("left");
  return '';
};

Blockly.JavaScript['right'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  inst.unshift("right");
  return '';
};

Blockly.JavaScript['laser'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  inst.unshift("laser");
  return '';
};
