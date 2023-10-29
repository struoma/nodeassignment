const fs = require('fs');

// Content to write to the file
const content = 'Hello Node';

// Write the content to a file named "welcome.txt"
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error writing to welcome.txt:', err);
  } else {
    console.log('welcome.txt has been created with the content: "Hello Node"');
  }
});
