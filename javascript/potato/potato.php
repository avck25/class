<?php
    $files = array_slice(scandir('images/parts'), 2);
    echo json_encode($files);
?>