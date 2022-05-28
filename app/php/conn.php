<?php
$servername = "localhost";
$database = "formsign";
$username = "root";
$password = "root";
try {

    // connecting to the mysql server 
    $dsn = "mysql:host=$servername;dbname=$database";
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Failed :( \n" . $e->getMessage();
}
