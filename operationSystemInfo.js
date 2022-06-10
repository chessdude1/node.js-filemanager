import { EOL, cpus, homedir, userInfo } from 'os'
import { arch } from 'process'


class OperationSystemInfo {

  async eol() {
    EOL.length === 2 ? console.log('Windows') : console.log('POSIX');
  }

  async cpus() {
    console.log(`Number of cores: ${cpus().length} model: ${cpus()[0].model} speed of every core: ${cpus().map(cpu => { return `${cpu.speed / 1000} GHz` }).join('; ')} `)
  }

  async homedir() {
    console.log(homedir())
  }

  async userInfo() {
    console.log(userInfo().username)
  }

  async architecture() {
    console.log(arch)
  }

}

export const operationSystemInfo = new OperationSystemInfo()