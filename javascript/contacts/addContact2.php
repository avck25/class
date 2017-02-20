<?php
require 'db.php';

$newContact = json_decode(file_get_contents('php://input'));
$errors = [];
//var_dump($newContact);

function checkParam($param) {
    global $newContact;
    global $errors;
    
    if (!empty($newContact->$param)) {
        return true;
    }
    $errors[] = $param . ' is required';
    return false;
}

checkParam('firstName');
checkParam('lastName');
checkParam('email');
checkParam('phone');

if (!empty($errors)) {
    http_response_code(500);
    exit(join('<br>', $errors));
}

$query = 'INSERT INTO contacts (firstName, lastName, email, phone) 
            VALUES (:firstName, :lastName, :email, :phone)';
$statement = $db->prepare($query);
$statement->bindParam(':firstName', $newContact->firstName);
$statement->bindParam(':lastName', $newContact->lastName);
$statement->bindParam(':email', $newContact->email);
$statement->bindParam(':phone', $newContact->phone);
$rowsInserted = $statement->execute();
if($rowsInserted) {
    echo $db->lastInsertId();
}
else {
    http_response_code(500);
    exit('Unable to add contact');
}
?>