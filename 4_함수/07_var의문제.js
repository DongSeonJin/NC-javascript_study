console.log(`x : ${x}`); //일단 선언된 이후로는 활용은 같습니다.

//2. 블록레벨 스코프 지원 x
var i = '안녕';

for(var i = 0; i<3; i++){
    console.log(`for 문 도는도중 i: ${i}`);
}
console.log(`for문 끝나고 i : ${i}1`);

//3. 변수 호이스팅 : 선언문 맨 위에 있는거으로 취급하는것
z = 100;

console.log(z);

var z;