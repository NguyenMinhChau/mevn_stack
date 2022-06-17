## Các công nghệ được sử dụng trong dự án
[![Build Status](https://github.com/Automattic/mongoose/workflows/Test/badge.svg)](https://github.com/Automattic/mongoose)
- Farmework: [ExpressJS](https://expressjs.com/), [VueJS](https://vuejs.org/)
```sh
$ npm install express
$ npm i -g @vue/cli
Tạo folder client: vue create client
```
- Database: [MongoDB](https://www.mongodb.com/)
- Javascript runtime: [NodeJS](https://nodejs.org/en/)
- Server: Heroku
- Template: [Vuetify](https://vuetifyjs.com/en/)
- Các node package manager được sử dụng:
     1. [`Multer`](https://www.npmjs.com/package/multer) là một middleware cho Express và NodeJS giúp dễ dàng xử lý dữ liệu multipart/form-data khi người dùng upload file.
    ```sh
    $ npm install multer
    ```
    2. [`Mongoose`](https://www.npmjs.com/package/mongoose) cung cấp một giải pháp dựa trên giản đồ đơn giản để lập mô hình dữ liệu ứng dụng của bạn, giúp cho data trên MongoDB được kết nối chặt chẽ hơn với ứng dụng.
    ```sh
    $ npm install mongoose@5.11.15
    ```
    3. [`Dotenv`](https://www.npmjs.com/package/dotenv) là một cơ chế cho phép nhiều tài nguyên khác nhau (fonts, Javascript, v.v…) của một trang web có thể được truy vấn domain khác với domain của trang đó. 
    ```sh
    $ npm install dotenv
    ```
    4. [`Axios`](https://www.npmjs.com/package/axios) là một thư viện HTTP Client dựa trên Promise, nó cung cấp một API cho việc xử lý các yêu cầu từ http gửi lên.
    ```sh
    $ npm install axios
    ```
    5. [`xlsx`](https://www.npmjs.com/package/xlsx) là thư viện dùng để xuất file excel 
    ```sh
    $ npm install xlsx
    ```
    6. [`mongoose-delete`](https://www.npmjs.com/package/mongoose-delete) : Dùng để xóa mềm
    ```sh
    $ npm install mongoose-delete
    ```
    7. [`mongoose-slug-generator`](https://www.npmjs.com/package/mongoose-slug-generator) : Dùng để tự động tạo slug theo một trường nào đó trong db.
    ```sh
    $ npm install mongoose-slug-generator
    ```
    8. Link CDN dùng để xuất file PDF: https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js 