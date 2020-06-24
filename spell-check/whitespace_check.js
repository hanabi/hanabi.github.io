const fs = require('fs');
const path = require('path');
var recursive = require("recursive-readdir");
const detectTrailingWhitespace = require('detect-trailing-whitespace');
const exitHook = require('exit-hook');

const parentDir = path.join(__dirname, '..');
let errorsHappened = false;

recursive(parentDir, [
  path.join(parentDir, '.git'),
  path.join(parentDir, 'academic-papers'),
  path.join(parentDir, 'img'),
  path.join(parentDir, 'misc', '*.pdf'),
  path.join(parentDir, 'spell-check', 'node_modules'),
  path.join(parentDir, 'spell-check', 'package-lock.json'),
  path.join(parentDir, 'LICENSE'),
], function (err, files) {
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    if (detectTrailingWhitespace(content)) {
      console.log(`"${file}" contains trailing whitespace.`)
      errorsHappened = true;
    }
  }
});

exitHook(() => {
  if (errorsHappened) {
    process.exit(1);
  }
});
