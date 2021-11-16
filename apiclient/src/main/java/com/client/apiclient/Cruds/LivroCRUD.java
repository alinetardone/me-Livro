package com.client.apiclient.Cruds;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.client.apiclient.Models.LivroModel;

public interface LivroCRUD extends CrudRepository<LivroModel,Integer>{
    @Query("from  Livro l inner join Foto f on f.Id_Produto = l.id")
    public Object[] listLivros();
}