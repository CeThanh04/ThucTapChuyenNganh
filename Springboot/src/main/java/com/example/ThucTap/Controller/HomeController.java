package com.example.ThucTap.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index"; // trả về file index.html trong thư mục templates
    }

    @GetMapping("/about")
    public String about() {
        return "about"; // trả về file about.html trong thư mục templates
    }
    @GetMapping("/services")
    public String services() {
        return "services"; // trả về file about.html trong thư mục templates
    }
    @GetMapping("/portfolio")
    public String portfolio() {
        return "portfolio"; // trả về file about.html trong thư mục templates
    }
    @GetMapping("/blog")
    public String blog() {
        return "blog"; // trả về file about.html trong thư mục templates
    }
    @GetMapping("/blog_details")
    public String blog_details() {
        return "blog_details"; // trả về file about.html trong thư mục templates
    }
    @GetMapping("/contact")
    public String contact() {
        return "contact"; // trả về file about.html trong thư mục templates
    }
    @GetMapping("/elements")
    public String elements() {
        return "elements"; // trả về file about.html trong thư mục templates
    }

}
