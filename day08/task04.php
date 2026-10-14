<?php
function calc(string $operator, int $nbr1, int $nbr2) {
    switch ($operator) {
        case "+":
            return $nbr1 + $nbr2;
        case "-":
            return $nbr1 - $nbr2;
        case "*":
            return $nbr1 * $nbr2;
        case "/":
            if ($nbr2 === 0) {
                return "Error: Division by zero";
            }
            return $nbr1 / $nbr2;
        default:
            return "Error: Invalid operator";
    }
}