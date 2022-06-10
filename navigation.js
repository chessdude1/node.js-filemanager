import { dirname, parse, join, isAbsolute } from 'path'
import { homedir } from 'os'
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url'
import { access } from 'fs/promises';

class Navigation {
  __filename = fileURLToPath(import.meta.url);
  _currentDirectory = homedir()

  async up() {
    this._currentDirectory = parse(this._currentDirectory).dir
    console.log(`current directory ${this._currentDirectory}`)
  }

  pwd() {
    console.log(`You are currently in ${this._currentDirectory}`)
  }

  async cd(payload) {
    if (isAbsolute(payload)) {
      try {
        console.log(payload)
        await access(payload)
        this._currentDirectory = payload
      } catch {
        console.log('Operation failed')
      }
      return
    }

    try {
      const tryToCdDirectory = await join(this._currentDirectory, payload)
      await access(tryToCdDirectory)
      this._currentDirectory = tryToCdDirectory
    } catch {
      console.log('Operation failed')
    }
  }

  async ls() {
    const files = await readdir(this._currentDirectory);
    console.log(files.join('; '))
  }

  get getCurrentDirectory() {
    return this._currentDirectory
  }
}

export const navigation = new Navigation()