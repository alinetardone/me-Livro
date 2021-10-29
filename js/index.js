const getLivros = 'http://localhost:8083/livro/get'

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function fazCadastro(url, userName, senha) {
  var userName = document.getElementById("UsuarioTxt").value;
  var senha = document.getElementById("SenhaTxt").value;
  var url = 'http://localhost:8083/client/post';

  fetch(url, {
    method: "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      usuario: userName,
      nome: userName,
      senha: senha
    }),
  }).then(
    response => response.text()
  ).then(
    html => console.log(html)
  );
}


function getBase64Image(){  
    var url;
    var canvas = document.createElement("canvas");
    var img1=document.createElement("img");    
    url = document.getElementById("FotoTxt").value;
    img1.setAttribute('src', url); 
    canvas.width = img1.width; 
    canvas.height = img1.height; 
    var ctx = canvas.getContext("2d"); 
    ctx.drawImage(img1, 0, 0); 
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
} 

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function listaLivros(getLivros) {
  console.log("list iniciado...");
  const ul = document.getElementById('livros');

  fetch("http://localhost:8083/livro/get", {
      method: "GET",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(
      response => response.json()

    ).then(function (data) {

      let livros = data;
      console.log(livros);
      var number=1;
      livros.forEach(data => {
        document.getElementById("titulo"+number).value=data.titulo;
        document.getElementById("preco"+number).value=data.preco;
        number++;
      });
    })
    .catch(function (error) {

      console.log(error);
    });
}

function cadastroLivro(url, nomeLivro ,generoLivro, precoLivro) {
  var nomeLivro = document.getElementById("NomeLivroTxt").value;
  var generoLivro = document.getElementById("genero-vender").value;
  var precoLivro = document.getElementById("PrecoTxt").value;
  var url = 'http://localhost:8083/livro/post';

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
var id_Livro=0;

fetch("http://localhost:8083/livro/get/id", {
  method: "GET",
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}).then(
  response => response.json()

).then(function (data) {
  id_Livro = data.id;
})
alert("" );   
cadastroFotoLivro('http://localhost:8083/foto/post', getBase64Image(), 1, id_Livro);
alert("" );   
}

function cadastroFotoLivro(url, imagem, id_Client, id_Livro ) {
   
  fetch(url,{
    method : "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({imagem:imagem, id_Livro:id_Livro,id_Client:id_Client}),
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
