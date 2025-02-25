// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
	// An to hold our created elements
	let elements = [];

	// Text manipulation function
	const modifyText = () => {
		const textElement = document.getElementById("modifyText");
		try {
			textElement.textContent = "Text has been modified!";
		} catch (error) {
			console.error("Error modifying text:", error);
		}
	};

	// Element manipulation functions
	const addElement = () => {
		const container = document.getElementById("elementContainer");
		const newElement = document.createElement("div");
		newElement.textContent = "New Element";
		newElement.className = "added-element";
		container.appendChild(newElement);
		elements.push(newElement);
	};

	// Removes the last element from the list.
	const removeElement = () => {
		// Don't try to remove anything if there are no elements to remove.
		if (elements.length == 0) {
			return;
		}

		// Removes element from array.
		let element = elements.pop();

		// Removes element from DOM.
		element.remove();
	};

	// Event listeners
	document.getElementById("textBtn").addEventListener("click", modifyText);
	document.getElementById("addBtn").addEventListener("click", addElement);
	document
		.getElementById("removeBtn")
		.addEventListener("click", removeElement);
});
