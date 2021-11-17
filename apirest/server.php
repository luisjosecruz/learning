<?php 

// -----------------------------------------------------------------------------------------------------
// Access Token
// -----------------------------------------------------------------------------------------------------
/*if (!array_key_exists('HTTP_X_TOKEN', $_SERVER)){
    die('error 1');
}

$url = 'http://localhost:8001';

$ch = curl_init($url);
curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    [
        "X-Token: {$_SERVER['HTTP_X_TOKEN']}"
    ]
);

curl_setopt(
    $ch,
    CURLOPT_RETURNTRANSFER,
    true
);

$ret = curl_exec($ch);

if($ret !== 'true'){
    die('error 2');
}*/

// -----------------------------------------------------------------------------------------------------
//Autenticación HMAC
// -----------------------------------------------------------------------------------------------------
// if(
//     !array_key_exists('HTTP_X_HASH', $_SERVER) ||
//     !array_key_exists('HTTP_X_TIMESTAMP', $_SERVER) ||
//     !array_key_exists('HTTP_X_UID', $_SERVER)
// ){
//     die;
// }

// list($hash, $timestamp, $uid) = [
//     $_SERVER['HTTP_X_HASH'],
//     $_SERVER['HTTP_X_TIMESTAMP'],
//     $_SERVER['HTTP_X_UID']
// ];

// $secret = 'this is secure API with PHP!';

// $newHash = sha1($uid.$timestamp.$secret);

// if($newHash !== $hash){
//     die;
// }

// -----------------------------------------------------------------------------------------------------
// Autenticación HTTP (Inseguro)
// -----------------------------------------------------------------------------------------------------
// $user = array_key_exists('PHP_AUTH_USER', $_SERVER) ? $_SERVER['PHP_AUTH_USER'] : '';
// $pwd = array_key_exists('PHP_AUTH_PW', $_SERVER) ? $_SERVER['PHP_AUTH_PW'] : '';
// if($user !== 'luis' || $pwd !== '123'){ die; }

// Definimos los recursos disponibles.
$allowdResourcesTypes = [
    'books',
    'authores',
    'genres',
];

// Validamos que el recurso esté disponible.
$resourceType = $_GET['resource_type'];

if(!in_array($resourceType, $allowdResourcesTypes)){
    http_response_code( 400 );

    die;
}

// Definimos los recursos
$books = [
    1 => [
        'titulo' => 'Lo que el viento se llevó',
        'id_autor' => 2,
        'id_genero' => 2,
    ],
    2 => [
        'titulo' => 'La Iliada',
        'id_autor' => 1,
        'id_genero' => 1,
    ],
    3 => [
        'titulo' => 'La Odisea',
        'id_autor' => 1,
        'id_genero' => 1,
    ],
];

header('Content-Type: application/json');

// Levantamos el id del recurso buscado.
$resourceId = array_key_exists('resource_id', $_GET) ? $_GET['resource_id'] : '';

// Generamos la respuesta asumiendo que el pedido es correcto.
switch (strtoupper($_SERVER['REQUEST_METHOD'])){
    case 'GET':
        if(empty($resourceId)){
            echo json_encode($books);
        }else{
            if(array_key_exists($resourceId, $books)){
                echo json_encode($books[$resourceId]);
            }else{
                http_response_code(404);
            }
        }
        break;
    case 'POST':
        // Tomamos la entrada "cruda"
        $json = file_get_contents('php://input');

        // Transformamos el json recibido a un nuevo elemento del arreglo
        $books[] = json_decode($json, true);

        // Emitimos hacia la salida la última clave del arreglo de libros
        echo array_keys($books)[count($books) -1];
        break;
    case 'PUT':
        // Validamos que el recurso buscado exista
        if(!empty($resourceId) && array_key_exists($resourceId, $books)){
            // Tomamos la entrada cruda
            $json = file_get_contents('php://input');

            // Transformamos el json recibido a un nuevo elemento del arreglo
            $books[$resourceId] = json_decode($json, true);

            // Retornamos la colección modificada en formato json
            echo json_encode($books);
        }
        break;
    case 'DELETE':
        // Validamos que el recurso buscado exista
        if(!empty($resourceId) && array_key_exists($resourceId, $books)){
            unset($books[$resourceId]);

            echo json_encode($books);
        }
        break;
}

// get all cmd: curl -X http:localhost:8000/books
// get one cmd: curl -X http:localhost:8000/books/1
// post cmd:    curl -X "POST" http://localhost:8000/books -d "{ \"titulo\":\"Nuevo Libro\",\"id_autor\": 1,\"id_genero\": 2}"
// put cmd:     curl -X "PUT" http://localhost:8000/books/1 -d "{ \"titulo\":\"Flow\",\"id_autor\": 1,\"id_genero\": 3}"
// delete cmd:  curl -X "DELETE" http://localhost:8000/books/1

// autenticación HTTP
// curl http://luis:123@localhost:8000/books

// autenticación HMAC
// php generate_hash.php 1
// curl http://localhost:8000/books -H "X-HASH:85a3336cd8e843ff4205eddc466f5a3798ca1e3b" -H "X-UID: 1" -H "X-TIMESTAMP: 1625069037"

//GET: curl http://localhost:8001 -X 'POST' -H 'X-Client-Id: 1' -H 'X-Secret:SuperSecreto!'
//GET: curl http://localhost:8000/books -H 'X-Token: c4b02a1525349e7888d4140dcd524aff2d6296dd' | jq

?>


