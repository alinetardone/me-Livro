package com.client.apiclient.Cruds;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.client.apiclient.Models.CarrinhoModel;

public interface CarrinhoCRUD extends CrudRepository<CarrinhoModel,Integer>{
    @Query("from Carrinho c where c.id_Cliente=:id")
    public Object[] findByCategory(Integer id);
}