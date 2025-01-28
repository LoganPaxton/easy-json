# Easy-JSON
Easy JSON is made when a beginner in Javascript doesn't know how to integrate JSON. It helps make JSON even simpler.
===

## Setup
To setup, first run this command to install the Easy JSON package:
- `npm -i ez-json`

## Coding
Step one to begin Easy JSON is to initalize it. So, let's do that real quick! Here is the code to initalize it:
```javascript
const easyJSON = require('ez-json');

easyJSON.initalizeJSON("example.json") // Replace example.json with the name of your JSON file
```
  
Now you have initalized it. But, how do you use it. Well, it's pretty simple if you ask me. It's just 2 functions which are `readKey`, and `writeKey`. Here's how to use them:
```javascript
// Make sure you've imported the easyJSON package

// To read a key use this line
const key1 = easyJSON.readKey("key1");

// To write to a key, or create a new one use this line
easyJSON.writeKey("key1", "abc");
```
That's it! That's all you need to know about Easy JSON. It's too easy!

## Updates
`1.0.0`
- Official Release