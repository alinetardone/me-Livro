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
      Carrinho.concluida=0;
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
    }

    @GetMapping(path = "/carrinho/get/client/{id}")
    public Object getbyClient(@PathVariable("id") Integer id) {
        return repository.findByClient(id);
    }

    @GetMapping(path = "/carrinho/close/{id}")
    public Object closeVenda(@PathVariable("id") Integer id) {
      return repository.closeVenda(id);
    }

    @PostMapping(path = "/carrinho/close")
    public Object close(@RequestBody CarrinhoModel Carrinho) {
      repository.deleteById(Carrinho.id);
      return repository.save(Carrinho);
    }

    @DeleteMapping(path = "/carrinho/remove/{id}")
    public void removeCarrinho(@PathVariable("id") Integer id) {
      repository.deleteById(id);
    }

    @PostMapping(path = "/carrinho/getCarrinho")
    public Object getCarrinhoPeloProduto(@RequestBody CarrinhoModel Carrinho) {
      return repository.pegaCarrinho(Carrinho.id_Cliente, Carrinho.id_Livro);
    }

}