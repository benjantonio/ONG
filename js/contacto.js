
$("#btn_limpiar").click(
    function(evento) {
        $("#nombre").val("");
        $("#rut").val("");
        $("#email").val("");
        $("#telefono").val("");
        $("#mensaje").val("");
        evento.preventDefault(); 
    }
 );
