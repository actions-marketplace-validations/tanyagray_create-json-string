const core = require('@actions/core');
const fs = require('fs');

const inputPrefix = "INPUT_"; // This is the prefix used by GitHub Actions
const path = require("path");
const fullPath = path.join(process.env.GITHUB_WORKSPACE, fileName);

var obj = {};

Object.keys(process.env).forEach(function(key) {
  if(key.startsWith(inputPrefix)) {
    obj[key.substring(inputPrefix.length)] = process.env[key];
  }
});
  
const fileContent = JSON.stringify(obj);
 
console.log(`Successfully created json with content ${fileContent}`);
core.setOutput("json_string", fileContent);
