# Array Cardio - Array operations using Javascript (JS30 - Day 4)

This project demonstrates how to implement inbox-style checkbox selection using ths shift Key and Javascript.



## 🔥Features

* Allows selecting multiple checkbox by:

    * Clicking the first checkbox
    * Holding the **Shift** Key
    * Clicking the last checkbox in the range.

* All checkbox between the first and last are automatically selected. 

* Provides instant visual feedback when checkbox are selected.



## 🚀Technologies Used

* HTML

* CSS

* JavaScript (Vanilla)



## 🧠What I Learned 

### Event Handling

* Used `e.shiftKey` to detect when the Shift key is held during a click event.

* Managed checkbox selection using event listeners on each input element.

### DOM Traversal and Logic Flow

* Tracked the `lastChecked` checkbox to calculate the selection range.

* Used a loop with a flag (`inBetween`) to toggle and select all checkboxes between two clicks.

### Conditional Logic

if (e.shiftKey && this.checked) {
  // Check all boxes between the current and last checked box
}