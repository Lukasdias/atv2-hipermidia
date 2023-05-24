(function(global) {

  var doc = {};

  var htmlPaginaInicial = "components/pagina-inicial.html";
  var itensCategoriasUrl =
    "data/categorias.json";
  var htmlTituloCategorias = "components/titulo-categorias.html";
  var htmlCategorias = "components/categorias.html";
  var itensCardapioUrl = "data/itens_cardapio/";
  var htmlTituloItensCardapio = "components/titulo-itens-cardapio.html";
  var htmlItensCardapio = "components/itens-cardapio.html";

  // Função para inserir um código html em um determinado elemento
  function insereHtml(seletor, html) {

  }

  // Mostra o ícone de carregamento dentro do elemento identificado por 'seletor'.
  function exibeLoader(seletor) {

  };

  // Substitui o nome da propriedade pelo seu respectivo valor em uma determinada string
  function inserePropriedade(string, nomeProp, valorProp) {

  };

  // Ao carregar a página, antes das imagens e CSS
  document.addEventListener("DOMContentLoaded", function(event) {

  });

  // Builds HTML for the categories page based on the data
  // from the server
  function exibirVisaoCategorias(categorias) {
    // Carrega o título da página de categorias

  }

  // Usa os dados das categorias e componentes html para criar a visão das categorias
  function criaVisaoCategorias(
    categorias,
    htmlTituloCategorias,
    htmlCategorias
  ) {

  }


  function exibirVisaoItensCardapio(itensCardapioCategoria) {

  }

  // Usa os dados dos itens e componentes html para criar a visão itens do cardápio
  function criaVisaoItensCardapio(
    itensCardapioCategoria,
    htmlTituloItensCardapio,
    htmlItensCardapio
  ) {

  }

  // Adiciona 'R$ ' na frente do preço se especificado
  function inserePreco(html, nomeProp, valorProp) {

  }

  // Adiciona o nome da porção em parênteses se especificado
  function inserePorcao(html, nomeProp, valorProp) {

  }

  // Carrega a visão das categorias.
  doc.carregarCategorias = function() {

  };

  // Carrega os itens do cardapio para uma determinada categoria..
  doc.carregarItensCardapio = function(codigoCategoria) {

  };

  global.$doc = doc;

})(window);