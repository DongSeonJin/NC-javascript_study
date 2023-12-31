// 정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수
function showEvneNumber(n){
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0) console.log(i);
    }
}

function showOddNumber(n){
    for(let i = 1; i <= n; i++){
        if(i % 2 === 1) console.log(i);
    }
}

// 1차 개선(짝수 홀수 여부까지 지정 가능)
function showOddOrEvenNumber(n, delimeter){
    for(let i = 1; i <= n; i++){
        if(i % 2 === delimeter) console.log(i);
    }
}

// 1부터 n까지 m의 배수 숫자만 출력하게 세팅해보세요.
function showMultipleNumber(n, m){
    for(let i = 1; i <= n; i++){
        if(i % m === 0) console.log(i);
    }
}

showMultipleNumber(10, 3)

// 콜백 형식으로 전환
function showNumber(n, code){
    for(let i = 1; i <= n; i++){
        if(code(i)){
            console.log(i);
        }
    }
}
const callback = n => n % 3 === 0;
console.log(callback(5));
showNumber(20, callback);