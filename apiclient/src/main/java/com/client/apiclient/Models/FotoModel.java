package com.client.apiclient.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "Foto")
public class FotoModel {

    @Id
    public Integer id;

    @Column(nullable=false)
    public Integer Id_Produto;

    @Column(nullable=false)
    public String imagem;

}
