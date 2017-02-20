<?php
require 'db.php';

if (empty($_POST['id'])) {
    http_response_code(500);
    exit('No id given for delete');
}

$id = $_POST['id'];

$query = 'DELETE FROM contacts WHERE id = :id';
$statement = $db->prepare($query);
$statement->bindParam(':id', $id);

$rowsDeleted = $statement->execute();
if(!$rowsDeleted) {
    http_response_code(500);
    exit('Unable to delete contact');
}
?>