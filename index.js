import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainStream() {


  rl.question(`What's your name? \n`, name => {
    console.log(`Hi ${name}!`);
  });

  rl.on('line', (line) => {
    console.log(line)
  })


}

mainStream()

