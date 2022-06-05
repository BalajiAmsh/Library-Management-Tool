<?php
$dra = $_SERVER['DOCUMENT_ROOT'];
$tarpath = "/var/www/html/ngJS/mform/app/image/uploadImage/Philosophy/";
$arrayString =  explode("$dra", $tarpath); // split string with space (white space) as a delimiter.
$ar = $arrayString[1];
$name = "Ikigai.png";
$urlImage = "http://localhost/" . $ar . $name;
echo $urlImage;

// echo basename($_SERVER['REQUEST_URI'], '?' . $_SERVER['QUERY_STRING']);
// 
