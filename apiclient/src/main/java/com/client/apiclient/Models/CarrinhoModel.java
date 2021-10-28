package com.client.apiclient.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;



@Entity(name = "Carrinho")
public class CarrinhoModel {

    @Id
    public Integer id;

    @Column(nullable=false)
    public Integer id_Livro;

    @Column(nullable=false)
    public Integer id_Cliente;

    @Column(nullable=false)
    public Integer concluida;


}
