<?php

header('Access-Control-Allow-Origin: *'); //別の場所から来たアクセスも許可します * = 全部許可
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Content-Type: application/json'); //これから送るデータはJSON形式です

//Content-Type → 送るデータについて


require_once './config/db.php';


$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {

    $data = json_decode(file_get_contents("php://input"), true);

    $title = $data["title"];
    $content = $data["content"];

    $sql = "INSERT INTO memos(title, content)
            VALUES(:title,:content)";

    $stmt = $pdo->prepare($sql);

    $stmt->bindValue(":title", $title);
    $stmt->bindValue(":content", $content);

    $stmt->execute();

    //Reactに返す
    echo json_encode([
        "status" => "ok",
        "message" => "memo saved"
    ]);

    exit;
}
