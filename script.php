<?php    
try {
    $conn = new PDO('mysql:host=localhost;dbname=doge', 'root', '');
	} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
	}
	$sql = "SELECT * FROM dogs";
	if($result = $conn->query($sql)){
	foreach($result as $row){
		$name[] = $row["name"];
		$img[] = $row["img"];
        }
	}

?>