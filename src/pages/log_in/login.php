<?php
session_start();

@ $db = new mysqli('localhost', 'root','', 'clothing_web');

if (mysqli_connect_errno()) {
   echo "Error: Could not connect to database.  Please try again later.";
   exit;
}

$username = $_POST["username"];
$password = $_POST["password"];

$query = "SELECT `password` from users WHERE username='$username'";
$result = $db->query($query);

if ($result) {
    echo  "password found";
    if ($result["password"]===$password)
    {
      $_SESSION["username"]=$username;
      $_SESSION["logged_in"]=true;
      echo "<p>Log in successful! Welcom $_SESSION['username']</p>";
    }
    else
    {
      echo "Invalid username or password";
    }
} else {
    echo "Invalid username or password outer";
}


?>