<?php
require_once('main.conn.php');
$data = json_decode(file_get_contents("php://input"));
$search = $data->searchText;



$sql = $pdo->prepare("SELECT * FROM roamingBook WHERE returnStatus='notpending' AND memberEmail like '%" . $search . "%'");
$sql->execute();
$result = $sql->fetchAll(PDO::FETCH_ASSOC);

print_r(json_encode($result));
