<?php
    require 'db.php';

    $query = 'SELECT id, name FROM recipes';
    $statement = $db->prepare($query);
    $statement->execute();
    $recipes = $statement->fetchAll(PDO::FETCH_ASSOC);
    $statement->closeCursor();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Recipes</title>
    <link rel="stylesheet" href="recipes.css" />
</head>

<body>
    <h1>PCS Recipes</h1>
    <h3>Choose a recipe:</h3>

    <?php
    foreach($recipes as $recipe) {
        echo '<input type="radio" name="recipe" value="' . $recipe['id'] . '" />' . $recipe['name'];
    }
    ?>

    <div id="recipe">
        <img id="recipePic" />
        <h2 id="name"></h2>
        <h3>Ingredients</h3>
        <ul id="ingredients"></ul>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="recipes.js"></script>
</body>

</html>