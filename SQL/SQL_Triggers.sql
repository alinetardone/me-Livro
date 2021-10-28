use meLivro 

go
CREATE TRIGGER DeleteLivro
ON Livro
INSTEAD OF DELETE
AS
BEGIN
	DECLARE
	@Id INT
	SELECT @Id = id FROM INSERTED

	DELETE FROM Carrinho where id_Livro=@Id
	DELETE FROM Foto where id_Livro=@Id
	DELETE FROM Livro where id=@Id
END
go

