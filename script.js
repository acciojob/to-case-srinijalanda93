function toCase(text) {
  
	let lo=text.toLowerCase() ,up=text.UpperCase();
	return lo.concat(`- ${up}`);
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
