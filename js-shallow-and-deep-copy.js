//js에서 얕은 복사와 깊은 복사가 object를 복사할 때 어떤 차이를 가지는지 확인해볼 수 있다.
const obj = {
	Time: 'Dinner',
	Day: 'Thursday',
	MaxCost: '50000원',
	Family: ['Daddy', 'Mom', 'Me', 'Sister', 'Brother'],
	DecisionMaker: 'Mom',
	Homefood: { Maker: 'Daddy',
				Requiredtime: '1hour',
				Maindish: '김치찌개'
	},
	Delievery: { Western: {
					Burger: 'MacDonald',
					Pizza: 'Domino' },
				Asian: {
					Vietnam: 'Rice Nuddle',
					Japan: 'Sushi' },
	},
	Desert: {
		Cool: 'Ice-cream',
		Hot: 'Tea and Cookie'
	}
}

const clonObj = Object.assign({}, obj);

    clonObj.DecisionMaker = 'Me';    //새 오브젝트에서는 DecisionMaker를 'Me'로 변경한다.
    clonObj.Day = 'Saturday';        //새 오브젝트에서는 Day를 'Saturday'로 변경한다.
    delete clonObj.Homefood;        //새 오브젝트에서는 'Homefood'를 삭제한다.

    clonObj.Desert.Hot = '떡볶이';    //새 오브젝트에서는 Desert 객체안의 Hot 속성 값을 '떡볶이'로 변경한다.
    delete clonObj.Delievery.Asia.Japan; //새 오브젝트에서는 Delievery 객체안의 Asia 객체안의 Japan 속성을 삭제한다.

    obj.Homefood.Maindish = '된장찌개' //원래 오브젝트의 Homefood 객체안의 Maindish 속성 값을 '된장찌개'로 변경한다.



