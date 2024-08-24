<?php
include 'mail_config.php';
# Check If Request Is From Ajax & Method Is POST
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && $_SERVER['REQUEST_METHOD'] == 'POST') {

    # Diplay Errors
    # Uncomment when debugging
    
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
    ini_set("log_errors", '1');
    ini_set("error_log", "error.log");
    
    # Form Data
    $form_json = json_decode($_POST['data'], true);
	# The Name
	$user_name = $form_json['fname'];
	# The Email
	$user_email = $form_json['email'];
	# The Phone
	$user_phone = $form_json['phone'];
	# The Phone
	$user_company = $form_json['cname'];
	# The Message
	$user_message = $form_json['message'];
	

	
	require('PHPMailer/class.phpmailer.php');

	$mailx = new PHPMailer();
	include 'templates/contact-ack.php';
    $subject="Form Acknowledgement Mail From Byot Tech";
	$content = $responder_templateack;
	$mailx->IsSMTP();
	$mailx->SMTPDebug = 0;
	$mailx->SMTPAuth = TRUE;
	$mailx->SMTPSecure = "tls";
	$mailx->Port     = 587;  
	$mailx->CharSet = 'UTF-8';
	
	$mailx->Username = $smtp_username;
	$mailx->Password = $smtp_password;
	$mailx->Host     = $smtp_host;
	$mailx->Mailer   = "smtp";

	$mailx->setFrom($info, "Byottech");
	$mailx->AddReplyTo($info, "Byottech");
	$mailx->AddAddress($user_email);
	$mailx->Subject = $subject;
	$mailx->WordWrap   = 80;
	$mailx->MsgHTML($content);
	$mailx->IsHTML(true);

	$mail = new PHPMailer();

    # Email template ($responder_template)
   	include 'templates/contact-responder.php';
    $subject="Online Contact Form";
	$content = $responder_template;
	$mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPDebug = 0;       
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
	$mail->Port = 587;
    $mail->CharSet = 'UTF-8';

	$mail->Username = $smtp_username;
	$mail->Password = $smtp_password;
	$mail->Host     = $smtp_host;
	$mail->Mailer   = "smtp";

	$mail->setFrom($info, "Byottech");
	$mail->AddReplyTo($info, "Byottech");
	$mail->AddAddress($to);
	$mail->Subject = $subject;
	$mail->WordWrap   = 80;
	$mail->MsgHTML($content);
	$mail->IsHTML(true);
	if(!$mail->Send() || !$mailx->Send()){
		$response_array = array(
			"status" => "error",
			"message" => "Error Sending Email."
    	);
	}else{
		$response_array = array(
			"status" => "success",
			"message" => "Thank you for getting in touch with us. Our team will get back to you shortly."
		);
	} 

	# Return
    header('Content-type: application/json');
    echo json_encode($response_array);
}

#Kill
unset($_POST);
exit();
