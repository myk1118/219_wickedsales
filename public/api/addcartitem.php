<?php

require_once('functions.php');

set_exception_handler('handleError');

require_once('config.php');

require_once('mysqlconnect.php');

$product_id = 1;
$product_quantity = 1;
$user_id = 1;

$query = "SELECT `price` FROM `products` WHERE id = $product_id";

$result = mysqli_query($conn, $query);

if(!$result) {
    throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($result) === 0) {
    throw new Exception("no product matches product id $product_id");
}

$product_data = mysqli_fetch_assoc($result);

$product_price = (int)$product_data['price']; //makes price into an integer; same as intval

$product_total = $product_price * $product_quantity;

if(empty($cart_id)) {
    $cart_create_query = "INSERT INTO `carts` SET
        `item_count` = $product_quantity,
        `total_price` = $product_total,
        `created` = NOW(),
        `users_id` = $user_id,
        `changed` = NOW()
    ";
    print($cart_create_query);
}

?>