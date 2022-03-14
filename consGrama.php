<table class="table table-bordered">
	<thead>
		<th> Nombre de la gramtica </th>
		<th> Alpha </th>
        <th> </th>
		<th> Beta </th>
		<th> </th>
	</thead>
<?php
$conexion = mysqli_connect('localhost','root','','gramaticas');

$sql = "SELECT NOMBRE, alpha, beta FROM reglas, gramaticas WHERE reglas.idGrama = gramaticas.idGrama";
$i =0;
$cons = mysqli_query($conexion, $sql);
while ($row = mysqli_fetch_array($cons)) {
    $nGramatica = $row['NOMBRE'];
    $alpha = $row['alpha'];
    $beta = $row['beta'];
	?>
     <tbody>
     	<td> <?php echo $nGramatica; ?></td>
     	<td> <?php if($alpha == "epsilon"){
             echo "Σ";
         }else{echo $alpha;} ?></td>
        <td><?php echo "➜"?></td>
     	<td> <?php if($beta == "lamba"){
             echo "λ";
         }else{echo $beta;} ?></td>
     	<td class="col-lg-1"> 
     		 
     		
     		 <button class="button is-primary is-small"> Editar </button>
              <button class="button is-danger is-small">Eliminar</button>
     		 
     	</td>
    </tbody>
	<?php
}

?>
</table>

<!-- Modal -->
<div id="myModal_editar" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header" style="background-color: #084B8A; color: white;">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title"> Modal Editar </h4>
      </div>
      <div class="modal-body">
        <p> Edicion .</p>
        <div id="panel_editar"></div>
        <div id="panel_respuesta_edicion"></div>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-info" onclick="btn_guardar_edicion();"> Guardar</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal"> Cerrar </button>
      </div>
    </div>

  </div>
</div>


<!-- Modal -->
<div id="myModal_eliminar" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header" style="background-color: red; color:white;">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Eliminar</h4>
      </div>
      <div class="modal-body">
        <p> Eliminar </p>
        <div id="panel_eliminar"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" onclick="btn_eliminar_dato();"> Eliminar </button>
        <button type="button" class="btn btn-danger" data-dismiss="modal"> Cerrar </button>
       
      </div>
    </div>

  </div>
</div>