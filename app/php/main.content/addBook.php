<?php

require_once('main.conn.php');

$filename = $_FILES['file']['name'];
$meta = $_POST;
$dest = $meta['targetPath'];
$destination = $meta['targetPath'] . $filename;
$boInfo = $meta['bookInfo'];
extract($boInfo);
extract($category);
// echo "$destination ";
$fileTmpPath = $_FILES['file']['tmp_name'];
print_r($fileTmpPath);




if (move_uploaded_file($_FILES['file']['tmp_name'], $destination)) {
    echo "The File were Stored into server Successfully :) ";

    // Here is the Insert operation take place
    $sql = "INSERT INTO book_data (name, book_no, category, author_name, book_price, book_image_path,image_name) VALUES ('$bookName', '$bookNumber','$name','$authorName', '$bookPrice','$dest','$filename') ";
    echo "$sql";

    $query = $pdo->prepare($sql);
    $result = ($pdo->exec($sql)) ? array('message' => 'Book Data Register successfully', 'status' => '1') : array('message' => 'Server Busy', 'status' => '0');

    print_r(json_encode($result));
    $last_id = $pdo->lastInsertId();
    echo "New record created successfully. Last inserted ID is: " . $last_id;

    // End of the Insert query



} else {
    echo "There is an error in moving image to the server :( ";
}
