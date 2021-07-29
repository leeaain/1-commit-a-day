// newdiv1 부터 newdiv5 까지 자동으로 변수를 생성해서 html 문서내에서 div 태그를 할당한다.
for (let i = 1; i < 6; i++) {
    window['newdiv' + i] = document.createElement('div');
}
// 결과 -> newdiv1, newdiv2, newdiv3, newdiv4, newdiv5가 생성되며 각각은 문서내에 생성된 <div></div> 태그를 담고 있다.
