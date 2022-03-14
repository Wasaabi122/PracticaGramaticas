<?php
$conexion = mysqli_connect('localhost','root','','gramaticas');
var_dump($_POST);
$gramatica = $_POST["gramatica"];
$sql = "SELECT idGrama from gramaticas where NOMBRE = '$gramatica'";
$idG = mysqli_query($conexion,$sql);
while($row = mysqli_fetch_array($idG)){
    $id = $row['idGrama'];
  }
    $alpha = $_POST["alpha"];
    $beta = $_POST["beta"];
    $sql="INSERT INTO reglas (alpha, beta, idGrama) values ('$alpha', '$beta','$id' )";
    echo mysqli_query($conexion,$sql);
?>