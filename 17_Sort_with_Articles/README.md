## 🎸 Sort Bands Without Articles

This is a simple JavaScript project that demonstrates how to sort a list of band names while ignoring leading articles like "A", "An", and "The".
It’s a fun way to practice working with arrays, string manipulation, and DOM manipulation in vanilla JavaScript.



## 🚀 Features

* Sorts a list of band names alphabetically.

* Ignores leading articles ("A", "An", "The") during sorting.

* Dynamically displays the sorted list on the webpage.

* Clean and minimalistic UI with a nice background.



## 🛠 Technologies Used

* HTML5

* CSS3

* Vanilla JavaScript (ES6)



## 🧠 What I Learned

### String Manipulation

* Used .replace() with a regular expression to remove articles:

* bandName.replace(/^(a | an | the)/i, '').trim()

### Array Sorting

* Custom sort logic in .sort() method for ignoring articles:

* bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1)



### ⚡ Usage

* Open the index.html file in a browser.

* See the band names sorted without articles.

* Customize the list of bands in the bands array as needed.