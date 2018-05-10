#!/usr/bin/env node

/* eslint-env node */
const files = require('./lib/files');

function handleAnswers({ goto = '' }, questionnaire) {
  switch (goto) {
    case questionnaire.Gotos.GITHUB:
      return files.open('https://github.com/malixsys');
    case questionnaire.Gotos.LINKEDIN:
      return files.open('https://www.linkedin.com/in/malix/');
    case questionnaire.Gotos.RESUME:
      return files.open('http://malix.io/cv/en/');
    default:
      return 0;
  }
}

const run = async () => {
  let result;
  try {
    const q = require('./lib/questionnaire');
    do {
      q.intro();
      const answers = await q.run();
      result = await handleAnswers(answers, q);
    } while (result !== 0);
    q.intro();
    q.goodbye();
  } catch (err) {
    console.log(err);
  } finally {
    process.exit(0);
  }
};
// console.log(figlet.fontsSync().join('|'));
run();
