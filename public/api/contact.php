<?php
// Handle CORS for React development and production
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-[Type](https://Type), Accept");
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

// Database credentials
// REPLACE THESE WITH YOUR ACTUAL HOSTINGER DATABASE DETAILS
$host = "localhost";
$db_name = "u477692720_Auragold";
$username = "u477692720_Auragoldjeevan";
$password = "YOUR_DATABASE_PASSWORD"; // You need to edit this file locally or on Hostinger to put your actual password

try {
    // Create PDO connection
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create table if it doesn't exist
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

    // Get POST data
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->name) && !empty($data->email) && !empty($data->message)) {
        
        $query = "INSERT INTO contacts (name, email, subject, message) VALUES (:name, :email, :subject, :message)";
        $stmt = $conn->prepare($query);

        // Sanitize
        $name = htmlspecialchars(strip_tags($data->name));
        $email = htmlspecialchars(strip_tags($data->email));
        $subject = htmlspecialchars(strip_tags($data->subject));
        $message = htmlspecialchars(strip_tags($data->message));

        // Bind
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":subject", $subject);
        $stmt->bindParam(":message", $message);

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["status" => "success", "message" => "Contact saved successfully."]);
        } else {
            http_response_code(503);
            echo json_encode(["status" => "error", "message" => "Unable to save contact."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Unable to save contact. Data is incomplete."]);
    }
} catch(PDOException $exception) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database Connection Error: " . $exception->getMessage()]);
}
?>
