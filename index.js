// Lê a as variáveis da página e retorna como uma array associativa
function getUrlVars()
{
 var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;

}

$(document).ready(function() {
    
    // Captura a pesquisa
    var query = getUrlVars()['pesquisa'];  
    // Filtra caso haja algo na pesquisa através o parâmetro "oSearch"
    if(query!=''){
        $('#tableBalancoPublicacoes').DataTable({
            responsive: true,
            ordering: false,
            "lengthMenu": [[50, 100, 500, -1], [50, 100, 500, "Todos"]],
            "iDisplayLength": -1,
            "oSearch": { "sSearch": query },
            language: {
                url: 'https://transparencia.tupiratins.to.gov.br/componentes/vendors/data-tables/lang/pt-BR.json'
            }
        });

    }else{
        $('#tableBalancoPublicacoes').DataTable({
        responsive: true,
        ordering: false,
        "lengthMenu": [[50, 100, 500, -1], [50, 100, 500, "Todos"]],
        "iDisplayLength": -1,
        language: {
            url: 'https://transparencia.tupiratins.to.gov.br/componentes/vendors/data-tables/lang/pt-BR.json'
        }
    });
    }

});
