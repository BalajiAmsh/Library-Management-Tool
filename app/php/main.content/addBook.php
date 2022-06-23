<?php


ini_set('upload_max_filesize', '50M');
ini_set('post_max_size', '50M');
ini_set('max_input_time', 500);
ini_set('max_execution_time', 500);

require_once('main.conn.php');
$dra = $_SERVER['DOCUMENT_ROOT'];

$filename = $_FILES['file']['name']['fileImg'];
$filePDFname = $_FILES['file']['name']['filedata'];

$meta = $_POST;
$dest = $meta['targetPath'];
$destination = $meta['targetPath'] . $filename;
$epath = '/var/www/html/ngJS/mform/app/image/eBooks/';
$edestination = $epath . $filePDFname;
$boInfo = $meta['bookInfo'];
extract($boInfo);
extract($category);
// echo "$destination ";
// $fileTmpPath = $_FILES['file']['tmp_name'];
// print_r($fileTmpPath);



if ((move_uploaded_file($_FILES['file']['tmp_name']['fileImg'], $destination))) {
    if (move_uploaded_file($_FILES['file']['tmp_name']['filedata'], $edestination)) {

        // Code for setting the url of the image using path
        $arrayString = explode("$dra", $destination);
        $urlImg = "http://localhost/" . $arrayString[1];

        $estring = explode("$dra", $edestination);
        $eurl = "http://localhost/" . $estring[1];

        // Here is the Insert operation take place
        $sql = "INSERT INTO book_data (name, book_no, category, author_name, book_price, book_image_path, image_name, imageURL, eBook_name, eBook_path, eBook_URL) VALUES ('$bookName', '$bookNumber','$name','$authorName', '$bookPrice','$dest','$filename','$urlImg', '$filePDFname', '$epath', '$eurl') ";

        $query = $pdo->prepare($sql);
        $result = ($pdo->exec($sql)) ? array('message' => 'Book Data Register successfully', 'status' => '1') : array('message' => 'Server Busy', 'status' => '0');

        echo (json_encode($result));
        $last_id = $pdo->lastInsertId();
        // End of the Insert query
    } else {
        echo "There is an error in moving  2 file to the server :( ";
        $result = array('message' => 'Error in Inserting ', 'status' => '0');
        echo (json_encode($result));
    }
} else {
    // echo "There is an error in moving image to the server :( ";
    $result = array('message' => 'Error in Inserting ', 'status' => '0');
    echo (json_encode($result));
}
