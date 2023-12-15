function toCase(text) {
  
	let lo=text.toLowerCase() ,up=text.toUpperCase();
	return lo.concat(`-${up}`);
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
