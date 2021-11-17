<?php 

$time = time();
echo "Time: $time".PHP_EOL."Hash: ".sha1($argv[1].$time.'this is secure API with PHP!').PHP_EOL;

?>