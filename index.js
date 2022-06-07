import * as readline from "readline";
import { inputReadlineValidation } from './utils.js'
import { navigation } from './navigation.js'
import { operationsWithFiles } from "./operationsWithFiles.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainStream() {


  rl.on('line', async (line) => {
    const inputAfterValidation = inputReadlineValidation(line)

    if (inputAfterValidation.error) {
      const { error } = inputReadlineValidation(line)
      console.log(error)
      return
    }

    const { payload, action } = inputReadlineValidation(line)


    switch (action) {
      case 'up': {
        navigation.up()
        return
      }
      case 'cd': {
        await navigation.cd(payload)
        return
      }
      case 'ls': {
        navigation.ls()
        return
      }
      case 'cat': {
        operationsWithFiles.cat(payload)
        return
      }
      case 'add': {
        operationsWithFiles.add(payload)
      }
    }
  })


}

mainStream()
