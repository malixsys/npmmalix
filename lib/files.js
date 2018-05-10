/* eslint-disable no-console */
/* eslint-env node */

const fs = require('fs');
const path = require('path');
const opn = require('opn');

module.exports = {
  open: (url = 'about:blank') => {
    opn(url);
  },
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: filePath => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};
