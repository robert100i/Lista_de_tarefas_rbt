$(document).ready(function() {
    $("#nome-tarefa").submit(function(e) {
    e.preventDefault();
    
    var tarefaTexto = $("#input-tarefa").val();

        $("#tarefas li").click(function() {
        $(this).toggleClass("completa");
        });

    if (tarefaTexto !== "") {
        var tarefaItem = $("<li>").text(tarefaTexto);
        $("#tarefas").append(tarefaItem);
        $("#input-tarefa").val("");

        
    }
});
});