<?php

require_once('functions.php');

set_exception_handler('handleError');

require_once('mysqlconnect.php');

// $query = 'SELECT * FROM `products`';

$query = "SELECT p.`id`, p.`name`, p.`price`,
                i.url AS `images`
            FROM `products` AS p
            JOIN `images` AS i
                ON p.`id` = i.`products_id`
            ORDER BY p.`id`
        ";

/*procedural*/
$result = mysqli_query($conn, $query);

if(!$result) {
    throw new Exception('invalid query: '. mysqli_error($conn));
}

$data = [];

while($row = mysqli_fetch_assoc($result)) {
    $currentID = $row['id'];
    $currentID = intval($currentID);
    $image = $row['images'];

    if(isset($data[$currentID])) {
        // $data[$row['id']]['images'][] = $row['images'];
        $data[$currentID]['images'][] = $image; //new push way
        // array_push($data[$currentID]['images'], $image); //old push way
        // $data[$currentID]['images'][count($data[$currentID]['images'])] = $image; //mean way!!
    } else {
        unset($row['images']);
        $row['images'] = [];
        // array_push($row['images'], $image);
        $row['images'][] = $image;

        //shorter version
        // $data[$row['id']]['images'] = [$row['images']];

        $row['price'] = intval($row['price']);
        // $row['price'] = (int)$row['price']; //using casting

        $data[$currentID] = $row; //data is an associative array
    }
}

$pureData = [];
foreach($data as $value) {
    $pureData[] = $value;
}

$output = [
    'success'=>true,
    'products'=>$pureData
];

$json_output = json_encode($output);

print($json_output);

?>