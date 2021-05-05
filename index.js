const core = require('@actions/core');

const inputPrefix = "INPUT_"; // This is the prefix used by GitHub Actions

var obj = {};

Object.keys(process.env).forEach(function(key) {
  if(key.startsWith(inputPrefix)) {
    obj[key.substring(inputPrefix.length).toLowerCase()] = process.env[key];
  }
});
  
const fileContent = JSON.stringify(obj);
 
console.log(`Successfully created json with content ${fileContent}`);
core.setOutput("json_string", fileContent);
