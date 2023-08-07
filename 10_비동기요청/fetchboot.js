// fetch()를 이용해서 rest서버에 요청을 넣거나 결과를 받아올 수 있습니다.
async function loadPersonList(){
    // fetch의 첫 번째 파라미터는 요청 주소입니다.
    const response = await fetch(`http://localhost:8080/resttest/person-list`); //GET
    // 요청의 결과로 받은 response객체의 body에 담긴 json만 추출해줍니다.
    const jsonArray = await response.json();
    console.log(jsonArray);
    console.log("--------------")
    for(jsonData of jsonArray){
        console.log(jsonData.id);
        console.log(jsonData.name);
        console.log(jsonData.age);
    }

    // #personInfo 태그 얻어오기
    
    // 문자열 변수 생성 후, 각 정보를
    // 번호: XXX, 이름 : XXX, 나이: XXX 형식으로 문자로 저장해주세요.


    let info;
    const tag = () => {
        for(jsonData of jsonArray){
            info += `<h1>아이디 : ${jsonData.id}, 이름 : ${jsonData.name}, 나이 : ${jsonData.age} <h1>` ;
            
            $personInfo = document.getElementById("personInfo");
            $personInfo.innerHTML = info;
        }
    }
    
    let button = document.getElementById("getPersonList");
    button.addEventListener("click", tag)


}