package com.client.apiclient.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity(name = "Foto")
public class FotoModel {

    @Id
    public Integer id;

    @Column(nullable=false)
    public Integer Id_Produto;

    @Lob
    @Column(nullable=false)
    public String imagem;

}
