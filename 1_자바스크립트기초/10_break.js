outer : for(var i = 0; i < 3; i++){
    inner : for(var j = 0; j < 2; j++){
        if(i === j){
            break inner;//break outer or break inner(innner 생략가능)
        }
        console.log(`[${i}, ${j}]`);
    }
}