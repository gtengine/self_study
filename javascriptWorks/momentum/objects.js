// object

const player = {
    name: 'gt',
    points: 10,
    fat: false
};
console.log(player);
console.log(player.name);
console.log(player['name']);

// object의 속성 정보를 업데이트 할 수 있다.
// object 자체를 변경하려고 하면 error가 발생하지만, object 내의 속성 정보를 업데이트하는 것이기 때문에 문제없이 수행된다.
console.log(player);
player.points = player.points + 20;
console.log(player);

// 속성을 추가할 수 있다.
console.log(player);
player.lastName = 'Min';
console.log(player);

