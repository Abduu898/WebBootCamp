<?php 

function dog_bark(int $woof_nb) {
    for ($i= 0; $i < $woof_nb; $i++) { 
        echo "Woof!\n";
    }
}