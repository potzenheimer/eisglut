<!DOCTYPE html> 
<html> 
	<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1"> 
	<title>Bestätigung</title> 
<link type="text/css" href="css/jquery.mobile-1.2.0.css" rel="stylesheet">
<link type="text/css" href="css/mobile.css" rel="stylesheet">
	
<script src="../scripts/jquery-1.8.3.min.js"></script> 
<script src="../scripts/jquery.mobile-1.2.0.min.js"></script>
</head> 

<body> 

	<div data-role="page" data-theme="a" class="type-interior">
	
	<div data-role="content" data-theme="a">	
	
			
			<h2>VIELEN DANK!</h2>

			
<p>
			<a href="index.html" data-role="button" data-theme="a" data-icon="arrow-l">Zurück</a>
</p>


</div><!-- /content -->

<?php
$email_to = "info@eisglut.com";


$name = $_GET["cname"];
$email = $_GET["cemail"];
$betreff = $_GET["betreff"];
$message = $_GET["ccomment"];


$text = "NAME: $name<br>
         EMAIL: $email<br>	
        BETREFF: $betreff<br>	 
         MESSAGE: $message";
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
$headers .= "From: <$email>" . "\r\n";
mail($email_to, "Nachricht via Kontaktformular", $text, $headers);
?>


</div><!-- /page -->

</body>
</html>