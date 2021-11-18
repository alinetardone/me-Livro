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
      Cliente.contos=0.0;
      return  repository.save(Cliente);
    }
    
    @PostMapping(path = "/client/checkUsuario")
    public Object checkUsuario(@RequestBody ClientModel Cliente) {
      return  repository.checkUsuario(Cliente.usuario);
    }

    @PostMapping(path = "/client/login")
    public Object login(@RequestBody ClientModel Cliente) {
      return  repository.login(Cliente.usuario,Cliente.senha);
    }

    @GetMapping(path = "/client/get/id")
    public Object main() {
      return  getProxId();
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

    @PostMapping(path = "/client/AddContos")
    public void AddContos(@RequestBody ClientModel Cliente) {
      var client = repository.findById(Cliente.id).get();
      var contos = client.contos + Cliente.contos;
      client.contos = contos;
      repository.deleteById(client.id);
      repository.save(client);
    }

    @PostMapping(path = "/client/menosContos")
    public void menosContos(@RequestBody ClientModel Cliente) {
      var client = repository.findById(Cliente.id).get();
      var contos = client.contos - Cliente.contos;
      client.contos = contos;
      repository.deleteById(client.id);
      repository.save(client);
    }

}