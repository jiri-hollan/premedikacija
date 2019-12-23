<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
</head>
<body>
<?php
 
//Connect to MySQL using the PDO object.
$pdo = new PDO('mysql:host=localhost;dbname=premedikacija', 'root', '');
 
//Our SQL statement, which will select a list of tables from the current MySQL database.
// $sql = "SELECT * FROM podatkiVsi";
   $sql = "select column_name from information_schema.columns where table_name = 'novBolnikTab'";
 
//Prepare our SQL statement,
$statement = $pdo->prepare($sql);
 
//Execute the statement.
$statement->execute();
 
//Fetch the rows from our statement.
//$tables = $statement->fetchAll(PDO::FETCH_NUM);
  $tables = $statement->fetchAll(PDO::FETCH_NUM);
//Loop through our table names.
foreach($tables as $table){
    //Print the table name out onto the page.
    //echo $table[0], '<br>';
	print_r($table);
	echo '<br>';

	
}
?>

</body>
</html>