// 이 함수를 화살표 함수로 고쳐서 보내주세요.
const multi = (n1, n2) => n1 * n2;

const sayHello = () => console.log('안녕하세요');
sayHello();


// 객체 내부에서 메서드로 사용되는 화살표 함수
const kim = {
    name : '김자스',
    age : 25,
    greeting : sayHello,// 상단에 이미 선언된 sayHello 입력
    study : () => console.log("빡공갑니다."),
}

kim.study();

const pow = n => n ** 2;