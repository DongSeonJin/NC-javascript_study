/*async function getBoxOffice(){

    const response = await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101`);
    const jsonData = await response.json();

    console.log(jsonData);
}
*/
function getBoxOffice(){
    fetch("http://localhost:8080/resttest/person-list")
    .then((response) => response.json()) // (response)는 이전 fetch(주소)의 리턴자료1
    .then((result) => console.log(result)); // (result)는 response.json()으로 얻어진 json자료
}