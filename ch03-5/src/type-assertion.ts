import INameable from './INameable';

const obj: object = { name: 'jack' };

// obj.name 오류. obj.name은 object 타입이 되지 않기 때문에
// 타입 단언이 필요함 ( 자바스크립트는 타입 변환 )
// (<타입>객체), (객체 as 타입) 으로 가능

const name1 = (<INameable>obj).name;
console.log('name1', name1)

const name2 = (obj as INameable).name;
console.log('name2', name2)

const name3 = (<{name: string}>obj).name;
console.log('name3', name3);