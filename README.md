# **Apple Vault - A React Web Store**

Welcome to **Apple Vault**, your go-to online store for everything Apple. This project was built using technologies and tools like React and Redux to provide the best shopping experience for all users.

---

## **Features**

- **User Registration and Login**:
  - Secure and validated registration form for new users.
  - Login functionality with state-managed authentication.
- **Product Browsing**:
  - Explore a catalog of Apple products across multiple categories.
  - View detailed product information on individual product pages.
- **Cart Management**:
  - Add products to your cart, update quantities, and view the total cost.
  - Remove items from the cart with real-time updates.
- **Search and Filters**:
  - Search for products using a responsive search bar.
  - Filter products by category on department pages.
- **Shipping Options**:
  - Select between standard and express shipping.
  - View detailed shipping information via a Help Modal.
- **Responsive and Intuitive UI**:
  - Designed for both desktop and mobile devices.
  - Styled using Bootstrap and custom CSS.

---

## **Technologies Used**

- **React**: Component-based UI library for building the app.
- **Redux Toolkit**: State management for user authentication and cart functionality.
- **React Router**: Navigation and routing between pages.
- **Bootstrap**: Predefined styling for a responsive layout.
- **CSS Modules**: Custom styles for individual components.

---

## **Getting Started**

Follow these steps to set up and run the application locally.

### **Prerequisites**
- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager)

### **Installation**

1.  Clone the repository:
   ```bash
   git clone [your-repo-url]

2.  Navigate to the project directory:
    cd apple-vault

3.  Install dependencies:
    npm install

4.  Start the application:
    npm start

5.  Open your browser and visit:
    http://localhost:3000
    
---

## **Usage**

- **Navigation**:
    - Use the navigation bar to switch between the Home, Store, and Cart pages.
    - Utilise the Search Bar to find specific products by name.
- **Shopping**:
    1. Browse the store to view available products.
    2. Add items to your cart.
    3. Proceed to the cart page to review and finalise your selection.
- **Registration and Login**:
    - Register as a new user and log in to manage your profile.
- **Cart and Shipping**:
    - Manage items in your cart, select shipping options, and view shipping details.

---

## **File Structure**
src/
├── components/      # Reusable UI components
├── pages/           # Main pages (LandingPage, StorePage, CartPage, etc.)
├── redux/           # Redux slices for state management
├── styles/          # Component-specific CSS files
├── App.js           # Root application component
└── index.js         # Entry point for the application
