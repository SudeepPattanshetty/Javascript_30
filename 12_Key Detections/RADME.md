# 🔑Key Sequence Detection (JS30 - Day 12)

* It demonstrates how to detect a secret sequence of keys pressed by the user and trigger a fun animation using `cornify.js`.



## 🔥 Features

* Detects a specific key sequence entered by the user.

* Triggers a fun unicorn-themed Easter egg using the external library `cornify.js`.

* Adds a dynamic and playful interaction using plain JavaScript.



## 🚀 Technologies Used

* HTML

* JavaScript (Vanilla)

* cornify.js (for visual effect)



## 🧠 What I Learned

* Used `window.addEventListener('keyup')` to listen for key presses.

* Captured each key using `e.key` and stored them in an array.

* Maintained a rolling array of pressed keys using `.push()` and `.splice()` to match the secret code length.

* pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);