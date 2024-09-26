function displayPoem(response) {
	console.log("poem generated");
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 1,
		cursor: "",
	});
}

function generatePoem(event) {
	event.preventDefault();

	let instructionsInput = document.querySelector("#user-instructions");
	let apiKey = "bf3ac0311d9084536tao67043b4313ef";

	let context = `You are a romantic French Poem expert and love to write short poems.Your mission is to generate a 4 line poem in basic HTML without replying back to me. Make sure to follow the user instructions below: and remove any extra ""'s or html phrases. Be sure to sign the poem at the very end with a <strong> SheCodes AI </strong>`;
	let prompt = `Generate a French Poem about ${instructionsInput.value}`;
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	console.log("Generating Poem");
	console.log(`Prompt: ${prompt}`);
	console.log(`Context: ${context}`);

	axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
