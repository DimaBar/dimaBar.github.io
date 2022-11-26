<?php    
     $conn = mysqli_connect("localhost","root","","doge");

     if($conn == false){
        die("Беда с подключением к базе" . mysqli_connect_error());
     }
	$email = $_POST['email'];
		$name = $_POST['name'];
		$text = $_POST['text'];
		$sql = "INSERT INTO form (email, name, text) VALUES ('{$email}', '{$name}', '{$text}')";
	if(mysqli_query($conn, $sql)){
          echo "Good";
      } else{
          echo "Bad";
      }
	mysqli_close($conn);		
		

