# REST API berita

contoh pembuatan backend dengan bcrypt, dotenv, express, jsonwebtoken, mysql2 dan nodemon dengan menggunakan database MySQL.

## INSTALASI

1. pnpm install
2. copy file .env dari .env.example dan sesuaikan file tersebut
3. import migration.sql atau copy Query file dan jalankan di mysql

## PENGGUNAAN

| Endpoint             | Method | Description       | Request Body                                                          |
| -------------------- | ------ | ----------------- | --------------------------------------------------------------------- |
| `/api/auth/login`    | POST   | Login user        | JSON: `{ "email": "string", "password": "string" }`                   |
| `/api/auth/register` | POST   | Register new user | JSON: `{ "name": "string", "email": "string", "password": "string" }` |
| `/api/user`          | GET    | Get all users     | -                                                                     |
| `/api/user`          | POST   | Create a user     | JSON: `{ "name": "string", "email": "string", "password": "string" }` |
| `/api/user/:id`      | GET    | Get user by ID    | -                                                                     |
| `/api/user/:id`      | PUT    | Update user by ID | JSON: `{ "name": "string", "email": "string", "password": "string" }` |
| `/api/user/:id`      | DELETE | Delete user by ID | -                                                                     |
| `/api/post`          | GET    | Get all posts     | -                                                                     |
| `/api/post`          | POST   | Create a post     | JSON: `{ "title": "string", "body": "string", "user_id": "string" }`  |
| `/api/post/:id`      | GET    | Get post by ID    | -                                                                     |
| `/api/post/:id`      | PUT    | Update post by ID | JSON: `{ "title": "string", "body": "string", "user_id": "string" }`  |
| `/api/post/:id`      | DELETE | Delete post by ID | -                                                                     |
