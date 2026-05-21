<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once './config/db.php';

echo json_encode([
    'status' => 'ok',
    'message' => 'API is working'
]);
