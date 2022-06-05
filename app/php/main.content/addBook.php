<?php

require_once('main.conn.php');
$dra = $_SERVER['DOCUMENT_ROOT'];

$filename = $_FILES['file']['name'];
$meta = $_POST;
$dest = $meta['targetPath'];
$destination = $meta['targetPath'] . $filename;
$boInfo = $meta['bookInfo'];
extract($boInfo);
extract($category);
// echo "$destination ";
// $fileTmpPath = $_FILES['file']['tmp_name'];
// print_r($fileTmpPath);



if (move_uploaded_file($_FILES['file']['tmp_name'], $destination)) {

    // Code for setting the url of the image using path
    $arrayString = explode("$dra", $destination);
    $urlImg = "http://localhost/" . $arrayString[1];

    // Here is the Insert operation take place
    $sql = "INSERT INTO book_data (name, book_no, category, author_name, book_price, book_image_path, image_name, imageURL) VALUES ('$bookName', '$bookNumber','$name','$authorName', '$bookPrice','$dest','$filename','$urlImg') ";

    $query = $pdo->prepare($sql);
    $result = ($pdo->exec($sql)) ? array('message' => 'Book Data Register successfully', 'status' => '1') : array('message' => 'Server Busy', 'status' => '0');

    echo (json_encode($result));
    $last_id = $pdo->lastInsertId();
    // End of the Insert query

} else {
    echo "There is an error in moving image to the server :( ";
    $result = array('message' => 'Error in Inserting ', 'status' => '0');
    echo (json_encode($result));
}
