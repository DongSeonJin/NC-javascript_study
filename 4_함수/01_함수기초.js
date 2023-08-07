// 함수 정의하기(실행과는 별개임)
function makeFood(sauce){
    console.log(`면을 삶습니다.`);
    console.log(`${sauce}소스를 넣고 면수와 볶습니다`);
    console.log(`${souce} 스파게티 완성!`)
}

// 함수 호출
makeFood(`미트소스`);

// 원넓이를 구하는 함수를 정의해주세요.
// 함수명은 calcCircle, 반지름으로 변수 r을 요구합니다.
// 원주율(3.14) *반지름의 제곱이 원의 넓이입니다.

function calcCircle(r) {
    
    return (r*r) * 3.14;
}