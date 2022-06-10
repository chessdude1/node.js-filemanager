import { readFile, appendFile, rename, copyFile, unlink } from 'fs'
import { join, parse } from 'path'

import { navigation } from './navigation.js'

class OperationsWithFiles {

  constructor(navigation) {
    this.navigation = navigation
  }

  async cat(directory) {
    readFile(directory, "utf8", (error, data) => {
      if (error) {
        console.log('Operation failed')
        return
      }
      console.log(data)
    })
  }

  async add(fileName) {
    const currentPath = this.navigation.getCurrentDirectory;

    const fileDirectory = await join(currentPath, fileName)

    appendFile(fileDirectory, '', (err) => {
      if (err) {
        console.log('Operation failed')
        return
      }
    })
  }

  async rn(pathAndName) {
    const uppedPath = parse(pathAndName[0]).dir
    const newFileDirectory = await join(uppedPath, pathAndName[1])

    rename(pathAndName[0], newFileDirectory, err => {
      if (err) {
        console.log('Operation failed')
        return
      }

    })
  }

  async cp(paths) {
    copyFile(paths[0], paths[1], err => {
      if (err) {
        console.log('Operation failed')
        return
      }
    });

  }

  async mv(paths) {
    copyFile(paths[0], paths[1], err => {
      if (err) {
        console.log('Operation failed')
        return
      }
    });

    this.rm(paths[0])
  }

  async rm(path) {
    unlink(path, (err) => {
      if (err) {
        console.log('Operation failed')
        return
      }
    })
  }
}

export const operationsWithFiles = new OperationsWithFiles(navigation)