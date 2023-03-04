//const king = document.querySelector('.chess-piece')
const king = document.getElementById('Baron');
const squares = document.querySelectorAll('.square');
const p = document.getElementById('info');

squares.forEach((square) => {
	square.addEventListener('dragover', dragOver);
	square.addEventListener('dragenter', dragEnter)
	square.addEventListener('dragleave', dragLeave)
	square.addEventListener('dragend', dragEnd);
	square.addEventListener('drop', dragDrop);
});

let beingDragged = null;

function dragStart(e) {
	beingDragged = e.target;
}

function dragOver(e) {
	e.preventDefault();
}

function draging(e) {
	p.textContent = `You a dragging a ` + beingDragged.id
}

function dragEnter(e) {
	e.target.classList.add('highlight')
}

function dragLeave(e) {
	e.target.classList.remove('highlight');
}

function dragEnd(e) {
	e.target.classList.add('target')
	setTimeout(() => {
		e.target.classList.remove('target')
	}, 100)
}

function dragDrop(e) {
	e.target.append(beingDragged);
	e.target.classList.remove('highlight');
	p.textContent = ``
}

//---------------------------------------------------------------------------------------------------

king.addEventListener('drag', draging);
king.addEventListener('dragstart', dragStart);

//---------------------------------------------------------------------------------------------------
