// array

const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const fri = 'fri';
const sat = 'sat';
const sun = 'sun';
const dayOfWeek1 = [mon, tue, wed, thu, fri, sat, sun];
const nonsense = [1, 2, 'hello', false, null, true, undefined];
console.log(dayOfWeek1, nonsense);

const dayOfWeek2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
console.log(dayOfWeek2);
console.log(dayOfWeek2[5]); // sat
console.log(dayOfWeek2);

dayOfWeek2.push('sun') // 리스트에 새로운 값 추가
console.log(dayOfWeek2)