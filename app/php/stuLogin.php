<?php

include('conn.php');

session_start();

//Getting basic requirement
$logn = json_decode(file_get_contents("php://input"));
$email = $logn->email;
$password = base64_encode($logn->spassword);

$statusmsg = '';
if (empty($email)) {
    $error[] = 'Email is Required';
} else {
    if (!filter_var(
        $email,
        FILTER_VALIDATE_EMAIL
    )) {
        $ERROR[] = 'Invalid Email Format';
    } else {
        $data[':email'] = $logn->$email;
    }
}
if (empty($password)) {
    $error[] = 'Password is Required';
}
$sql = $pdo->prepare("select * from libmember where email='$email' and password='$password'");
$sql->execute();
$result = $sql->fetch(PDO::FETCH_ASSOC);
extract($result);



// $result = $pdo->query($sql);
// $row = $query->fetch(PDO::FETCH_ASSOC);

$autherncation = 0;
if ($result == '') {
    $autherncation = 0;
    $statusmsg = 'Invalid username or password';
} else {
    $autherncation = 1;
    $statusmsg = 'Login Successfully';
}

// print_r($autherncation);

$output = array(
    'error' => $ERROR,
    'status' => $statusmsg,
    'Authendication' => $autherncation,
    'nameUser' => $name,
    'Postion' => $role,
    'actStatus' => $status
);

echo json_encode($output);
// print_r($output);


// if (empty($error)) {

//     if ($statement->execute($data)) {
//         $result = $statement->fetchAll();
//         if ($statement->rowCount() > 0) {
//             foreach ($result as $row) {
//                 if (password_verify($logn->password, $row["password"])) {
//                     $_SESSION["name"] = $row["name"];
//                 } else {
//                     $statusmsg = 'Wrong Password';
//                 }
//             }
//         } else {
//             $statusmsg = 'Wrong Email';
//         }
//     }
// } else {
//     $statusmsg = implode(", ", $error);
// }











// $email = $logn->email;
// $password = $logn->spassword;

// $sql = "SELECT * FROM libmember;";

// // FETCHING DATA FROM DATABASE
// $query = $pdo->prepare($sql);


// $pdo->exec($sql);

// // OUTPUT DATA OF EACH ROW
// print_r($email . $password);
// print_r("This is : ");
