var express = require('express');
var router = express.Router();

// Tất cả route trong admin sẽ dùng layout 'admin'
router.all('/*', function (req, res, next) {
    req.app.locals.layout = 'admin'; // Sửa đường dẫn layout
    next();
});

// Trang admin chính
router.get('/', function (req, res) {
    res.render('admin/index', {
        title: 'Trang quản trị'
    });
});

// Trang danh mục - sửa đường dẫn view
router.get('/category', function (req, res) {
    res.render('admin/category/category-list', {
        title: 'Danh sách danh mục'
    });
});

// Trang sản phẩm - sửa đường dẫn view
router.get('/product', function (req, res) {
    res.render('admin/product/product-list', {
        title: 'Danh sách sản phẩm'
    });
});

module.exports = router;