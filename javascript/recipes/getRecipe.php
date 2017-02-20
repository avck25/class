<?php
    header("Access-Control-Allow-Origin: http://localhost");

    require 'db.php';

    class Recipe implements JSONSerializable {
        private $name;
        private $picture;
        private $ingredients;

        public function __construct($name, $picture, $ingredients) {
            $this->name = $name;
            $this->picture = $picture;
            $this->ingredients = $ingredients;
        }

        public function JSONSerialize() {
            /*return [
                'name' => $this->name,
                'picture' => $this->picture,
                'ingredients' => $this->ingredients,
                'foo' => 'bar'
            ];*/
            return get_object_vars($this);
        }
    }

    if (empty($_GET['id'])) {
        http_response_code(500);
        exit('No id for recipe');
    }

    $query1 = 'SELECT r.name, r.picture
              FROM recipes r
              WHERE r.id = :id';

    $query2 = 'SELECT i.name
              FROM recipes r
              JOIN recipeIngredients ri 
                ON ri.recipeId = r.id 
              JOIN ingredients i 
                ON i.id = ri.ingredientId
              WHERE r.id = :id';

    $statement = $db->prepare($query1);
    $statement->bindParam(':id', $_GET['id']);
    $statement->execute();
    $recipe = $statement->fetch(PDO::FETCH_ASSOC);

    $statement = $db->prepare($query2);
    $statement->bindParam(':id', $_GET['id']);
    $statement->execute();
    $ingredients = $statement->fetchAll(PDO::FETCH_COLUMN, 0);
    $statement->closeCursor();

    $recipe = new Recipe($recipe['name'], $recipe['picture'], $ingredients);
    
    echo json_encode($recipe);
?>