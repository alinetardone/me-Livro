const getLivros = 'http://localhost:8083/livro/get'

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
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
    if(data.length==0)
    {
      alert("O login não pode ser realizado, verifique o seu usuario e senha");
      return;
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

  if(senha != confirmaSenha)
  {
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
    if(data.length!=0)
    {
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



function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function listaLivros() {
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
        document.getElementById("foto"+number).value="~/img/"+data.id;
        number++;
      });
    })
    .catch(function (error) {

      console.log(error);
    });
}

async function cadastroLivro(url, nomeLivro ,generoLivro, precoLivro) {
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
      id_Livro = data.id;
    console.log(id_Livro)
    })

    console.log(id_Livro);
    console.log("id pego")
    var image = document.getElementById("FotoTxt").value;
    //cadastroFotoLivro('http://localhost:8083/foto/post',image , 1, id_Livro); 
}

async function cadastroFotoLivro(url, imagem, id_Client, id_Livro ) {
  var fileUrl
  if (imagem != null && imagem.ContentLength > 0)
  {
      var dirUrl = "~/img/";

      var dirPath = Server.MapPath(dirUrl);

      if (!Directory.Exists(dirPath))
      {
          Directory.CreateDirectory(dirPath);
      }
      fileUrl = dirUrl + "/" + id_Livro;
      imagem.SaveAs(Server.MapPath(fileUrl));
  }

  fetch(url,{
    method : "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({imagem:fileUrl, id_Livro:id_Livro,id_Client:id_Client}),
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
