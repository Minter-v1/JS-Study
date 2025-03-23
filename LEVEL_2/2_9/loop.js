var tabButtons = $(".tab-button"); //jquery객체이다(베열처럼 담고 있는 객체임)

//타입 선언은 let로 하는게 적절하다.
//🙋var i로 쓴다면, 클릭할 때 항상 마지막 인덱스 값만 참조하게 되는 버그
//배열의 길이는 ".length"로 알아내면 된다! -> 괄호없음 주의
//반복문은 똑같이 변수선언;조건;증감식



//핵심은 이것이야 => for문으로 각 버튼에 대한 이벤트 리스너를 등록해 주는 것!! 원래르 같은 코드 3개를 작성해야하니까
//let은 계속 복사해서 새로운 사본을 생성하기 때문에 해당 이벤트 리스너의 i가 바뀌지 않지만
//var은 원본 참조이기 때문에 for문으로인한 증감때문에 결국 반복이 다 돌아가서 변수가 최종값으로 결정되고
//앞전 코드의 i들도 다 마지막 값으로 바뀐다.

//그래서 let을 선언한다.
for (let i = 0; i < tabButtons.length; i++) {
    $('.tab-button').eq(i).on('click', function () { //i인덱스에 대한 click이라는 이벤트가 발생했을때! 
        $('.tab-button').removeClass('orange');
        $('.tab-content').css('display', 'none');

        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').eq(i).css('display', 'block');
    });
}