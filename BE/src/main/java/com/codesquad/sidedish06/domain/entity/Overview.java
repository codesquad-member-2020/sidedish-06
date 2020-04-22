package com.codesquad.sidedish06.domain.entity;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Overview {

    private String detail_hash;

    private String image;

    private String alt;

    private List<Delivery> delivery_type;

    private String title;

    private String description;

    private String n_price;

    private String s_price;

    private List<Badge> badge;
}