/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.
    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다.
 */

//함수 선언문
function add(n1, n2){
    return n1 + n2;
}

//const plus = add(5, 9); //add의 호출 결과를 plus에 저장
const plus = add; //add 함수를 plus 변수에 저장.

console.log(`plus에 저장된 add정보 : ${plus}, 그냥 add 정보 : ${add}`);

// 익명함수 생성 : 함수 리터럴
const sub = function(n1, n2) {
    return n1 - n2;
};

console.log(`익명함수를 sub에 담아 호출한 결과 : ${sub(20, 10)}`);

// 함수를 배열에 저장할 수도 있음.
// 자바스크립트의 배열은 자바와 달리 자료형이 달라도 저장 가능
const fArr = [10, 'hello', true, {}, [], add, function(){console.log('ㄱㄱ')}];

fArr[6]();

const dog = {
    // 함수가 일급객체이므로, 프로퍼티의 값으로 사용 가능
    name : '점박이',
    kind : '달마시안',

    // 프로퍼티에 메서드 저장
    bark : function(){
        console.log('왈왈!!!')
    },
}
dog.bark();