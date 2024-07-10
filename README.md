# REST API berita

contoh pembuatan backend dengan bcrypt, dotenv, express, jsonwebtoken, mysql2 dan nodemon dengan menggunakan database MySQL.

## INSTALASI

1. pnpm install
2. copy file .env dari .env.example dan sesuaikan file tersebut
3. import migration.sql atau copy Query file dan jalankan di mysql

## PENGGUNAAN

| Endpoint             | Method | Description       | Request Body                      |
| -------------------- | ------ | ----------------- | --------------------------------- |
| `/api/auth/login`    | POST   | Login user        | `{ "email", "password" }`         |
| `/api/auth/register` | POST   | Register new user | `{ "name", "email", "password" }` |
| `/api/user`          | GET    | Get all users     | -                                 |
| `/api/user`          | POST   | Create a user     | `{ "name", "email", "password" }` |
| `/api/user/:id`      | GET    | Get user by ID    | -                                 |
| `/api/user/:id`      | PUT    | Update user by ID | `{ "name", "email", "password" }` |
| `/api/user/:id`      | DELETE | Delete user by ID | -                                 |
| `/api/post`          | GET    | Get all posts     | -                                 |
| `/api/post`          | POST   | Create a post     | `{ "title", "body", "user_id" }`  |
| `/api/post/:id`      | GET    | Get post by ID    | -                                 |
| `/api/post/:id`      | PUT    | Update post by ID | `{ "title", "body", "user_id" }`  |
| `/api/post/:id`      | DELETE | Delete post by ID | -                                 |
