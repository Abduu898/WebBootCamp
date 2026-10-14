<?php
function get_shortest(array $strings){
    $shortest = $strings[0];
    for ($i = 1; $i < count($strings); $i++) {
        if (strlen($strings[$i]) < strlen($shortest)) {
            $shortest = $strings[$i];
        }
    }

    return $shortest;
}
