package com.client.apiclient.Cruds;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.client.apiclient.Models.CarrinhoModel;

public interface CarrinhoCRUD extends CrudRepository<CarrinhoModel,Integer>{
    @Query("from Carrinho c inner join Livro l on c.id_Livro = l.id inner join Foto f on f.Id_Produto = l.id where c.id_Cliente=:id")
    public Object[] findByClient(Integer id);
}