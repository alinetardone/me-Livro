package com.client.apiclient;


import com.client.apiclient.Cruds.LivroCRUD;
import com.client.apiclient.Models.LivroModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Livro {
  @Autowired
  private LivroCRUD repository;

    @GetMapping(path = "/livro/get/{id}")
    public Object main(@PathVariable("id") Integer id) {
      return  repository.findById(id)
      .map(record -> ResponseEntity.ok().body(record));
    }

    @GetMapping(path = "/livro/get")
    public Object getAll() {
      return  repository.findAll();
    }

    @PostMapping(path = "/livro/post")
    public Object insert(@RequestBody LivroModel Livro) {
      Livro.id=getProxId();
      return  repository.save(Livro);
    }

    public Integer getProxId()
    {
        return Math.toIntExact(repository.count())+1;
    }

    @GetMapping(path = "/livro/get/id")
    public Object getProxIdlivro()
    {
        return repository.findById(getProxId()-1);
    }

    @DeleteMapping(path = "/livro/delete/{id}")
    public Object delete(@PathVariable("id") Integer id) {
        repository.deleteById(id);
        return "Registro de id "+id+" deletado";
    }


}