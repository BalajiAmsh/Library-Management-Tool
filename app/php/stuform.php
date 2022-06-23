<?php


require('conn.php');
// getting values from js page
$form = json_decode(file_get_contents("php://input"));

$name = $form->name;
$email = $form->email;
$password = base64_encode($form->spassword);

$sql = $pdo->prepare("SELECT * FROM libmember WHERE email='$email'");
$sql->execute();
$result = $sql->fetch(PDO::FETCH_ASSOC);
if (!$result) {

    $sql = "INSERT INTO libmember ( name,email,password ) VALUES ( '$name', '$email', '$password' );INSERT INTO roamingBook (memberName, memberEmail) VALUES ('$name', '$email')";
    $query = $pdo->prepare($sql);
    $result = ($pdo->exec($sql)) ? array('message' => 'Account Created Successfully for ' . $email . '  :) ', 'status' => '1') : array('message' => 'Failed in Creating Account :( ', 'status' => '0');
} else {
    $result = array('message' => 'Account Already Exist on ' . $email . ' :(');
}



print_r(json_encode($result));
// $last_id = $pdo->lastInsertId();
// echo "New record created successfully. Last inserted ID is: " . $last_id;














// This is Try catch mathod to insert querry on database
// try {

//     $sql = "INSERT INTO libmember ( name,email,password ) VALUES ( '$name', '$email', '$password' )";

//     $query = $pdo->prepare($sql);

//     $pdo->exec($sql);

//     $last_id = $pdo->lastInsertId();
//     echo "New record created successfully. Last inserted ID is: " . $last_id;
// } catch (PDOException $e) {
//     echo "Failed on Inserting :( \n" . $e->getMessage();
// }
