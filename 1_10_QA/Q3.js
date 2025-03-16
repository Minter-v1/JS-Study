function test_pass(s1, s2) {
    if (s1 + s2 >= 120 && s1 >= 40 && s2 >= 40) {
        console.log("합격");
    }
    else {
        console.log("불합격");
    }
}


test_pass(70, 70);
test_pass(30, 100);
test_pass(50, 50);
