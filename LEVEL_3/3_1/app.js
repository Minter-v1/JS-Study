//card title을 찾고 -> 값 넣어주기

for (let i = 0; i < 3; i++) {
    $('.card-body').eq(i).find('h5').html(products[i].title);
    //가격 바꾸기
    $('.card-body').eq(i).find('p').html("가격 : " + products[i].price);

}
