# Cosmopedia

Uma API projeto para estudos espaciais e notas.

## Tabela de contudos :

-[Visão geral](#1-visão-geral)

---

## 1. Visão geral

Tecnologias usadas :

- [NodeJs](https://nodejs.org/pt-br/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yup](https://yarnpkg.com/package/yup)
- [PostgreSQL](https://www.postgresql.org/)

URL da aplicação :
https://cosmopedia.herokuapp.com

---

## 2. Diagrama ER

Diagrama ER demonstrando como está definido a relação das tabelas :
![DER](/assets/images/diagram.png)

---

## 3. Autenticação

Passado Token pela header authorization :

```
    authorization : **Token**
```

---

## 4. Endpoints

### Índice

- [Cosmonauta](#1---cosmonauta)
  - [POST - /cosmonauts]
  - [GET - /cosmonauts]
  - [UPDATE - /cosmonauts]
  - [DELETE - /cosmonauts]
- [Galaxy](#2---galaxy)
  - [POST - /galaxy]
  - [GET - /galaxy]
  - [UPDATE - /galaxy]
  - [DELETE - /galaxy]
- [Celestial Body](#3---celestial-body)
  - [POST - /celestialBody]
  - [GET - /celestialBody]
  - [UPDATE - /celestialBody]
  - [DELETE - /celestialBody]
- [Data](#4---data)
  - [POST - /data]
  - [GET - /data]
  - [UPDATE - /data]
  - [DELETE - /data]
- [Category](#5---category)
  - [POST - /category]
  - [GET - /category]
  - [UPDATE - /category]
  - [DELETE - /category]

---

### 1 - **Cosmonauta**

O objeto Cosmonauta é definido como:

| Campo       | Tipo   | Descrição                         |
| ----------- | ------ | --------------------------------- |
| id          | string | Identificador único do cosmonauta |
| user \_name | string | O nome do cosmonauta.             |
| email       | string | O e-mail do cosmonauta.           |
| password    | string | A senha de acesso do cosmonauta   |

#### Endpoints :

| Método | Rota        | Descrição                               |
| ------ | ----------- | --------------------------------------- |
| POST   | /cosmonauts | Criação de um cosmonauta                |
| GET    | /cosmonauts | Lista todos os cosmonautas              |
| PATCH  | /cosmonauts | Atualizar as informações do cosmonauta. |
| DELETE | /cosmonauts | Apagar as informações do cosmonauta.    |

---

### 2 - **Galaxy**

O objeto Galaxy é definido como:

| Campo            | Tipo   | Descrição                                         |
| ---------------- | ------ | ------------------------------------------------- |
| id               | string | Identificador único da galaxia                    |
| name             | string | O nome da galaxia.                                |
| description      | string | Descrição curta da galaxia.                       |
| creator          | string | Cosmonauta que criou pela primeira vez a galaxia. |
| celestial_bodies | list   | Corpos celestiais que estão na galaxia.           |

#### Endpoints :

| Método | Rota    | Descrição                                 |
| ------ | ------- | ----------------------------------------- |
| POST   | /galaxy | Criação de uma galaxia                    |
| GET    | /galaxy | Lista todas as galaxias                   |
| PATCH  | /galaxy | Atualizar as informações de uma galaxia . |
| DELETE | /galaxy | Apagar as informações da galaxia          |

---

### 3 - **Celestial Body**

O objeto Celestial Body é definido como:

| Campo     | Tipo   | Descrição                                     |
| --------- | ------ | --------------------------------------------- |
| id        | string | Identificador único do corpo celeste          |
| name      | string | O nome do corpo celeste                       |
| create_on | date   | Criação do corpo celeste no banco de dados.   |
| Data      | object | Informações do corpo celeste                  |
| creator   | object | Criador do corpo celeste                      |
| category  | object | A categoria que pertence o corpo celeste      |
| galaxy    | object | A galaxia que a qual pertence o corpo celeste |

#### Endpoints :

| Método | Rota           | Descrição                                     |
| ------ | -------------- | --------------------------------------------- |
| POST   | /celestialBody | Criação de um corpo celeste                   |
| GET    | /celestialBody | Lista todos os corpos celestes                |
| PATCH  | /celestialBody | Atualizar as informações dos corpos celestes. |
| DELETE | /celestialBody | Apagar as informações do corpo celete.        |

---

### 4 - **Data**

O objeto Data é definido como:

| Campo             | Tipo   | Descrição                                                     |
| ----------------- | ------ | ------------------------------------------------------------- |
| id                | string | Identificador único do Data                                   |
| body_id           | string | Identificador único do corpo celeste                          |
| description       | string | Descrição extra de um corpo celeste.                          |
| mass              | number | Informações da massa de um corpo celeste                      |
| volume            | number | Informações de um volume de um corpo celeste                  |
| distance_to_earth | number | Distancia de um corpo celeste há Terra                        |
| last_update       | date   | Ultima atualização de informações de um Data de corpo celeste |

#### Endpoints :

| Método | Rota  | Descrição                                    |
| ------ | ----- | -------------------------------------------- |
| POST   | /data | Criação de um Date Objeto                    |
| GET    | /data | Lista todos os Date Objeto                   |
| PATCH  | /data | Atualizar as informações dos Dates Objetos . |
| DELETE | /data | Apagar as informações do Date Objeto .       |

---

### 5 - **Category**

O objeto Category é definido como:

| Campo          | Tipo   | Descrição                                      |
| -------------- | ------ | ---------------------------------------------- |
| id             | string | Identificador único de Category                |
| name           | string | Nome de uma categoria                          |
| description    | string | Descrição extra de uma categoria.              |
| celestial_body | list   | lista de corpos celestes que possuem categoria |

#### Endpoints :

| Método | Rota  | Descrição                                 |
| ------ | ----- | ----------------------------------------- |
| POST   | /data | Criação de uma Category                   |
| GET    | /data | Lista todas as Categories                 |
| PATCH  | /data | Atualizar a informações de uma Category . |
| DELETE | /data | Apagar as informações da Category.        |

---
