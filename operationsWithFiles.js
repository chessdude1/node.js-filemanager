import { readFile, appendFile } from 'fs'
import { join } from 'path'

import { navigation } from './navigation.js'

class OperationsWithFiles {

  constructor(navigation) {
    this.navigation = navigation
  }

  cat(directory) {
    readFile(directory, "utf8", (error, data) => {
      if (error) {
        console.log('type correct absolute path')
        return
      }

      console.log(data)
    })
  }

  async add(fileName) {
    const currentPath = this.navigation.getCurrentDirectory;

    const fileDirectory = await join(currentPath, fileName)

    appendFile(fileDirectory, '', (err) => {
      if (err) console.log('ooops smth gets wrong')

      console.log(`${fileName} succesfully created in ${fileDirectory}`)
    })
  }


}

export const operationsWithFiles = new OperationsWithFiles(navigation)