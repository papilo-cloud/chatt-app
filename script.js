
var chats = document.getElementsByClassName('cht')
var i;
for ( i = 0; i < chats.length; i++) {
	chats[i].style.visibility = 'hidden';
}

function func() {
		for (var i = 0; i < chats.length; i++) {
		chats[0].style.visibility = 'visible';
	}

}

setTimeout(func, 3000)
setTimeout(func1, 4000)
setTimeout(func2, 6000)
setTimeout(func3, 8000)
setTimeout(func4, 8500)
setTimeout(func5, 10000)
setTimeout(func6, 11000)
setTimeout(func7, 14000)
setTimeout(func8, 10000)
function func1() {
	chats[1].style.visibility = 'visible';
}
function func2() {
	chats[2].style.visibility = 'visible';
	chats[3].style.visibility = 'visible';
	chats[4].style.visibility = 'visible';
}
function func3() {
	chats[5].style.visibility = 'visible';
}
function func4() {
	chats[6].style.visibility = 'visible';
}
function func5() {
	chats[7].style.visibility = 'visible';
}
function func6() {
	chats[8].style.visibility = 'visible';
}
function func7() {
	chats[9].style.visibility = 'visible';
}
function func8() {
	chats[10].style.visibility = 'visible';
}