package com.client.apiclient;

import com.client.apiclient.Cruds.FotoCRUD;
import com.client.apiclient.Models.FotoModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Foto {
  @Autowired
  private FotoCRUD repository;

    @GetMapping(path = "/foto/get/{id}")
    public Object main(@PathVariable("id") Integer id) {
      return  repository.findById(id)
      .map(record -> ResponseEntity.ok().body(record));
    }

    @PostMapping(path = "/foto/post")
    public Object insert(@RequestBody FotoModel foto) {
      foto.id=getProxId();
      return  repository.save(foto);
    }

    public Integer getProxId()
    {
        return Math.toIntExact(repository.count())+1;
    }

    @DeleteMapping(path = "/foto/delete/{id}")
    public Object delete(@PathVariable("id") Integer id) {
        repository.deleteById(id);
        return "Registro de id "+id+" deletado";
    }

    @GetMapping(path = "/foto/imagem/{id}")
    public Object findImagensByLivroId(@PathVariable("id") Integer id) {
        return repository.findImagensByLivroId(id);
    }
}