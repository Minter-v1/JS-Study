# 테스트용도

## Array 자료형
- 여러 자료형 보관 가능 → 파이썬의 List 와 동일하게 작동
- 인덱스 접근도 동일함
- .sort() : 가나다순 정렬
- .slice(start,end) : start~end-1까지 포함되게 자른다.
- .push(value) : 맨 끝에 value를 추가한다.

```js
var car = ['소나타',5000,'white']
```

## Object 자료형
- {} 중괄호를 사용하며 key-value 페어(pair)구조임 => 파이썬의 Dict 와 동일하게 작동
- key값 접근 방식은 Object명['key'] or Object명.key ex) car.name 으로 접근한다
- 순서 개념이 존재하지 않는다.
```js
var car = { name : '소나타', price : 50000, year : 2030 };
```