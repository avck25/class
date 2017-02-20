<?php
$color = "#000000";
if(!empty($_GET['color'])) {
    $color = $_GET['color'];
}
$bgcolor = "#FFFFFF";
if(!empty($_GET['bgcolor'])) {
    $bgcolor = $_GET['bgcolor'];
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Document</title>

    <style>
        body {
            color: <?= $color ?>;
            background-color: <?= $bgcolor ?>;
        }
    </style>
</head>

<body>
	<form id="theForm">
		<label>Color</label>
		<input type="color" id="color" name="color" value="<?= $color ?>"/>
		<label>Background Color</label>
		<input type="color" id="bgcolor" name="bgcolor" value="<?= $bgcolor ?>" />
		<input type="text" id="someText" name="someText" required/>
		<input type="email" id="email" name="email" required/>
		<button id="theButton">Change colors</button>
	</form>
	<script src="colors3.js"></script>
</body>

</html>