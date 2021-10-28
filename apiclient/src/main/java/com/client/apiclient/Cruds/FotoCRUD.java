package com.client.apiclient.Cruds;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.client.apiclient.Models.FotoModel;

public interface FotoCRUD extends CrudRepository<FotoModel,Integer>{
    @Query("from Foto i where i.id=:id")
    public Object[] findImagensByLivroId(Integer id);
}
