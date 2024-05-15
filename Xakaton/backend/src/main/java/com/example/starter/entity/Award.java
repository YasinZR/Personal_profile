package com.example.starter.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "awards")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Award {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Integer id;
    @Column(name = "event")
    String event;
    @Column(name = "award_type")
    String awardType;
    @Column(name = "date")
    String date;
    @Column(name = "status")
    String status;
    @Column(name = "document")
    String document;
    @Column(name = "award_points")
    Integer points;
    @Column(name = "user_id")
    Integer userId;
}