package com.client.apiclient;

import com.client.apiclient.Cruds.ClientCRUD;
import com.client.apiclient.Models.ClientModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Client {
  @Autowired
  private ClientCRUD repository;

    @GetMapping(path = "/client/get/{id}")
    public Object main(@PathVariable("id") Integer id) {
      return  repository.findById(id)
      .map(record -> ResponseEntity.ok().body(record));
    }

    @PostMapping(path = "/client/post")
    public Object insert(@RequestBody ClientModel Cliente) {
      Cliente.id=getProxId();
      return  repository.save(Cliente);
    }

    public Integer getProxId()
    {
        return Math.toIntExact(repository.count())+1;
    }

    @DeleteMapping(path = "/client/delete/{id}")
    public Object delete(@PathVariable("id") Integer id) {
        repository.deleteById(id);
        return "Registro de id "+id+" deletado";
    }


}