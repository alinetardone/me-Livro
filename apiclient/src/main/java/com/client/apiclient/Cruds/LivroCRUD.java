package com.client.apiclient.Cruds;

import org.springframework.data.repository.CrudRepository;

import com.client.apiclient.Models.LivroModel;

public interface LivroCRUD extends CrudRepository<LivroModel,Integer>{
}