package com.example.starter.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "students")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Integer id;
    @Column(name = "name")
    String name;
    @Column(name = "card_number")
    Integer cardNumber;
    @Column(name = "students_group")
    String studentsGroup;
    @Column(name = "specialty")
    String specialty;
    @Column(name = "department")
    String department;
    @Column(name = "faculty")
    String faculty;
    @Column(name = "grades")
    List<Integer> grades;
    @Column(name = "points")
    Integer points;

    public Student ( String name, Integer cardNumber, String studentsGroup, String specialty, String department, String faculty, Integer points) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.studentsGroup = studentsGroup;
        this.specialty = specialty;
        this.department = department;
        this.faculty = faculty;
        this.points = points;
    }
}