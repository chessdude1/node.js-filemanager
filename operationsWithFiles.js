import { readFile, appendFile, rename, copyFile, unlink } from 'fs'
import { join, parse } from 'path'

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
      if (err) {
        console.log('ooops smth gets wrong')
        return
      }

      console.log(`${fileName} succesfully created in ${fileDirectory}`)
    })
  }

  async rn(pathAndName) {
    const uppedPath = parse(pathAndName[0]).dir
    const newFileDirectory = await join(uppedPath, pathAndName[1])

    rename(pathAndName[0], newFileDirectory, err => {
      if (err) {
        console.log('type correct absolute paths')
        return
      }

      console.log('file succesfully renamed')
    })
  }

  cp(paths) {
    copyFile(paths[0], paths[1], err => {
      if (err) {
        console.log('type correct absolute paths')
        return
      }
    });

    console.log('files succesfully copied')
  }

  mv(paths) {
    copyFile(paths[0], paths[1], err => {
      if (err) {
        console.log('type correct absolute paths')
        return
      }
    });

    this.rm(paths[0])

    console.log('files successfully moved')
  }

  rm(path) {
    unlink(path, (err) => {
      if (err) {
        console.log('type correct absolute paths')
        return
      }
    })
    console.log('file successfully deleted')
  }
}

export const operationsWithFiles = new OperationsWithFiles(navigation)