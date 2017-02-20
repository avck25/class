/*global $*/
(function () {
    'use strict';

    var recipeElem = $('#recipe'),
        nameElem = $('#name'),
        pictureElem = $('#recipePic'),
        ingredientsElem = $('#ingredients');

    $('input[name=recipe]').change(function () {
        //console.log($('input[name=recipe]:checked')[0]);
        //console.log(this.value);
        $.getJSON('getRecipe.php', { id: this.value }, function (recipe) {
            //console.log(recipe);
            nameElem.text(recipe.name);
            //pictureElem.attr('src', recipe.picture);
            //pictureElem.attr('alt', 'delicious ' + recipe.name + ' here');
            pictureElem.attr({
                src: recipe.picture,
                alt: 'delicious ' + recipe.name + ' here'
            });

            ingredientsElem.empty();
            recipe.ingredients.forEach(function (ingredient) {
                ingredientsElem.append('<li>' + ingredient + '</li>');
            });

            recipeElem.show();
        });
    });
} ());

/*$.get('proxy.php?url=https://www.google.com', { q: 'Thanksgiving' }, function (results) {
    console.log(results);
});*/

function foo(x) {
    console.log(typeof x, x);
}
/*var json = '{"name":"peas","picture":"http:\/\/rickbeyer.net\/images\/bio\/bio-peas.jpg","ingredients":["water","salt","peas"]}';
foo(json);
foo({ "name": "peas", "picture": "http:\/\/rickbeyer.net\/images\/bio\/bio-peas.jpg", "ingredients": ["water", "salt", "peas"] });*/

$.getScript('jsonp', function () {

});

$.getScript('someSite?callback=bar', function () {

});

$.getJSON('someSite.bar?callback=?', function (data) {

});