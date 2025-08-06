# 🖼️ Slide In on Scroll (JS30 - Day 13)

This project is part of Wes Bos’s [JavaScript30](https://javascript30.com) challenge. It demonstrates how to animate elements (like images) as they enter the viewport during scrolling using vanilla JavaScript and CSS transitions.



## ✨ Features

* Smooth slide-in animation when elements scroll into view.

* Debounced scroll listener for performance optimization.

* Supports multiple aligned elements (left and right float).

* Fully responsive and clean layout with justified text blocks.



## ⚙️ Technologies Used

* HTML5

* CSS3 (Transitions, Floats)

* JavaScript (Vanilla)
  
  ** `scroll` event handling
  
  ** Debouncing technique to improve performance



## 🧠 What I Learned

### Viewport Detection Logic

* Used `element.getBoundingClientRect()` to determine when an image is halfway visible in the viewport.

* Applied the `.active` class dynamically to trigger CSS animations.

### Debouncing
 Implemented a `debounce()` function to limit how often the scroll event handler fires, improving scroll performance.

```js
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
