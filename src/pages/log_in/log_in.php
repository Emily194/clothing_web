<?php
session_start();
require 'db.php'; // Include database connection file

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['passwrd'];

    // Prepare SQL statement to find user by username
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Check if user exists and if the password is correct
    if ($user && password_verify($password, $user['password'])) {
        // Set session variables for logged-in user
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        
        echo "Login successful. Welcome, " . htmlspecialchars($user['username']) . "!";
        // Redirect to the dashboard or another page
        // header("Location: dashboard.php");
        // exit;
    } else {
        echo "Invalid username or password.";
    }
}
?>
