# Live Demo:
https://yourbizhere.onrender.com

![Alt text](YourBizHere.gif)

# About
Template E-commerce website for business (restaurants or retail) with administrative capabilities for statistical & logistical analysis of orders and items.

# Approach
Building on top of an E-commerce market application. Users are able to Create, Update, Delete (CRUD) their accounts and make orders of items on the menu. If user has admin privilege they are able to access a dashboard (C[R]UD) graphing the orders of all users and count of item quantity. Along with some revenue and item count.

## Technology Used
- JavaScript
- React
- CSS
- MaterialUI
- MongoDB
- Express
- Node.js
- Mongoose
- Recharts
- JWT (JSON Web Token: Authorization and Authentication)
- Bcrypt (Password encrpytion, hashing and salting)

## Flow Diagram of CRUD / FULL Stack
![Alt text](CRUD-flow-diagram.png)

## Wireframes
![Alt text](login-signup.png)
![Alt text](MainPage.png)
![Alt text](Admindash.png)

## Entity Relationship Diagram (ERD)
![Alt text](ERD.png)

# Commands/Dependencies

## Front
`npm start`

## Back
`nodemon server`

## Changes run:
`npm build`

## Seed
`npm run seed`

## Secret key 
`openssl rand -hex 32`

## Recharts
`npm install recharts`

## MaterialUI
`npm install @mui/material @emotion/react @emotion/styled`

## Express
`npm i express`

## ENV (hiding mongoDB key)
`npm i dotenv`

## Mongoose
`npm i mongoose`

## React & React-DOM
`npm i react react-dom`

## Bcrypt
`npm i bcrypt`

## JWT (JsonWebToken)
`npm install jsonwebtoken`

## Morgan (logger middleware)
`npm i morgan`

## serve-favicon (middleware)
`npm install serve-favicon`

# Improvements
- Styling
- Making acutal item cards with food / real items examples for menu
- Incorporate time to graphs to see busy hours
- Add financial payment processing (Stripe?)
- Add more statistical and logical analysis for admin access
- Add more capabilities (admin access) to delete users and orders
