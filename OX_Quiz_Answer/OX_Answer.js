let button_O = document.querySelector('.O');
let startText = "문제를 잘 듣고 정답을 골라주세요.";
let backText = "스페이스 바를 누르면 다시 처음으로 돌아갑니다.";
let em = "10em";
let ht = 450;

document.querySelector('#bottom').textContent = startText;

button_O.addEventListener("mouseover", function(event) {
    event.target.style.width = "20em";
    event.target.style.height = "20em";
}, false);

button_O.addEventListener("mouseout", function(event) {
    event.target.style.width = em;
    event.target.style.height = em;
}, false);

let button_X = document.querySelector('.X');
button_X.addEventListener("mouseover", function(event) {
    event.target.style.width = "20em";
    event.target.style.height = "20em";
}, false);

button_X.addEventListener("mouseout", function(event) {
    event.target.style.width = em;
    event.target.style.height = em;
}, false);

const Top = document.querySelector('#top');
let cur = '';

// 'O' 버튼을 클릭했을 때
button_O.addEventListener("click", function(event) {
    cur = 'O';
    afterButt();
}, false);

// 'X' 버튼을 클릭했을 때
button_X.addEventListener("click", function(event) {
    cur = 'X';
    afterButt();
}, false);

// 'O'나 'X' 버튼을 클릭했을 때 공통적으로 일어나는 일
function afterButt() {
    changeBG(cur);
    button_O.style.display = "none";
    button_X.style.display = "none"; 
    Top.style.height = `${ht}px`;
    document.addEventListener('keydown', restart);
    document.querySelector('#bottom').textContent = backText;
}
// Div(.Top)의 배경을 선택한 답으로 크게 채움.
function changeBG(c)  {
    Top.style.backgroundImage = `url('${c}.jpg')`;
    Top.style.backgroundAttachment = "fixed";
    let Myheight = ht * 0.9
    Top.style.backgroundSize = `${Myheight}px`
    Top.style.backgroundPosition = "50% 35%"
    Top.style.backgroundRepeat = "no-repeat"
}

// 스페이스바를 눌렀을 때 다시 'O'버튼과 'X'버튼을 보여주고 배경은 없앤다.
function restart(e)  {
    if (e.code === 'Space')  {
        button_O.style.display = 'block';
        button_X.style.display = 'block';
        button_O.event = 'mouseout';
        button_X.event = 'mouseout';
        Top.style.background = "none";    
        document.querySelector('#bottom').textContent = startText;
        Top.style.height = '100%';
    }
}
