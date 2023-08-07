/*
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고
   약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
 */
function calcDivisor(n){
    for(var i = 1; i < n; i++){
        var numb = 0;
        if(n % i === 0){
            numb += i;
            console.log(numb);
        }
    }
    
}
(calcDivisor(30))
