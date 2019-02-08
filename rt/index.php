<?php
  include './include.php';

  date_default_timezone_set('America/Chicago');

  $log_file_name = WEBROOT."/logs/".$_POST['room']."/".$_POST['avatar'].".txt";
  $message = date("Y-m-d h:i:sa")."   ";
  $message .= $_POST['action']."   ";
  $message .= "Level: ".$_POST['level']."   ";
  $message .= "Cards: ".$_POST['inst'];
  $message .= "\n";

  file_put_contents($log_file_name, $message, FILE_APPEND);
  header('Location: /turtles-teachers.html'); // redirect back to the main site
?>
