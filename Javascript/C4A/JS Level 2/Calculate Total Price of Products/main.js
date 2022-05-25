const container = document.getElementById("container");
container.addEventListener("change", (eo) => {
  updateTotalPrice();
});

// =============================================================================
// Create the function to update the price of the products , listening  to click event
const updateTotalPrice = () => {
	// note here calling function doesn't afftected by hoisting function
	const AllProducts = document.querySelectorAll(".product");
	// Set the general variable for the calculating the total price, to enable reassign updated values
  let total = 0;
  // looping of node list of queryseletorAll, using for each.
	AllProducts.forEach((item) => {
    const price = Number(
      // use number method to change string to number as after getting elementByClassName . innerText returns a string
      // note that we replace the dollar sign with empty character ""
			item.getElementsByClassName("price")[0].innerText.replace("$", "")
		);
		const toFix = price.toFixed(2);
		const quantity = Number(
			item.getElementsByClassName("input-quantity")[0].value
		);
		total = total + (toFix * quantity);
	});

	document.getElementById("total-price").innerText = `  ${total}  $`;
};
// =============================================================================
const calc = document.getElementById("calc");
calc.addEventListener("click", (eo) => {
	updateTotalPrice();
});
