const makePerson = (name: string, age: number) => {
  return {name: name, age: age}
}

const testMakePerson = () => {
  console.log(
    makePerson('Jane', 22),
    makePerson('Jack', 33)
  )
}

export { makePerson, testMakePerson };