package com.client.apiclient.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;



@Entity(name = "Livro")
public class LivroModel {

    @Id
    public Integer id;

    @Column(nullable=false, length = 200)
    public String titulo;

    @Column(nullable=false, length = 50)
    public String genero;

    @Column(nullable=false)
    public Double preco;

}
