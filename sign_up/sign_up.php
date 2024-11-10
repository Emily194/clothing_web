<?php
@ $db = new mysqli('localhost', 'root','', 'clothing_web');

if (mysqli_connect_errno()) {
   echo "Error: Could not connect to database.  Please try again later.";
   exit;
}

if ($_SERVER["REQUEST_METHOD"]=="POST")
{
  $username = trim($_POST["username"]);
  $email = trim($_POST["email"]);
  $phone = trim($_POST["phoneNumber"]);
  $password = trim($_POST["password"]);

  $errors = [];

  if (!empty($username) && !empty($email) && !empty($phone) && !empty($password))
  {
    $query = ("SELECT COUNT(*) FROM users WHERE email='$email'");
    $result = $db->query($query);

    if ($result>0) {
      echo "Account already exits.<br>";
    } else {
      $stmt = $db->prepare("INSERT INTO users ('username', 'email', 'password') VALUES (?, ? ,?)");
      $stmt->bind_param("sss", $username, $email, $password);
      if($stmt->execute())
      {
        echo "<p>User registered successfully!</p>";
      }
      else
      {
        echo "Error: ". $stmt->error . "</p>";
      }
    }
  }
}
?>