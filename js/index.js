
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}



document.getElementById("cadastro").onclick = function() {
    var userName = document.getElementById("UsuarioTxt").value;
    var senha = document.getElementById("SenhaTxt").value;
    fazCadastro('http://localhost:8083/client/post',userName,senha);
};

function fazCadastro(url, userName, senha) {
  fetch(url,{
    method : "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({usuario:userName,nome:userName,senha:senha}),
}).then(
    response => response.text() 
).then(
    html => console.log(html)
);
}

function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('Problema com o request.');
      }
    }
}


document.getElementById("vender").onclick = function() {
  var nomeLivro = document.getElementById("NomeLivroTxt").value;
  var generoLivro = document.getElementById("genero-vender").value;
  var precoLivro = document.getElementById("PrecoTxt").value;
  var imagem = document.getElementById("FotoTxt").value;
  cadastroLivro('http:/localhost:8083/livro/post',nomeLivro ,generoLivro, precoLivro);
  cadastroFotoLivro('http:/localhost:8083/foto/post', imagem)
};

function cadastroLivro(url, nomeLivro ,generoLivro, precoLivro) {
  fetch(url,{
    method : "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({titulo:nomeLivro,genero:generoLivro,preco:precoLivro}),
}).then(
    response => response.text() 
).then(
    html => console.log(html)
);
}

function cadastroFotoLivro(url, imagem) {
  fetch(url,{
    method : "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({imagem:imagem}),
}).then(
    response => response.text() 
).then(
    html => console.log(html)
);
}
