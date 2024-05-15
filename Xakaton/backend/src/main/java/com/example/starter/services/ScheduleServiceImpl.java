package com.example.starter.services;

import com.example.starter.dto.DayScheduleDto;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ScheduleServiceImpl {
    private List<DayScheduleDto> cache;
    private static final String FIRST_URL = "https://rasp.sstu.ru/";

    private Map<String, String> getGroupsUrl() {
        Map<String, String> urls = new HashMap<>();
        try {
            Document document = Jsoup.connect(FIRST_URL).get();
            document.select("calendar");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return urls;
    }
}
