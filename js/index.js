const getLivros = 'http://localhost:8083/livro/get'
var id_cliente;

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function queryString(parameter) {  
  var loc = location.search.substring(1, location.search.length);   
  var param_value = false;   
  var params = loc.split("&");   
  for (i=0; i<params.length;i++) {   
      param_name = params[i].substring(0,params[i].indexOf('='));   
      if (param_name == parameter) {                                          
          param_value = params[i].substring(params[i].indexOf('=')+1)   
      }   
  }   
  if (param_value) {   
      return param_value;   
  }   
  else {   
      return undefined;   
  }   
}

function exibirImagem() {
	var oFReader = new FileReader();
	oFReader.readAsDataURL(document.getElementById("Imagem").files[0]);
	oFReader.onload = function (oFREvent) {
		document.getElementById("imgPreview").src = oFREvent.target.result;

	}
};

function goCarrinho(){
  id_cliente = parseInt(queryString("client"));
  if(id_cliente == undefined)
  {
    alert("Você realizar o login para acessar o carrinho");
    return;
  }
  window.location = "Carrinho.html?client="+id_cliente;
}
function goVender(){
  id_cliente = parseInt(queryString("client"));
  if(id_cliente == undefined)
  {
    alert("Você realizar o login para vender um livro");
    return;
  }
  window.location = "Vender.html?client="+id_cliente;
}
function goCadastro(){
  id_cliente = parseInt(queryString("client"));
  window.location = "Cadastro.html?client="+id_cliente;
}
function goTrocar(){
  id_cliente = parseInt(queryString("client"));
  window.location = "Trocar.html?client="+id_cliente;
}
function goComprar(){
  id_cliente = parseInt(queryString("client"));
  window.location = "Layout.html?client="+id_cliente;
}


function fazLogin(url, userName, senha) {
  var userName = document.getElementById("UsuarioTxt").value;
  var senha = document.getElementById("SenhaTxt").value;

  var url = 'http://localhost:8083/client/login';

  fetch(url, {
    method: "POST",
    //mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      usuario: userName,
      senha: senha
    })
  }).then(
    response => response.json()
  ).then(function (data) {
    console.log(data);
    if (data.length == 0) {
      alert("O login não pode ser realizado, verifique o seu usuario e senha");
      return;
    }
    else{
      console.log(data[0].id);
      window.location = "Layout.html?client="+data[0].id;
    }
  })
    .catch(function (error) {
      console.log(error);
    });

}

function fazCadastro(userName, senha) {
  var userName = document.getElementById("UsuarioTxt").value;
  var senha = document.getElementById("SenhaTxt").value;
  var confirmaSenha = document.getElementById("ConfirmaSenhaTxt").value;

  if (senha != confirmaSenha) {
    alert("As senhas devem ser iguais");
    return;
  }

  var url = 'http://localhost:8083/client/checkUsuario';

  fetch(url, {
    method: "POST",
    //mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      usuario: userName,
      nome: userName,
      senha: senha
    })
  }).then(
    response => response.json()
  ).then(function (data) {
    console.log(data);
    if (data.length != 0) {
      alert("Esse usuario ja esta em uso");
      return;
    }
  })
    .catch(function (error) {

      console.log(error);
    });

  url = 'http://localhost:8083/client/post';

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

function btnCompra6(){
  id_cliente = parseInt(queryString("client"));
  console.log(id_cliente);
  colocaCarrinho(id_cliente,6)
}
function btnCompra5(){
  id_cliente = parseInt(queryString("client"));
  console.log(id_cliente);
  colocaCarrinho(id_cliente,5)
}
function btnCompra4(){
  id_cliente = parseInt(queryString("client"));
  console.log(id_cliente);
  colocaCarrinho(id_cliente,4)
}
function btnCompra3(){
  id_cliente = parseInt(queryString("client"));
  console.log(id_cliente);
  colocaCarrinho(id_cliente,3)
}
function btnCompra2(){
  id_cliente = parseInt(queryString("client"));
  console.log(id_cliente);
  colocaCarrinho(id_cliente,2)
}
function btnCompra1(){
  id_cliente = parseInt(queryString("client"));
  console.log(id_cliente);
  colocaCarrinho(id_cliente,1)
}

function colocaCarrinho(id_client,id_produto)
{
  if(id_client == undefined)
  {
    alert("Você realizar o login para comprar");
    return;
  }

  var url="http://localhost:8083/carrinho/post";
  fetch(url, {
    method: "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ id_Cliente: id_client, id_Livro: id_produto }),
  }).then(
    response => response.text()
  ).then(
    html => console.log(html)
  );
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function listaLivros() {
  console.log("list iniciado...");
  const ul = document.getElementById('livros');

  fetch("http://localhost:8083/livro/list", {
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
    var number = 1;
    livros.forEach(data => {
      document.getElementById("titulo" + number).value = data[0].titulo;
      document.getElementById("preco" + number).value = "R$ " + data[0].preco;
      document.getElementById("foto" + number).src = "data:image/jpeg;base64," +  btoa(String.fromCharCode.apply(null, new Uint8Array(data[1].imagem)));
      number++;
    });
  })
    .catch(function (error) {

      console.log(error);
    });
}

function listaLivrosCarrinho() {
  id_cliente = parseInt(queryString("client"));
  console.log(id_cliente);
  console.log("list iniciado...");

  fetch("http://localhost:8083/carrinho/get/client/"+id_cliente, {
    method: "GET",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }).then(
    response => response.json()

  ).then(function (datas) {
    let livros = datas;
    console.log(livros);
    var number = 1;
    livros.forEach(data => {
      document.getElementById("titulo" + number).value = data[1].titulo;
      document.getElementById("preco" + number).value = "R$ " + data[1].preco;
      document.getElementById("foto" + number).src = "data:image/jpeg;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(data[2].imagem)));;
      number++;
    });
  })
    .catch(function (error) {

      console.log(error);
    });
}

async function cadastroLivro(nomeLivro, generoLivro, precoLivro) {
  var nomeLivro = document.getElementById("NomeLivroTxt").value;
  var generoLivro = document.getElementById("genero-vender").value;
  var precoLivro = document.getElementById("PrecoTxt").value;
  var url = 'http://localhost:8083/livro/post';

  fetch(url, {
    method: "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ titulo: nomeLivro, genero: generoLivro, preco: precoLivro }),
  }).then(
    response => response.text()
  ).then(
    html => console.log(html)
  );
  var id_Livro;

  console.log("pegando id")

  await fetch("http://localhost:8083/livro/get/id", {
    method: "GET",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }).then(
    response => response.json()
  ).then(function (data) {
    console.log(data);
    id_Livro = data.id;
  })

  console.log(id_Livro);
  console.log("id pego")
	var oFReader = new FileReader();
	oFReader.readAsDataURL(document.getElementById("Imagem").files[0]);
	oFReader.onload = function (oFREvent) {
	var image = oFREvent.target.result;
  image = image.substring(23);
  cadastroFotoLivro('http://localhost:8083/foto/post', image, id_Livro);
}

async function cadastroFotoLivro(url, imagem, id_Livro) {
  console.log("Cadastro de imagem iniciado");
  console.log(imagem);
    fetch(url, {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ imagem: imagem, Id_Produto: id_Livro }),
    }).then(
      response => response.text()
    ).then(
      html => console.log(html)
    );
  }
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
