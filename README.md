<img width="990" alt="screens" src="https://github.com/HAWKZ4/ProShop-MERN/assets/108879264/f7cb1448-5b01-45c9-b210-f33ff322b613">

# E-commerce App (MERN Stack)

Welcome to the E-commerce App built with the powerful MERN stack (MongoDB, Express, React, Node.js).
This application provides a comprehensive online shopping experience, featuring everything from a dynamic shopping cart to an intuitive admin panel.

## Description

This E-commerce App is designed to offer a seamless shopping experience for users, along with robust management tools for administrators.
The app includes user-friendly features such as product reviews, ratings, and a carousel showcasing top products.
It also provides an efficient checkout process with PayPal and credit card integration, ensuring secure transactions.
For administrators, the app offers detailed order management, user management, and product management capabilities, making it easy to oversee the entire operation.

## Features

### User Features
- **Full-featured shopping cart**: Add, remove, and update products in the cart.
- **Product reviews and ratings**: Share and read product reviews and ratings.
- **Top products carousel**: Highlight top-rated products on the homepage.
- **Product pagination**: Browse products easily with paginated views.
- **Product search feature**: Quickly find products with a powerful search tool.
- **User profile with orders**: View order history and manage account details.
- **Checkout process**: Smooth checkout experience including shipping and payment methods.

### Admin Features
- **Admin product management**: Add, edit, and remove products from the store.
- **Admin user management**: Manage user roles and details.
- **Admin order details page**: View detailed information on customer orders.
- **Mark orders as delivered option**: Update order status to delivered.

### Additional Features
- **PayPal / credit card integration**: Secure payment processing.
- **Database seeder**: Preload the database with sample products and users for testing purposes.

## Dependencies

### Backend Dependencies
- **bcrypt**: Password hashing
- **colors**: Console colors
- **cookie-parser**: Cookie handling
- **express**: Web framework
- **jsonwebtoken**: Token-based authentication
- **mongoose**: MongoDB object modeling
- **multer**: File upload handling

### Frontend Dependencies
- **@paypal/react-paypal-js**: PayPal integration
- **@reduxjs/toolkit**: State management
- **axios**: HTTP client
- **bootstrap**: CSS framework
- **react**: Frontend library
- **react-bootstrap**: Bootstrap components for React
- **react-dom**: React DOM rendering
- **react-helmet-async**: SEO management
- **react-icons**: Icon library
- **react-redux**: React bindings for Redux
- **react-router-bootstrap**: Integration between React Router and React Bootstrap
- **react-router-dom**: Routing library for React
- **react-toastify**: Notifications
- **web-vitals**: Web performance metrics

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/HAWKZ4/ProShop-MERN
   cd ProShop-MERN
   ```

2. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```sh
   cd ../frontend
   npm install
   ```

## Usage

1. **Run the backend server:**
   ```sh
   cd backend
   npm run dev
   ```

2. **Run the frontend server:**
   ```sh
   cd frontend
   npm start
   ```

## Environment Variables

Create a `.env` file in the root of the `backend` directory and add the following:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

## Seed Database

To seed the database with sample users and products, run the following command:

```sh
cd backend
npm run seeder
```

This command will populate the database with sample data, providing a solid foundation for testing and development.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this application as needed.
