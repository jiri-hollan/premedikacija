<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Novi bolnik</title>
</head>

<body>
<?php
// define variables and set to empty values
$ime = $priimek = $datRojstva  = $stevMaticna = $EMSO = "";
$imeTable = 'novBolnikTab';


$bolnik = $_POST;
$c=$d=$f="";

foreach($bolnik as $x => $x_value) {
	
	    if ($x == 'Submit') {
        break;    /* You could also write 'break 1;' here. */
		
    }
		
    /*echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";*/
	$a= "$" . $x;
	//echo $a;
	
	//echo "$" . $x ;
  //  echo "$" . $x . "="  . '"' . $x_value . '"';
   // echo "<br>";
     if ($_SERVER["REQUEST_METHOD"] == "POST") {
		 
        $b  ="'" . test_input($x_value) . "'";		
		$c = $c . ", " . $b;
		$d = $d . ", " . $x;
		$f = $f . ", "  . "$" . $x;
		//echo $c;
		//echo "<br>";
		//echo $d; 
		//echo "<br>";				
}
		
}
     if ($_SERVER["REQUEST_METHOD"] == "POST") {
$c = ltrim($c,", ");
$polja = ltrim($d,", ");
$f = ltrim($f,", ");
	//echo "$c" . $c;	
	//echo "<br>";
	//echo $polja; 
	//echo "<br>";
	//echo $f;
 vstavi($imeTable,$c,$polja );
} 

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}


function vstavi($imeTable,$c,$polja)  {
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "premedikacija";


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO". " " . $imeTable . " " . " ($polja) VALUES ($c)";
    // (ime, priimek, datRojstva, stevMaticna, EMSO)
	//echo $_SERVER["REQUEST_METHOD"];
                                                                 

	
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
    catch(PDOException $e)
    { 
    echo "exception" . $sql . "<br>" . $e->getMessage();
    }

$conn = null;
}
?>

</body>
</html>