# soralog

Ecommerce catalog inspired by Sorabel. Frontend was built using ReactJS and Backend built by NodeJS.
Communation that using is REST API and GraphQL. Below are the available features.

**Web**

- Show catalog (sort and filter), fetch data using GraphQL
- See Product details with carousel images, fetch data using GraphQL
- Wishlist management (using local storage)
- Cart management (using local storage)

**Dashboard**

- User login (U: admin, P: admin)
- CRUD products (using REST API)

**Backend Server**

- **GraphQL**
  - Query: getProducts
  - Query: getProductDetails

- **REST API**
  - GET products `/api/products`
  - POST products `/api/products`
  - PUT products `/api/products/:id`
  - DELET products `/api/products/:id`

## How to Run

### Migration - Initital MongoDB

```bash
npm run migrate:init
```

### Run All Services (Web, Dashboard, Server)

```bash

# First run
npm start

# If node_modules is already installed
npm run start:noinstall
```

|App|URL|
|---|---|
| Website | http://localhost:3000 |
| Dashboard | http://localhost:3001 |
| Server - GQL | http://localhost:4000/graphql (powered by Apollo Playground) |
| Server - REST | http://localhost:4000/api |

### Run independently

```bash
# Web
cd web
npm install
npm start

# Dashboard
cd dashboard
npm install
npm start

# Server
cd server
npm install
npm start
```

## Screenshots

### Web
|||
|---|---|
|![Catalog](http://recordit.co/yccCbWjGe4.gif)|![Product Details](http://recordit.co/Qn4P7H6P7g.gif)|
|![Wishlist](http://g.recordit.co/OEgctpCZ4B.gif)|![Cart](http://recordit.co/cLUOmZxbc4.gif)|

### Dashboard

![Dashboard](http://g.recordit.co/hbGMU8eIOA.gif)

## How to Test

```bash
TODO
```
