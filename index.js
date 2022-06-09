import * as readline from "readline";
import { inputReadlineValidation } from './utils.js'
import { navigation } from './navigation.js'
import { operationsWithFiles } from "./operationsWithFiles.js";


import { operationSystemInfo } from "./operationSystemInfo.js";
import { fileTransformation } from "./fileTransformation.js";

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
      case "pwd": {
        navigation.pwd()
        return
      }
      case 'cat': {
        operationsWithFiles.cat(payload)
        return
      }
      case 'add': {
        operationsWithFiles.add(payload)
        return
      }
      case 'rn': {
        operationsWithFiles.rn(payload)
        return
      }
      case 'cp': {
        operationsWithFiles.cp(payload)
        return
      }
      case 'mv': {
        operationsWithFiles.mv(payload)
        return
      }
      case 'rm': {
        operationsWithFiles.rm(payload)
        return
      }
      case '--EOL': {
        operationSystemInfo.eol()
        return
      }
      case '--cpus': {
        operationSystemInfo.cpus()
        return
      }
      case '--homedir': {
        operationSystemInfo.homedir()
        return
      }
      case "--username": {
        operationSystemInfo.userInfo()
        return
      }
      case "--architecture": {
        operationSystemInfo.architecture()
        return
      }
      case "hash": {
        fileTransformation.hash(payload)
        return
      }
      case "compress": {
        fileTransformation.compress(payload)
        return
      }
      case "decompress": {
        fileTransformation.decompress(payload)
        return
      }
    }
  })


}

mainStream()
