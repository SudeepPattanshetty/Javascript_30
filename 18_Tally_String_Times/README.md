## 🎥 Video Time Summation

This project is part of the JavaScript30 course by Wes Bos.

It demonstrates how to work with data attributes, array methods, and time calculations in vanilla JavaScript by calculating the total duration of multiple videos.



## 🚀 Features

* Parses video durations stored in data-time attributes.

* Converts time strings (e.g., "5:43") into total seconds.

* Sums up the total video durations.

* Displays the total time in hours, minutes, and seconds in the console.

## 🛠 Technologies Used

* HTML5

* Vanilla JavaScript (ES6+)



## 🧠 What I Learned

### Data Attributes

* Accessed custom HTML attributes using dataset:
    
node.dataset.time

### Array Methods

* .map()
    
Converted "mm:ss" strings into total seconds:

* .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })

* .reduce()
  Accumulated total video time in seconds:

* .reduce((total, vidSeconds) => total + vidSeconds)