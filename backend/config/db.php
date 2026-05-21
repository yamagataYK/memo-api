<?php

$env = parse_ini_file(__DIR__ . '/../.env');

try {
    $pdo = new PDO(
        "mysql:host={$env['DB_HOST']};dbname={$env['DB_NAME']};charset=utf8",
        $env['DB_USER'],
        $env['DB_PASS']
    );
} catch (PDOException $e) {
    die($e->getMessage());
}
