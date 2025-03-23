//유저가 셔츠를 선택했다면
//드롭다운 보여줘야한다.

//select 태그에서 유저가 무엇을 선택했는지 -> .val()
var value = $('.form-select').eq(0).val()

//이렇게만 하면 새로고침하고 딱 1회만 실행됨!! ->  <script> 안에 적었기 때문에 그냥 페이지 로드시 1회 실행되고 다시는 실행되지 않습니다.
if (value == "셔츠") {
    $('.form-select').eq(1).removeClass('form-hide');
};

//그래서 input  이벤트가 발생시마다 진행해야하는데 .. -> 이벤트 리스터
$('.form-select').on('input', function () {
    var value = $('.form-select').eq(0).val();

    if (value == '셔츠') {
        $('.form-select').eq(1).removeClass('form-hide');
    }
})


$('.form-select').on('input', function () {
    var usr = $('.form-select').eq(0).val();

    if (usr == '모자') {
        $('.form-select').eq(1).addClass('form-hide');
    }
})