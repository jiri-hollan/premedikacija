
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>



<?php
// define variables and set to empty values
$kodaSql = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $kodaSql = test_input($_POST["kodaSql"]);

 
 
  
  
  echo "<br>";
  echo "kodaSql=" . " " . $kodaSql;
   echo "<br>";
 
 mojSql($kodaSql);

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  echo "<br>";
  echo  "Funkcija test data=" . " " . $data;
 
  
  return $data;
}
?>

<h2>Vnesi stavek SQL in potrdi</h2>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Vnesi : 
        
		
		<br>
		<textarea name="kodaSql" rows="10" cols="30"></textarea>
		<br>
        <input type="submit" name="Submit" value="potrdi"> 
		
</form>





<?php
echo "<h2>Your Input:</h2>";
echo $kodaSql;

?>


<?php


function mojSql($kodaSql) {
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "premedikacija";




try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = $kodaSql;
	echo "<br>";
	echo $sql . "<br>" ;
	
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Stavek SQL izvrsen";
    }
catch(PDOException $e)
    { 
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
}
?>
</body>
</html>