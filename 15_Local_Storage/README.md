## 🌮 LocalStorage Tapas (JS30 - Day 15)

This project is a part of the [JavaScript30](https://javascript30.com/) course by Wes Bos. It demonstrates how to use **LocalStorage** in a real-world to-do style app to persist user input and UI state across browser sessions.



## ✨ Features

* Users can **add custom items** to a list.

* Items can be **marked as complete** using checkboxes.

* **State is preserved** even after page refresh using `localStorage`.

* Dynamically updates the DOM with newly added or completed items.

* Uses emojis to visually indicate completed items (🌮).



## 🛠 Technologies Used

* **HTML5**

* **CSS3**

* **Vanilla JavaScript (ES6+)**

* **LocalStorage API**



## 🧠 What I Learned

### ✅ LocalStorage API

* `localStorage.setItem(key, value)` to store data.

* `localStorage.getItem(key)` to retrieve data.

* Data is stored as **strings**, so use `JSON.stringify()` and `JSON.parse()` to work with objects.



### 🧠 JavaScript Concepts

* How to prevent default form submission using `event.preventDefault()`.

* Working with **event delegation** for dynamic lists.

* Using `.map()` and `.join()` to efficiently update the DOM.

* Creating and managing a persistent state with a combination of **array manipulation** and **localStorage**.