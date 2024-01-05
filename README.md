# E-Commerce Store
Welcome to the E-Commerce Store! This project serves as the backbone of your online store, providing a scalable and flexible platform for your customers to browse, shop, and make purchases.

Getting Started
Prerequisites
Before you begin, make sure you have the following installed:

Node.js and npm
Git
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/RCvetinskis/e-commerce-store.git
Navigate to the project directory:

bash
Copy code
cd e-commerce-store
Install dependencies:

bash
Copy code
npm install
Configuration
Create a .env file in the root of your project and set any necessary environment variables, such as database connection strings or API keys.

env
Copy code
# Example environment variables (replace with your actual values)
NEXT_PUBLIC_API_URL=your_database_connection_string
Usage
Start the development server:

bash
Copy code
npm run dev
Visit http://localhost:3000 to access the E-Commerce Store.

# Features
Product Catalog: Display your products with detailed information.
Shopping Cart: Allow users to add products to their cart and proceed to checkout.
Checkout Process: Guide customers through a seamless checkout experience.
Order Management: Track and manage customer orders.
API Endpoints
Product List: /api/products - Get a list of available products.
Product Details: /api/products/:productId - Get details for a specific product.
Request Order: /api/checkout - Stripe payment
Important Notes
Database Connection: Ensure that your database is properly configured in the .env file.

Stripe Integration: If you are using Stripe for payments, set the STRIPE_API_KEY environment variable in the .env file.

# Live Application
To view the live application, go to https://e-commerce-store-fypztmezz-robertas-projects.vercel.app.

Features
Product Catalog: Display your products with detailed information.
Shopping Cart: Allow users to add products to their cart and proceed to checkout.
Checkout Process: Guide customers through a seamless checkout experience.
Order Management: Track and manage customer orders.
