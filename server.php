<?php
$string = file_get_contents("todo.json");
$todos = json_decode($string, true);
// $todos = [
//     [
//         "text" => "HTML",
//         "done" => true
//     ],
//     [
//         "text" => "CSS",
//         "done" => true
//     ],
//     [
//         "text" => "Responsive Design",
//         "done" => true
//     ],
//     [
//         "text" => "Javascript",
//         "done" => true
//     ],
//     [
//         "text" => "PHP",
//         "done" => true
//     ],
//     [
//         "text" => "Laravel",
//         "done" => false
//     ],
// ];

//Controllo se c'è la chiave newTodo nel post
if (isset($_POST["newTodo"])) {
    //Salvo il nuovo dato
    // $new_todo["text"] = $_POST["newTodo"];
    // $new_todo["done"] = false;

    //Salvo il nuovo dato
    $new_todo = [
        "text" => $_POST["newTodo"],
        "done" => false
    ];
    $todos[] = $new_todo;

    //Scrivo il dato nel file
    file_put_contents("todo.json", json_encode($todos));
}



// Parte di invio dei dati
header("Content-Type: application/json");
echo json_encode($todos);
