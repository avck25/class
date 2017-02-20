<?php
if (empty($_GET['url'])) {
    http_response_code(500);
    exit('No page to fetch');
}

$allowedSites = [
    'https://www.google.com'
];

// check that url is one of the allowed sites. If it is then
echo file_get_contents($_GET['url']);

// otherwise error
?>