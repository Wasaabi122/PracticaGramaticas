<?php
$conexion = mysqli_connect('localhost','root','','gramaticas');
$nombre = $_POST["nombre"];
$sql="INSERT INTO gramaticas (NOMBRE) values ('$nombre')";
echo mysqli_query($conexion,$sql);

?>