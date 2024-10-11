# Laptop and Mobile E-commerce Website

This project is a full-stack eCommerce website for selling laptops, mobile phones, and headphones. It is developed using **Node.js** (Express, JWT) for the backend and **React.js** for the frontend. The platform supports user authentication, image uploads for products, and secure payment processing.

## Features

### Frontend
- **React.js**: Modern JavaScript library for building user interfaces.
- **Responsive Design**: Optimized for desktop and mobile devices to ensure a great user experience.
- **Product Search**: Users can search for laptops, mobile phones, and headphones by name or category.
- **User Authentication**: Secure registration and login using JSON Web Token (JWT).
- **Shopping Cart**: Users can add, remove, and update products in their cart.
- **Order Checkout**: Integration with payment gateways for secure payment processing.
- **Product Reviews**: Customers can leave reviews and ratings for products.

### Backend
- **Node.js** with **Express.js**: RESTful API for handling client requests.
- **MongoDB**: Database for storing user data, products, and orders.
- **JWT Authentication**: Secure session management using token-based authentication.
- **Image Uploads**: Users can upload product images using Multer middleware.
- **Payment Integration**: Support for payment processing through platforms like PayPal or Stripe.
- **Order Management**: Track orders, including status updates and payment confirmations.

## Technologies Used

### Frontend
- **React.js**: For building dynamic user interfaces.
- **Redux**: State management for React applications.
- **Axios**: For making API requests to the backend.
- **React Router**: Client-side routing for smooth navigation.
- **CSS/SASS**: For styling components and layout.

### Backend
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM for MongoDB and Node.js.
- **JWT (JSON Web Token)**: For secure authentication.
- **Multer**: Middleware for handling multipart/form-data, primarily for image uploads.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/laptop-mobile-ecommerce.git
   cd laptop-mobile-ecommerce
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middlewares
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── actions
│   │   ├── components
│   │   ├── constants
│   │   ├── reducers
│   │   ├── screens
│   │   └── store.js
└── README.md
cd frontend
npm start
cd backend
npm run dev
