<?php
function render_body(string $page) {
    $valid_pages = ["home", "php", "sql"];

    if (in_array($page, $valid_pages)) {
        $filename = $page . ".html";
        return file_get_contents($filename);
    }

    return "<p>Unknown page</p>";
}

?>