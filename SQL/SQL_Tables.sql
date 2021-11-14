create database meLivro;


create table Cliente(
id int PRIMARY key,
nome varchar(max),
usuario varchar(50),
senha varchar(30)
)

create table Livro(
id int PRIMARY key IDENTITY(1,1),
titulo varchar(max),
genero varchar(50),
preco real
)

create table Carrinho(
id int PRIMARY key IDENTITY(1,1),
id_Livro int,
id_Cliente int,
concluida bit
)

create table Foto(
id int PRIMARY key IDENTITY(1,1),
id_Produto Int,
imagem varchar(max)
)