function calculateTip() {
	// get the input value
	let price = parseFloat(document.getElementById("price").value);

	// calculate the tip (10% of the price)
	let tipAmount = price * 0.1;

	// calculate the total amount
	let totalAmount = price + tipAmount;

	// display the tip and total amounts
	document.getElementById("tip").innerHTML = "Tips: " + tipAmount.toFixed(2) + " $";
	document.getElementById("total").innerHTML = "Total: " + totalAmount.toFixed(2) + " $";
}
