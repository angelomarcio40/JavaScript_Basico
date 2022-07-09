// funções que são executadas quando a página é carregada
document.addEventListener("DOMContentLoaded", function () {
  ocultaLoader();
});

// função exibe loader
const ExibeLoader = () => {
  $(".preloader").fadeTo("slow", 1);
};

const ocultaLoader = () => {
  $(".preloader").fadeOut("slow", 0);
};

// função que realiza a soma de dois numeros
const soma = () => {
  // declara uma variável e atribui valor
  let numero1 = prompt("Digite o primeiro numero");

  let numero2 = prompt("Digite o segundo numero");

  let soma = parseFloat(numero1) + parseFloat(numero2);

  alert(soma);
};

const soma2 = (numero1, numero2) => {
  let soma = numero1 + numero2;
  alert(soma);
};

// Função que soma 2 numeros digitados pelo usuário em um form
const somaNumeros = () => {
  // Cria uma var e captura o valor do input com id = numero1
  let numero1 = document.getElementById("numero1").value;

  let numero2 = document.getElementById("numero2").value;

  let soma = parseFloat(numero1) + parseFloat(numero2);

  // Exibe a soma dentro div resultado
  document.getElementById("resultado").innerHTML = `
    Resultado da soma é ${soma}
    `;
};

const exibe = (id) => {
  let elemento = document.getElementById(id);

  if (elemento.hidden == true) {
    elemento.hidden = false;
  } else {
    elemento.hidden = true;
  }
};

const exibeCidade = () => {
  // captura o elemento html do estado
  let estado = document.getElementById("estado");
  let cidade = document.getElementById("cidade");

  // exibe o valor do elemento capturado
  // alert(estado.value)
  if (estado.value == "sp") {
    cidade.innerHTML = `
        <option value="">São João da Boa Vista</option>
        <option value="">Aguaí</option>
        <option value="">Águas da prata</option>
        `;
  } else if (estado.value == "rj") {
    cidade.innerHTML = `
        <option value="">Laranjeiras</option>
        <option value="">Aguaí</option>
        <option value="">Parati</option>
        `;
  } else if (estado.value == "mg") {
    cidade.innerHTML = `
    <option value="">Andradas</option>
    <option value="">Poços de Caldas</option>
    <option value="">Belo Horizonte</option>
    `;
  }
};

// função que consulta o cep de uma API
// api utilizada POSTMON e viacep
const consultaCep = () => {
  let cep = document.getElementById("cep").value;

  if (cep == "") {
    alert("Preencha o CEP!");
    return;
  }

  ExibeLoader();
  const result = fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((result) => {
      // resposta final da requisição, já validada em formato JSON
      // manipulação do HTML
      document.getElementById("logradouro").value = result.logradouro;
      document.getElementById("bairro").value = result.logradouro;
      document.getElementById("localidade").value = result.logradouro;
      document.getElementById("uf").value = result.logradouro;

      document.getElementById("numero").focus();

      ocultaLoader();
    });
};
