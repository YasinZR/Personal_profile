package com.example.starter.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ScheduleClass {
    private Integer number;
    private String lectorFIO;
    private String subjectTitle;
    private String type;
}
