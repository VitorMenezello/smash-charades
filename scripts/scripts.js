let grabsFlag = false;
let tauntsFlag = false;
let inputMovesFlag = false;
let echoesFlag = false;
let miisFlag = false;

let selectedChar = null;
let selectedMove = null;

const echoFilter = (char) => {
	return echoesFlag && char.echo || !char.echo;
}

const miiFilter = (char) => {
	const isCharMii = char.name.includes("Mii");
	return miisFlag && isCharMii || !isCharMii;
}

const toggleGrabs = () => {
	grabsFlag = !grabsFlag;
}

const toggleTaunts = () => {
	tauntsFlag = !tauntsFlag;
}

const toggleInputMoves = () => {
	inputMovesFlag = !inputMovesFlag;
}

const toggleEchoes = () => {
	echoesFlag = !echoesFlag;
}

const toggleMiis = () => {
	miisFlag = !miisFlag;
}

const randomize = () => {
	const filteredChars = characters.filter(char => echoFilter(char) && miiFilter(char));
	const randomCharIndex = Math.floor(filteredChars.length * Math.random());
	selectedChar = filteredChars[randomCharIndex];

	let possibleMoves = moves.defaultMoves.concat(selectedChar.moves);
	if (grabsFlag) {
		possibleMoves = possibleMoves.concat(moves.grabs, moves.grabModifiers, moves.throws);
	}
	if (tauntsFlag) {
		possibleMoves = possibleMoves.concat(moves.taunts);
	}
	if (inputMovesFlag && selectedChar.inputMoves) {
		possibleMoves = possibleMoves.concat(selectedChar.inputMoves);
	}
	const randomMoveIndex = Math.floor(possibleMoves.length * Math.random());
	selectedMove = possibleMoves[randomMoveIndex];

	document.getElementById('nothing-selected').style.display = 'none';
	document.getElementById('selected-char').style.display = 'block';
	document.getElementById('selected-char').innerHTML = selectedChar.name;
	document.getElementById('selected-move').style.display = 'block';
	document.getElementById('selected-move').innerHTML = selectedMove;
}

const copyDiscordToClipboard = () => {
	const textArea = document.createElement("textarea");
	textArea.style.position = 'fixed';
	textArea.style.top = 0;
	textArea.style.left = 0;
	textArea.style.width = '2em';
	textArea.style.height = '2em';
	textArea.style.padding = 0;
	textArea.style.border = 'none';
	textArea.style.outline = 'none';
	textArea.style.boxShadow = 'none';
	textArea.style.background = 'transparent';
	textArea.value = "Samwa#4288";

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		const result = document.execCommand('copy');
		if (result) {
			let tooltip = document.getElementById("tooltip");
			tooltip.innerHTML = "Copied!";
			setTimeout(() => {
				tooltip = document.getElementById("tooltip");
				tooltip.innerHTML = "Click to copy!";
			}, 5000);
		}
	} catch (err) {
		console.log('Error!');
	}

	document.body.removeChild(textArea);
}

const hoverMenuIcon = () => {
	const menu = document.getElementById("menu");
	menu.classList.add('menu-hover');
	setTimeout(() => {
		menu.classList.remove('menu-hover');
	}, 1000);
}

const hoverMenu = () => {
	const menu = document.getElementById("menu");
	if (menu.classList.contains('menu-hover')) {
		menu.classList.add('hover');
	}
}

const unhoverMenu = () => {
	const menu = document.getElementById("menu");
	menu.classList.remove('hover');
}

const openMenu = () => {
	const menu = document.getElementById("menu");
	if (menu.classList.contains('open')) {
		menu.classList.remove('open');
	} else {
		menu.classList.add('open');
	}
}
