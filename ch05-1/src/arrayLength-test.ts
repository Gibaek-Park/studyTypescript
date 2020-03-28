import { arrayLength, isEmpty } from './arrayLength';

const numArray: number[] = [1, 2, 3]
const strArray: string[] = ['hello', 'World']

type IPerson = {name: string, age?: number}
const personArray: IPerson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}]

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([1])
)