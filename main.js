    $(document).ready(function() {
        $("#nome-tarefa").submit(function(e) {
        e.preventDefault();
    
    var tarefaTexto = $("#input-tarefa").val();

        

    if (tarefaTexto !== "") {
        var tarefaItem = $("<li>").text(tarefaTexto);
        $("#tarefas").append(tarefaItem);
        $("#input-tarefa").val("");

        
    }
});

    $("#tarefas").on("click","li",function() {
        $(this).toggleClass("completa");
        });
});