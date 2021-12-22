# pesquisa-url-tabela-balanco-anual
Código para ser inserido (substituindo) a inicialização da tabela de balanço anual.

A partir do código, será possível criar links com o parâmetro "pesquisa" na URL, e a tabela filtrar os dados da pesquisa no carregamento da página.

Basta substituir o código atual:

<pre>

    function tabelaPublicacoes() {
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

    //Evento chamado apos o carregamento de toda pagina.
    $(window).load(function () {
        tabelaPublicacoes();
    });


</pre>

Pelo código do arquivo index.js
<pre> index.js </pre>

O código já foi testado utilizando uma extensão chamada TamperMonkey.

Dúvidas:

<pre>Equipe de Desenvolvimento
(63) 9 8434-4321</pre>
