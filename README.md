# 📱 Frontend Assignment - React Native Product Feed & Post App

A robust, modular mobile application built with **React Native (Expo)** and **TypeScript**. This project replicates a Figma design, fetches dynamic product data, and handles user form submissions with proper validation and error handling.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

---

## 🎯 Objective

To build a performant UI based on provided design specifications and integrate public APIs to demonstrate:

- **API Integration skills** (GET & POST).
- **Asynchronous Data Handling** (Loading & Error states).
- **Modular Code Architecture** (Separation of Concerns).
- **Cross-Platform Compatibility** (Mobile & Web).

---

## 📸 Screenshots

|      Product Feed (Home)      |         Create Post Form         |         Success Handling          |
| :---------------------------: | :------------------------------: | :-------------------------------: |
| ./screenshots/productFeed.png | ./screenshots/createPostForm.png | ./screenshots/successHandling.png |

---

## 🏗️ Tech Stack & Architecture

This project follows a **Modular Architecture** to ensure scalability and maintainability, separating the **UI Layer** from the **Business Logic**.

- **Framework:** React Native (via Expo)
- **Language:** TypeScript (Strict Typing)
- **Routing:** Expo Router (File-based routing)
- **Networking:** Axios
- **State Management:** React Hooks (`useState`, `useEffect`)

### 📂 Folder Structure

The codebase is organized within the `src` directory to keep the root clean:

```text
src/
├── components/       # Reusable UI elements (Buttons, Cards)
├── screens/          # Screen-level logic (ProductList, CreatePost)
├── services/         # API Layer (Axios calls separated from UI)
├── types/            # TypeScript Interfaces (Data Models)
└── utils/            # Helper functions
app/                  # Expo Router (Navigation Logic only)
```

🚀 Key Features
1️⃣ Dynamic Product Feed
Fetches data from dummyjson.com/products.

Performance Optimization: Uses FlatList instead of map() for efficient memory usage and virtualization on long lists.

UX: Includes a loading spinner and graceful error handling.

2️⃣ Create Post Form
Submits data to jsonplaceholder.typicode.com/posts.

Validation: Prevents submission of empty fields with cross-platform alerts (Web & Mobile compatible).

Feedback: Displays server response (ID) upon successful submission.

Routing: Auto-navigates back to Home after success.

🔌 API Reference
Method. Endpoint. Description
GET. https://dummyjson.com/products Fetches the list of products.
POST https://jsonplaceholder.typicode.com/posts Simulates creating a new post.
Note on POST Request: Since JSONPlaceholder is a mock API, it returns a success status (201) and a fake ID (e.g., 101), but it does not persist the data permanently on the server.

⚙️ Setup Instructions
Follow these steps to run the project locally:

Clone the repository

Bash
git clone [https://github.com/YOUR_USERNAME/react-native-expo-app.git](https://github.com/YOUR_USERNAME/react-native-expo-app.git)
cd react-native-expo-app
Install dependencies

Bash
npm install
Start the server

Bash
npx expo start
Run the App

Mobile: Scan the QR code with the Expo Go app (Android/iOS).

Web: Press w in the terminal to run in the browser.

🧠 Design Decisions
Why a services folder?
Following the Repository Pattern logic, I decoupled API calls from components. This makes the code testable and reusable. If the API URL changes, I only update one file (api.ts).

Why FlatList?
To handle potential large datasets efficiently. Unlike map(), FlatList only renders items currently visible on the screen, preventing performance bottlenecks.

Why TypeScript?
To define strict contracts (interfaces) for API responses. This prevents runtime errors by ensuring we access properties that actually exist.

👨‍💻 Author
Shardul
Full Stack Developer | Backend Enthusiast
