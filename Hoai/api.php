<?php
header("Content-Type: application/json");

$API_KEY = "sk-proj-XXXX"; // GIỮ KÍN

$data = json_decode(file_get_contents("php://input"), true);
$input = $data["text"] ?? "";

$prompt = "Tạo 15–25 hashtag hot tại Việt Nam cho nội dung: $input";

$ch = curl_init("https://api.openai.com/v1/responses");
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer $API_KEY",
    "Content-Type: application/json"
  ],
  CURLOPT_POSTFIELDS => json_encode([
    "model" => "gpt-4.1-mini",
    "input" => $prompt
  ])
]);

$res = curl_exec($ch);
curl_close($ch);

echo $res;
