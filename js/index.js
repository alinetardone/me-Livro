const getLivros = 'http://localhost:8083/livro/get'

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

document.getElementById("cadastro").onclick = function () {
  var userName = document.getElementById("UsuarioTxt").value;
  var senha = document.getElementById("SenhaTxt").value;
  fazCadastro('http://localhost:8083/client/post', userName, senha);
};


function fazCadastro(url, userName, senha) {
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

function listaLivros(getLivros) {

  const ul = document.getElementById('livros');

  fetch(getLivros, {
      method: "GET",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(
      response => response.json()

    ).then(function (data) {

      let livros = data.results;

      return livros.map(function (livro) {

        let li = createNode('li');
        let img = createNode('img');
        let span = createNode('span');

        // img.src = livro;
        span.innerHTML = `${livro.titulo} ${livro.genero}`;

        append(li, img);
        append(li, span);
        append(ul, li);
      })
    })
    .catch(function (error) {

      console.log(error);
    });
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