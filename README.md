📚 Study English App

🌍 **Live Demo:**  
👉 ссылка

---

## 📌 About the Project

**Study English App** is an interactive web application for learning English words using flashcards and game mechanics.
The project demonstrates working with React Hooks, routing, global state management, and Local Storage.

**Study English App** — это интерактивное веб-приложение для изучения английских слов с использованием карточек и игрового режима.
Проект демонстрирует работу с React Hooks, маршрутизацией, глобальным состоянием и Local Storage.

---

## 🧩 Features

🗂 1. Card List Page
- Displays flashcards with English words
- Click on a card → it flips and shows the Russian translation
- Click on ⭐ → word is added to Favorites
- Favorite counter badge is displayed in the top-right corner
- 4 categories available for filtering words

🎮 2. Game Page
- Flip cards to see translations
- Add words to Favorites
- Navigate cards left / right
- View current card number out of total

⭐ 3. Favorites Page
- Displays the list of favorite words
- Remove a word by clicking ❌
- Favorites badge updates automatically

---

## 🛠️ Tech Stack

- **React** — UI library  
- **Vite** — development & build tool  
- **Redux Toolkit** — state management  
- **React-Redux** — integration with React  
- **React Router**
- **Local Storage**

---

## 🛠 Technical Implementation 

This project was created as a practice application to demonstrate:
- Working with React Hooks (useEffect) and Local Storage (On application load, the words array is first saved to Local Storage, then loaded back into the application state)
- Artificial loading delay is implemented using setTimeout, during which a Loader component is displayed
- Routing configuration using React Router
- NavLink is used to highlight the active page
- Implementation of interactive UI elements (card flip, dynamic badge counter)
- State management with Redux Toolkit for:
-- Filtering words by category
-- Managing Favorites
-- Global state management

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/kretova0319/study-english-app.git
cd study-english-app
npm install
npm start