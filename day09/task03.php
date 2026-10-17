<?php

function dynamic_body() {
    $valid_pages = ["home", "php", "sql"];

    if (isset($_GET["page"]) && in_array($_GET["page"], $valid_pages)) { #checks if the parameter exists and if it not null #
        $filename = $_GET["page"] . ".html";
        return file_get_contents($filename);
    }

    return "<p>Unknown page</p>";
}

?>