/*global $*/
(function() {
    'use strict';

    var recipeElem = $('#recipe'),
        nameElem = $('#name'),
        pictureElem = $('#recipePic'),
        ingredientsElem = $('#ingredients');

    $('input[name=recipe]').change(function() {
        //console.log($('input[name=recipe]:checked')[0]);
        //console.log(this.value);
        $.getJSON('http://localhost:8080/class/javascript/recipes/getRecipe.php', { id: this.value }, function(recipe) {
            //console.log(recipe);
            nameElem.text(recipe.name);
            //pictureElem.attr('src', recipe.picture);
            //pictureElem.attr('alt', 'delicious ' + recipe.name + ' here');
            pictureElem.attr({
                src: recipe.picture,
                alt: 'delicious ' + recipe.name + ' here'
            });

            ingredientsElem.empty();
            recipe.ingredients.forEach(function(ingredient) {
                ingredientsElem.append('<li>' + ingredient + '</li>');
            });

            recipeElem.show();
        });
    });
} ());


