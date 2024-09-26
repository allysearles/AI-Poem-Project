function displayPoem(response) {
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 2.0,
		cursor: "",
	});
}

function generatePoem(event) {
	event.preventDefault();

	let instructionsInput = document.querySelector("#user-instructions");
	let apiKey = "bf3ac0311d9084536tao67043b4313ef";

	let context = `You are a romantic French Poem expert and love to write short poems.Your mission is to generate a 4 line poem in basic HTML without replying back to me. Make sure to follow the user instructions below:. Be sure to sign the poem at the very end with a <strong> SheCodes AI </strong> and do not include any quotations or the word "html" in any of the text.`;
	let prompt = `Generate a French Poem about ${instructionsInput.value}`;
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let poemElement = document.querySelector("#poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `<div class = "generating"> ⏳ Generating a poem about ${instructionsInput.value}. . .</div> `;

	axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
