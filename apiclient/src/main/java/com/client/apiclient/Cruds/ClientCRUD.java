package com.client.apiclient.Cruds;

import org.springframework.data.repository.CrudRepository;

import com.client.apiclient.Models.ClientModel;

public interface ClientCRUD extends CrudRepository<ClientModel,Integer>{
}