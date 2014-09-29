<?php
$email_to = "info@eisglut.com";
//$email_to = "ed@kreativkombinat.de";
$name = $_POST["name"];
$email = $_POST["email"];
$betreff = $_POST["betreff"];
$message = $_POST["message"];
$text = "NAME: $name<br>
         EMAIL: $email<br>	
        BETREFF: $betreff<br>	 
         MESSAGE: $message";
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
$headers .= "From: <$email>" . "\r\n";
mail($email_to, "Nachricht via Kontaktformular", $text, $headers);
?>