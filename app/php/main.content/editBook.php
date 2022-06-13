<?php

require_once('main.conn.php');
$meta = json_decode(file_get_contents("php://input"));

$data = $meta->data;
$action = $meta->action;

if ($action == 'updatingValue') {

    $id = $data->id;
    $name = $data->name;
    $book_no = $data->book_no;
    $category = $data->category;
    $catName = $category->name;
    $Author_name = $data->Author_name;
    $book_price = $data->book_price;
    $update_by = "Admin";


    $sql = "UPDATE book_data SET name='$name', book_no='$book_no', category='$catName', Author_name='$Author_name', book_price='$book_price', update_by='$update_by', updated_date=now() WHERE id='$id'";

    $query = $pdo->prepare($sql);

    $result = ($pdo->exec($sql)) ? array('message' => 'Book Data Updated Successfully', 'status' => '1') : array('message' => 'Server Busy', 'status' => '0');

    print_r(json_encode($result));
}

if ($action == 'deleteValue') {

    $sql = "UPDATE book_data SET status='IA' where id='$data'";
    $query = $pdo->prepare($sql);

    $result = ($pdo->exec($sql)) ? array('message' => 'Book Data Deleted Successfully', 'status' => '1') : array('message' => 'Server Busy', 'status' => '0');

    print_r(json_encode($result));
}
