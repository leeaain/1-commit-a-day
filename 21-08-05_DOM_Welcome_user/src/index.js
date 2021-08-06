let user = {};  // 이름이 들어갈 객체를 선언한다.

// 성과 이름을 입력받는 폼을 각각 요소로 선언한다.
let elLastName = document.querySelector('#lastName');
let elFirstName = document.querySelector('#firstName');

// First Name에 이름이 두 글자 이상 입력되면 Last Name의 입력 폼을 활성화시킨다.
elFirstName.onkeyup = function () {
    if (isMoreThan2(elFirstName.value)) {
        elLastName.disabled = false;
    } else {
        elLastName.disabled = true;
    }
};

// Last Name 입력폼을 벗어나면 환영 메시지를 alert창으로 띄우고 문서 내에 웰컴 메세지를 삽입한다.
elLastName.onblur = function() {
    inputName(elFirstName.value, elLastName.value);
    window.alert(`어서오십시오! ${combineName(user)}님.`);

    printWelcome();
};

// 성과 이름을 user 객체에 각 키 아래에 할당한다.
function inputName(first, last) {
    user['firstName'] = first;
    user['lastName'] = last;
}

// 성과 이름을 조합한다.
function combineName(user) {
    return user.firstName + ' ' + user.lastName;
}
 
// 문자열이 2글자 이상인지 판별한다.
function isMoreThan2(value) {
    return value.length >= 2;
}

// 문서내에 환영 메세지를 삽입한다.
function printWelcome() {
//   document.body.removeChild('h1')
  
  let heading = document.createElement("h1");
  heading.textContent = `Welcome, ${combineName(user)}~!`;
  document.body.appendChild(heading);
}

// 이 파일의 단점은 Last Name 입력창을 건드리기만 하면 계속해서 웰컴 메세지가 문서 내에 도배된다는 사실이다.
// 이건 엘리먼트 삭제로 내일 다시 커밋 할 예정!
