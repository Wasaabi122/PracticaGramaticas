(function load(){
    var ob = "";

    $.ajax({
               url:"consGrama.php",
               type: "POST",
               data: ob,
               beforeSend: function(objeto){
               
               },
               success: function(data)
               { 
                
                $("#panel_listado").html(data);

               }
            });
})()
const $btnReg = document.getElementById("btnReg");
$btnReg.addEventListener("click", (event) => {
    alert("Se regresera al menu principal B)")
    location.href="index.html"
})
