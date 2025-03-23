// 버튼 0 누르면
// 버튼?에 ornage클래스명 제거
// 버튼0에 orange 클래스명 추가
// div show 클래스명 추가



$(".tab-button").on('click', function () {
    //지금 입력한 애의 인덱스가 빌요하다
    var index = $(this).index() //this는 지금 누른 버튼을 의미하고 index()는 인덱스 가져와준다.

    $('.tab-button').removeClass('orange') //모든 tab-button클래스에 속해 있는 요소를 제거한다. -> jquey 셀렉터는 모든 요소에 적용이 됩니다.!
    $('.tab-button').removeClass('show') // 나머지 안보이게 하기


    //얘한테만 적용하기 .eq(#idx) 보이게 하기
    $('.tab-button').eq(index).addClass('show')
    $('.tab-button').eq(index).addClass('orange')

    //tab-content도 바뀌어야함
    $('.tab-content').css('display', 'none')
    $('.tab-content').eq(index).css('display', 'block')


})