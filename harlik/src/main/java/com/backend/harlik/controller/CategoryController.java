package com.backend.harlik.controller;

import com.backend.harlik.model.Category;
import com.backend.harlik.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping("categories")
    public String postCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "Kategooria '" + category.getName() + "' edukalt lisatud.";
    }
}