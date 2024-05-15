package com.example.starter;

import com.example.starter.entity.Student;
import com.example.starter.repositories.StudentRepository;
import com.example.starter.repositories.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Stream;

@SpringBootApplication
@EnableJpaRepositories (basePackages = "com.example.starter.repositories")
public class StarterApplication {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(StarterApplication.class, args);
		StudentRepository dao = ctx.getBean(StudentRepository.class);

		Student student1 = new Student("Плотников Владислав", 12345, "б1-ИФСТ-21", "Информационные системы и технологии", "Институт прикладных информационных технологий", "Прикладные информационные технологии", 90);
		Student student2 = new Student("Трошин Артем", 23456, "б1-ИФСТ-21", "Информационные системы и технологии", "Институт прикладных информационных технологий", "Прикладные информационные технологии", 85);
		Student student3 = new Student("Петров Иван", 34567, "ПИНЖ-23", "Программная инженерия", "Институт прикладных информационных технологий", "Информационно-коммуникационные системы и программная инженерия", 95);
		Student student4 = new Student("Сидоров Андрей", 34567, "ПИНЖ-23", "Программная инженерия", "Институт прикладных информационных технологий", "Информационно-коммуникационные системы и программная инженерия", 74);

	}
}
