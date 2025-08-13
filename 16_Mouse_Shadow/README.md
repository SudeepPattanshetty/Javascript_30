## ✨ Mouse Shadow Effect (JS30 - Day 16)

This project is part of the [JavaScript30](https://javascript30.com/) challenge by Wes Bos.
It demonstrates how to create a **dynamic text shadow** that moves and changes color based on mouse position, creating an interactive and vibrant visual effect.



## 🚀 Features

* Text shadow dynamically updates as the mouse moves over the page.

* Multiple colored shadows for a **3D neon effect**.

* Fully responsive and smooth animation.



## 🛠 Technologies Used

* **HTML5**

* **CSS3**

* **Vanilla JavaScript (ES6)**



## 🧠 What I Learned

### Mouse Position Tracking

* Using `offsetX` and `offsetY` to get mouse position relative to an element.

* Adjusting coordinates when the event target is different from the parent container.

### Dynamic Styling

* Calculating shadow offsets using:

  ```js
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  ```

* Applying **multiple shadows** for layered effects.

### CSS Tricks

* Using `contenteditable` to allow in-browser text editing without extra JavaScript.

* Creating multiple colored text shadows with different offsets.