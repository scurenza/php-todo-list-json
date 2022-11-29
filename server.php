<?php

//Controllo se c'è la chiave newTodo nel post
if (isset($_POST["newTodo"])) {
    //Salvo il nuovo dato
    $new_todo["text"] = $_POST["newTodo"];
    $new_todo["done"] = false;
    $todos[] = $new_todo;
}

$todos = [
    [
        "text" => "HTML",
        "done" => true
    ],
    [
        "text" => "CSS",
        "done" => true
    ],
    [
        "text" => "Responsive Design",
        "done" => true
    ],
    [
        "text" => "Javascript",
        "done" => true
    ],
    [
        "text" => "PHP",
        "done" => true
    ],
    [
        "text" => "Laravel",
        "done" => false
    ],
];


// Parte di invio dei dati
header("Content-Type: application/json");
echo json_encode($todos);
