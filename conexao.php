<?php
$servidor = "localhost";
$porta = "3306"; //porta padrao do mySQL
$senha = "";
$banco = "planetaphone";

try {
    $conn = new PDO("mysql:host=$servidor; port=$porta; dbname=$banco", $usuario, $senha)
    $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    } catch(PDOException $e) {
        echo "Erro de conexão: ". $e->getMessage(); 
    }

?>    