// function return action (up, down, and payload) or error
export function inputReadlineValidation(text) {

  const splittedInput = text.split(' ');

  switch (splittedInput[0]) {
    case 'up': {
      return operationFactory(splittedInput.length, 1, 'up', 'up contains one argument', splittedInput[1])
    } case 'cd': {
      return operationFactory(splittedInput.length, 2, 'cd', 'cd contains two arguments', splittedInput[1])
    } case 'ls': {
      return operationFactory(splittedInput.length, 1, 'ls', 'ls contains one arguments', splittedInput[1])
    } case 'cat': {
      return operationFactory(splittedInput.length, 2, 'cat', 'cat contains two arguments', splittedInput[1])
    } case "add": {
      return operationFactory(splittedInput.length, 2, 'add', 'add contains two arguments', splittedInput[1])
    } case "pwd": {
      return operationFactory(splittedInput.length, 1, 'pwd', 'pwd contains one arguments', splittedInput[1])
    } case "rn": {
      return operationFactory(splittedInput.length, 3, 'rn', 'rn contains three arguments', [splittedInput[1], splittedInput[2]])
    } case "cp": {
      return operationFactory(splittedInput.length, 3, 'cp', 'rn contains three arguments', [splittedInput[1], splittedInput[2]])
    } case "mv": {
      return operationFactory(splittedInput.length, 3, 'mv', 'mv contains three arguments', [splittedInput[1], splittedInput[2]])
    } case "rm": {
      return operationFactory(splittedInput.length, 2, 'rm', 'rm contains two arguments', splittedInput[1])
    }
    default: {
      return { error: 'command not found' }
    }
  }
}

function operationFactory(inputLength, operationLength, action, errorText, payload) {
  if (inputLength !== operationLength) {
    return { error: errorText }
  }
  return { action: action, payload, }
}