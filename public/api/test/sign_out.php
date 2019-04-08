<?php

session_start();

// unset($_SESSION['user']); // this line is not mandatory, just to be extra cautious

session_destroy();

print(json_encode(['success' => true]));
