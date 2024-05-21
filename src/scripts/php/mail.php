<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $errorEmpty = false;
    $errorEmail = false;

    if(empty($name) || empty($email) || empty($message)) {
        echo '<span class="text-white">Plese fill in all fields</span>';
        $errorEmpty = true;
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo '<span class="text-white">Plese enter a valid email address</span>';
        $errorEmail = true;   
    } else {
        echo '<span class="text-white">Message sent! Thank you</span>';
    };
} else {
    echo '<span class="text-white">Error! Please try again</span>';
};

?>

<script>
    $('#name', '#email', '#message').removeClass('border-red-500');

    const errorEmpty = '<?php echo $errorEmpty; ?>';
    const errorEmpty = '<?php echo $errorEmail; ?>';

    if(errorEmpty) {
        $('#name', '#email', '#message').addClass('border-red-500');
        console.log('Hello World')
    };

    if(errorEmail) {
        $('#email').addClass('border-red-500');
    };

    if (errorEmpty == false && errorEmail == false) {
        $('#name', '#email', '#message').val('');
    };
</script>








$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'scottkennethjackson@gmail.com';                     //SMTP username
    $mail->Password   = 'nAvmi2-maqpev-viffon';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('scottkennethjackson@gmail.com', 'Scott Kenneth Jackson');           //Add a recipient
    //$mail->addAddress('ellen@example.com');                     //Name is optional
    $mail->addReplyTo($email, $name);
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');             //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');        //Optional name

    //Content
    $mail->isHTML(true);                                        //Set email format to HTML
    $mail->Subject = 'Hi, Scott!';
    $mail->Body    = $message;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}