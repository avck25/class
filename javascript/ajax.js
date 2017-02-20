var httpRequest = new XMLHttpRequest();
console.log(httpRequest.readyState);

httpRequest.onreadystatechange = function (event) {
    //console.log(event);
    console.log(httpRequest.readyState);
    if (httpRequest.readyState === 4) {
        if (httpRequest.status < 400) {
            alert(httpRequest.responseText);
        } else {
            alert('OOPS ' + httpRequest.statusText);
        }
    }
    //console.log(httpRequest);
};

httpRequest.open('GET', 'ajax.html');
httpRequest.send();

/*setTimeout(function () {
    alert(httpRequest.responseText);
}, 2000);*/