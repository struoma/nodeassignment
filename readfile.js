
const fs = require('fs');

// File path
const filePath = 'welcome.txt';

// Read the content of the file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('Contents of "welcome.txt":');
    console.log(data);
  }
});
