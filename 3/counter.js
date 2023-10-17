// import fizzbuzz from './fizzbuzz.js'
import { fizzbuzz } from './fizzbuzz.js'

export function setupCounter(element) {
  let counter = 0
  const incrCounter = (value) => {
    counter += value
    element.innerHTML = `count is ${fizzbuzz(counter)}`
  }
  element.addEventListener('click', () => incrCounter(1))
  element.innerHTML = `Start the count!`
}
