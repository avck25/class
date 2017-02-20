$.get('xjqajax.html', function (data) {
    alert(data);
}).fail(function (xhr, status, statusText) {
    console.log(xhr, status, statusText);
    alert(statusText);
});