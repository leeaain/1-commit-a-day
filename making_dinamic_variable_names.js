// newdiv1 부터 newdiv5 까지 자동으로 변수를 생성해서 html 문서내에서 div 태그를 할당한다.
for (let i = 1; i < 6; i++) {
    window['newdiv' + i] = document.createElement('div');
}
