<?php
require_once('main.conn.php');
$meta = json_decode(file_get_contents("php://input"));
$BookName = $meta->BookName;
$memName = $meta->memName;
$todayDate = $meta->todayDate;
$returnDate = $meta->returnDate;
$action = $meta->action;

if ($action == 'takeBook') {
    $sql = "UPDATE roamingBook SET returnStatus='pending', bookId=(SELECT id FROM book_data WHERE name='$BookName'), bookName='$BookName', takenDate='$todayDate', returnDate='$returnDate' WHERE memberEmail='$memName'";
} else {
    if ($action == 'returned') {
        $sql = "UPDATE roamingBook SET returnStatus='notpending', bookId='0', bookName=''WHERE memberEmail='$memName'";
    } else {
        $result = array('Message' => "Can't Validate your action", 'Status' => '0');
        echo (json_encode($result));
        die;
    }
}

$query = $pdo->prepare($sql);
$result = ($pdo->exec($sql)) ? array('Message' => "Book were assign to $memName and Return Date is $returnDate", 'status' => '1') : array('Message' => 'Server Busy Try Again Later', 'Status' => '0');

echo (json_encode($result));
