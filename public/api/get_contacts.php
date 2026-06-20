<?php
// Handle CORS for React development and production
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Ensure the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents("php://input"));
$supplied_password = $data->password ?? '';

// ADMIN PASSWORD - Set to a secret in GitHub Actions
$admin_password = "YOUR_ADMIN_PASSWORD";

if ($supplied_password !== $admin_password) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Unauthorized: Incorrect password"]);
    exit();
}

// Database credentials
$host = "localhost";
$db_name = "u477692720_Auragold";
$username = "u477692720_Auragoldjeevan";
$password = "YOUR_DATABASE_PASSWORD"; 

try {
    // Create PDO connection
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create table if it doesn't exist (in case no one has contacted yet)
    $createTableQuery = "
        CREATE TABLE IF NOT EXISTS contacts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            subject VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ";
    $conn->exec($createTableQuery);

    $query = "SELECT id, name, email, subject, message, created_at FROM contacts ORDER BY created_at DESC";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    http_response_code(200);
    echo json_encode(["status" => "success", "data" => $results]);

} catch(PDOException $exception) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database Connection Error: " . $exception->getMessage()]);
}
?>
