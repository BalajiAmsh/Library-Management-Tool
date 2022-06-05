<?php
require_once('main.conn.php');

session_start();

// Fetching data from table
$sql = $pdo->prepare("SELECT * FROM book_data");
$sql->execute();
$result = $sql->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);
