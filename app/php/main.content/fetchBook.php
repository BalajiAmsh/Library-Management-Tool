<?php
require_once('main.conn.php');
$data = json_decode(file_get_contents("php://input"));
$search = $data->searchBook;



$sql = $pdo->prepare("SELECT * FROM book_data  WHERE status='A' AND name like '%" . $search . "%'");
$sql->execute();
$result = $sql->fetchAll(PDO::FETCH_ASSOC);

print_r(json_encode($result));
