<?php

function form_is_submitted() {
    return isset($_POST["submit"]);
}

function whoami() {
    $name = isset($_POST["name"]) ? $_POST["name"] : null;
    $age = isset($_POST["age"]) && is_numeric($_POST["age"]) ? $_POST["age"] : null;
    $curriculum = isset($_POST["curriculum"]) && $_POST["curriculum"] !== "" ? $_POST["curriculum"] : null;

    if ($name !== null && $age !== null) {
        echo "Hi, my name is " . $name . " and I'm " . $age . " years old.";
    } elseif ($name === null && $age !== null) {
        echo "Hi, I have no name and I'm " . $age . " years old.";
    } elseif ($name !== null && $age === null) {
        echo "Hi, my name is " . $name . ".";
    } else {
        echo "Hi, I have no name.";
    }

    if ($curriculum !== null) {
        echo " I'm a student of " . $curriculum . ".";
    }
}

?>