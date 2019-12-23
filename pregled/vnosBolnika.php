<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Novi bolnik</title>
</head>
<style>
legend {
   background-color: navy;
   color: yellow; 
   font-size: 2.0em;
}
label {

  width:180px;
  display: inline-block;
  text-align: right;
}

p {
  text-align: center;
  
}

input {
 <!--width: 50%;-->
font-size: 20px;
 padding: 5px 5px;
 margin: 5px 5px;
 box-sizing: border-box;
 border: 3px solid #ccc;
 webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input:focus {
  border: 3px solid #555;
}

fieldset  {
  padding: 20px 20px;
  width:500px; 

  background-color: lightblue;
{

</style>
<body>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
<!--<form method="post" action=""> -->
 <fieldset>
    <legend>Nov bolnik</legend>
  	
    <label for="ime">Ime:</label>  
    <input id="ime" type="text" name="ime" required><br>    
    <label for="priimek">Priimek:</label>
    <input id="priimek" type="text" name="priimek"​ required><br>     
    <label for="datRojstva">Datum rojstva:</label>
    <input id="datRojstva"type="date" name="datRojstva" required><br> 
    <label for="stevMaticna">Matična številka:</label>
    <input id="stevMaticna"type="text" name="stevMaticna" required><br>
	<label for="EMSO">EMŠO:</label>
    <input id="EMSO" type="text" name="EMSO" >
	<br><br><br> 
	
   <p> <input type="submit" name="Submit" value="potrdi">	
    <input type="reset" name="reset" value="počisti">		
	</p>	
 </fieldset>	

</form>

<?php
// define variables and set to empty values
$ime = $priimek = $datRojstva  = $stevMaticna = $EMSO = "";
$imeTable = 'podatkiVsi';


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