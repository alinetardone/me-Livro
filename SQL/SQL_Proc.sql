use meLivro 

--Livros 

go
CREATE PROC listLivro
AS
SELECT * from Livro;
go

CREATE PROC listLivroPorGenero @genero varchar(50)
AS
SELECT * from Livro where genero = @genero;
go

CREATE PROC deleteLivro @id int
AS
DELETE FROM Livro where id = @id;
go

CREATE PROC updateLivro  @id int, @titulo varchar(max),@genero varchar(50), @preco real
AS
UPDATE Livro set titulo = @titulo, genero=@genero,preco = @preco
where id = @id
go


--Clientes

CREATE PROC fazLogin @usuario varchar(50), @senha varchar(30)
AS
SELECT count(*) from Cliente where usuario = usuario and senha = @senha;
go

CREATE PROC insertCliente @usuario varchar(50), @senha varchar(30), @nome varchar(max)
AS
INSERT INTO Cliente(usuario,senha,nome) VALUES (@usuario,@senha,@nome);
go


--Carrinhos

CREATE PROC insertCarrinho @id_Livro int, @Id_Cliente int
AS
INSERT INTO Carrinho(id_Cliente,id_Livro) VALUES (@id_Cliente,@id_Livro);
go

CREATE PROC deleteCarrinho @id_Livro int, @Id_Cliente int
AS
DELETE FROM Carrinho where id_Cliente = @Id_Cliente and id_Livro = @id_Livro;
go


--Fotos

CREATE PROC insertFoto @imagem varbinary(max), @id_Produto int
AS
INSERT INTO Foto(imagem,id_Produto) VALUES (@imagem,@id_Produto);
go

CREATE PROC deleteFoto @id int
AS
DELETE FROM Foto where id=@id;
go