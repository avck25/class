<?php
$top = -10;
if(isset($_GET['top'])) {
    $top = $_GET['top'];
}
$top += 10;

header("Refresh: .10;url=move.php?top=$top");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        #it {
            border: 1px solid black;
            padding: 6px;
            background-color: blue;
            color: yellow;
            display: inline-block;
            position: absolute;
            top: <?= $top; ?>px;
        }
    </style>
</head>
<body>
    <div id="it" style="font-family:cursive">Watch Me!</div>
    <script src="move.js"></script>
</body>
</html>