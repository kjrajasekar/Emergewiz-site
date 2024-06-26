<?php
$to = "rajasekar.k@n-school.com";
$subject = "Message from Emergewiz Wepsite";
$headers = "From: kjrajasekar@gmail.com\r\n";
$headers.= "Content-Type: text/html; charset=UTF-8\r\n";

$emailBody = "
    < p > We received your message.Thank you!</p >
        <div> Name : $name </div>
        <div> Email : $email </div>
        <div> Subject : $sub </div>
        <div> Message : $message </div>
";
if (mail($to, $subject, $emailBody, $headers)) {
        echo 'Email sent successfully';
} else {
        echo 'Email could not be sent.';
}
?>