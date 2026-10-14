<?php
function calc_average(array $numbers) {
    if (empty($numbers)) {
        return 0;
    }
    $sum = array_sum($numbers);
    $count = count($numbers);
    return round($sum / $count, 1);

}
