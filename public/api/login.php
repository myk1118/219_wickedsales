<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

$json_input = file_get_contents("php://input"); // gets the raw string of the body of the request packet from the request of the client
$input = json_decode($json_input, true); // 'true' converts all objects into assoc arrays

if (empty($input['email'])) {
    throw new Exception('email is a required value');
}

if (empty($input['password'])) {
    throw new Exception('password is a required value');
}

$email = $input['email'];
$password = $input['password'];

$email = addslashes($email); // escapes out all the quote characters in a string

$hashedPassword = sha1($password);

unset($input['password']);

$query = "SELECT `id`, `name` FROM `users`
        WHERE `email` = '$email' AND `password` = '$hashedPassword'
";

$result = mysqli_query($conn, $query);

if (!$result) {
    throw new Exception(mysqli_error($conn));
}

if (mysqli_num_rows($result) !== 1) {
    throw new Exception('invalid username or password');
}

$data = mysqli_fetch_assoc($result);

$token = $email . $data['id'] . microtime();
$token = sha1($token);

$connect_query = "INSERT INTO `user_connections` SET
    `token` = '$token',
    `users_id` = {$data['id']},
    `created` = NOW(),
    `ip_address` = '{$_SERVER['REMOTE_ADDR']}'
";

$connect_result = mysqli_query($conn, $connect_query);

if (!$connect_result) {
    throw new Exception(mysqli_error($conn));
}

if (mysqli_affected_rows($conn) !== 1) {
    throw new Exception('could not log you in: connection not saved');
}

$_SESSION['user_data'] = [
    'id' => $data['id'],
    'username' => $data['name'],
    'token' => $token
];

$output['success'] = true;
$output['username'] = $data['name'];
$output['token'] = $token;

$json_output = json_encode($output);

print($json_output);
