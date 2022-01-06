<?php
$json = file_get_contents('php://input');
$sent = json_decode($json);
$value = $sent->value;
echo $value;
?>
