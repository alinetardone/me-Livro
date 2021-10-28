package com.client.apiclient.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;



@Entity(name = "Cliente")
public class ClientModel {

    @Id
    public Integer id;

    @Column(nullable=false, length = 200)
    public String nome;

    @Column(nullable=false, length = 50)
    public String usuario;

    @Column(nullable=false, length = 30)
    public String senha;


}
