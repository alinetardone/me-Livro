package com.client.apiclient;

import com.client.apiclient.Cruds.CarrinhoCRUD;
import com.client.apiclient.Models.CarrinhoModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Carrinho {
  @Autowired
  private CarrinhoCRUD repository;

    @GetMapping(path = "/carrinho/get/{id}")
    public Object main(@PathVariable("id") Integer id) {
      return  repository.findById(id)
      .map(record -> ResponseEntity.ok().body(record));
    }

    @PostMapping(path = "/carrinho/post")
    public Object insert(@RequestBody CarrinhoModel Carrinho) {
      Carrinho.id=getProxId();
      return  repository.save(Carrinho);
    }

    public Integer getProxId()
    {
        return Math.toIntExact(repository.count())+1;
    }

    @DeleteMapping(path = "/carrinho/delete/{id}")
    public Object delete(@PathVariable("id") Integer id) {
        repository.deleteById(id);
        return "Registro de id "+id+" deletado";
    }*

    @GetMapping(path = "/carrinho/get/client/{id}")
    public Object getbyClient(@PathVariable("id") Integer id) {
        return repository.findByCategory(id);
    }



}