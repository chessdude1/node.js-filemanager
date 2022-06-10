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

  const userName = process.argv[2].split('=')[1]

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}`);
  });

  console.log(`Welcome to the File Manager, ${userName}!`)

  navigation.pwd()

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
        await navigation.up()
        break
      }
      case 'cd': {
        await navigation.cd(payload)
        break
      }
      case 'ls': {
        await navigation.ls()
        break
      }
      case "pwd": {
        await navigation.pwd()
        break
      }
      case 'cat': {
        await operationsWithFiles.cat(payload)
        break
      }
      case 'add': {
        await operationsWithFiles.add(payload)
        break
      }
      case 'rn': {
        await operationsWithFiles.rn(payload)
        break
      }
      case 'cp': {
        await operationsWithFiles.cp(payload)
        break
      }
      case 'mv': {
        await operationsWithFiles.mv(payload)
        break
      }
      case 'rm': {
        await operationsWithFiles.rm(payload)
        break
      }
      case '--EOL': {
        await operationSystemInfo.eol()
        break
      }
      case '--cpus': {
        await operationSystemInfo.cpus()
        break
      }
      case '--homedir': {
        await operationSystemInfo.homedir()
        break
      }
      case "--username": {
        await operationSystemInfo.userInfo()
        break
      }
      case "--architecture": {
        await operationSystemInfo.architecture()
        break
      }
      case "hash": {
        await fileTransformation.hash(payload)
        break
      }
      case "compress": {
        await fileTransformation.compress(payload)
        break
      }
      case "decompress": {
        await fileTransformation.decompress(payload)
        break
      }
      case "exit": {
        console.log(`Thank you for using File Manager, ${userName}`);
        process.exit(1);
      }
    }


    navigation.pwd()
  })
}

mainStream()
