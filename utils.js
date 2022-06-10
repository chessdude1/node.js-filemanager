// function return action (up, down, and payload) or error
export function inputReadlineValidation(text) {

  const splittedInput = text.split(' ');


  switch (splittedInput[1]) {
    case '--EOL': {
      return operationFactory(splittedInput.length, 2, '--EOL', splittedInput[1], 'os', splittedInput[0])
    }
    case '--cpus': {
      return operationFactory(splittedInput.length, 2, '--cpus', splittedInput[1], 'os', splittedInput[0])
    }
    case '--homedir': {
      return operationFactory(splittedInput.length, 2, '--homedir', splittedInput[1], 'os', splittedInput[0])
    }
    case '--username': {
      return operationFactory(splittedInput.length, 2, '--username', splittedInput[1], 'os', splittedInput[0])
    }
    case '--architecture': {
      return operationFactory(splittedInput.length, 2, '--architecture', splittedInput[1], 'os', splittedInput[0])
    }
  }


  switch (splittedInput[0]) {
    case 'up': {
      return operationFactory(splittedInput.length, 1, 'up', splittedInput[1])
    } case 'cd': {
      return operationFactory(splittedInput.length, 2, 'cd', splittedInput[1])
    } case 'ls': {
      return operationFactory(splittedInput.length, 1, 'ls', splittedInput[1])
    } case 'cat': {
      return operationFactory(splittedInput.length, 2, 'cat', splittedInput[1])
    } case "add": {
      return operationFactory(splittedInput.length, 2, 'add', splittedInput[1])
    } case "pwd": {
      return operationFactory(splittedInput.length, 1, 'pwd', splittedInput[1])
    } case "rn": {
      return operationFactory(splittedInput.length, 3, 'rn', [splittedInput[1], splittedInput[2]])
    } case "cp": {
      return operationFactory(splittedInput.length, 3, 'cp', [splittedInput[1], splittedInput[2]])
    } case "mv": {
      return operationFactory(splittedInput.length, 3, 'mv', [splittedInput[1], splittedInput[2]])
    } case "rm": {
      return operationFactory(splittedInput.length, 2, 'rm', splittedInput[1])
    } case "hash": {
      return operationFactory(splittedInput.length, 2, 'hash', splittedInput[1])
    } case "compress": {
      return operationFactory(splittedInput.length, 3, 'compress', [splittedInput[1], splittedInput[2]])
    } case "decompress": {
      return operationFactory(splittedInput.length, 3, 'decompress', [splittedInput[1], splittedInput[2]])
    } case ".exit": {
      return operationFactory(splittedInput.length, 1, 'exit', splittedInput[1])
    } default: {
      return { error: 'Invalid input' }
    }
  }
}

function operationFactory(inputLength, operationLength, action, payload, firstWord = false, firstWordPayload = '') {
  if (inputLength !== operationLength) {
    return { error: 'Invalid input' }
  }

  if (firstWord && firstWord !== firstWordPayload) {
    return { error: 'Invalid input' }
  }

  return { action: action, payload, }
}
