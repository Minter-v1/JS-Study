//리스트에  리스너 달기
function currentTab(idx) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(idx).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(idx).addClass('show');


}
// $('.list').on('click', function (e) {
//     if (e.target == document.querySelectorAll('.tab-button')[0]) {
//         currentTab(0);
//     }
//     else if (e.target == document.querySelectorAll('.tab-button')[1]) {
//         currentTab(1);
//     }
//     else {
//         currentTab(2)
//     }
// })


//내가 data-"변수이름" => data-id 라고 html에서 등록해놨음
//그래서 접근은 dataset."변수명" => dataset.id 라고 파싱하는 것!
$('.list').on('click', function (e) {
    currentTab(e.target.dataset.id);
})