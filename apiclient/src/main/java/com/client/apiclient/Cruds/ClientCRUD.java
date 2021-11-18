package com.client.apiclient.Cruds;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


import com.client.apiclient.Models.ClientModel;

public interface ClientCRUD extends CrudRepository<ClientModel,Integer>{
    @Query("from Cliente c where c.usuario=:usuario and c.senha=:senha")
    public Object[] login(String usuario, String senha);

    @Query("from Cliente c where c.usuario=:usuario")
    public Object[] checkUsuario(String usuario);

}