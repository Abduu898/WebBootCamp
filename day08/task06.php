<?php

function next_term($current) {
    $result = "";
    $i = 0;
    $length = strlen($current);

    while ($i < $length) {
        $digit = $current[$i];
        $count = 1;

        while ($i + $count < $length && $current[$i + $count] === $digit) {
            $count = $count + 1;
        }

        $result = $result . $count . $digit;
        $i = $i + $count;
    }

    return $result;
}

function sequence(int $n): void {
    if ($n < 0) {
        return;
    }

    $term = "1";

    for ($i = 0; $i <= $n; $i++) {
        echo $term . "\n";
        $term = next_term($term);
    }
}