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
//$imeTable = 'novBolnikTab';
$imeTable = 'podatkiVsi';

$polja = implode(',', array_keys($_POST));

$vrednosti = '"' . implode('","', $_POST) . '"';

vstavi($imeTable, $vrednosti, $polja);

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
    $sql = "INSERT INTO " . $imeTable . " ($polja) VALUES ($c)";
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