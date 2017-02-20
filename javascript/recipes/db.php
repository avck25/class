<?php
    $cs = 'mysql:host=localhost;dbname=recipes2';
    $user = 'phpuser';
    $password = 'p@$$w0rd';
    $options = array (
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    );

    try {
        $db = new PDO($cs, $user, $password, $options);
    } catch (PDOException $e) {
        //header('HTTP/1.0 500 Internal Server Error');
        http_response_code(500);
        exit;
    }
?>