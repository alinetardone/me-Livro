package com.client.apiclient.Cruds;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.client.apiclient.Models.CarrinhoModel;

public interface CarrinhoCRUD extends CrudRepository<CarrinhoModel,Integer>{
    @Query("from Carrinho c inner join Livro l on c.id_Livro = l.id inner join Foto f on f.Id_Produto = l.id where c.concluida=0 and c.id_Cliente=:id")
    public Object[] findByClient(Integer id);

    @Query("from Carrinho where id_Cliente =:id and concluida = 0")
    public Object[] closeVenda(Integer id);
}