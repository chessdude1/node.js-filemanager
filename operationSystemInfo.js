import { EOL, cpus, homedir, userInfo } from 'os'
import { arch } from 'process'


class OperationSystemInfo {

  eol() {
    EOL.length === 2 ? console.log('Windows') : console.log('POSIX');
  }

  cpus() {
    console.log(cpus())
  }

  homedir() {
    console.log(homedir())
  }

  userInfo() {
    console.log(userInfo().username)
  }

  architecture() {
    console.log(arch)
  }

}

export const operationSystemInfo = new OperationSystemInfo()