var validateText = function (elementValue) {
	var questionPattern = /^[a-zA-Z0-9._-]/;
	return questionPattern.test(elementValue);
};
var validateEmail = function (elementValue) {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(elementValue);
};
$('#title').keyup(function () {
	var value = $(this).val();
	var valid = validateText(value);

	if (!valid) {
		$(this).css('color', 'red');
		$('#title_desc-button').prop('disabled', true);
		$('#title_desc-button').prop('class', 'disabled');
	} else {
		$(this).css('color', '#00ff00');
		$('#title_desc-button').prop('disabled', false);
	}
});
$('#description').keyup(function () {
	var value = $(this).val();
	var valid = validateText(value);

	if (!valid) {
		$(this).css('color', 'red');
		$('#title_desc-button').prop('disabled', true);
		$('#title_desc-button').prop('class', 'disabled');
	} else {
		$(this).css('color', '#00ff00');
		$('#title_desc-button').prop('disabled', false);
		$('#title_desc-button').prop('class', false);
	}
});
$('#name').keyup(function () {
	var value = $(this).val();
	var valid = validateText(value);

	if (!valid) {
		$(this).css('color', 'red');
		$('#name_email-button').prop('disabled', true);
		$('#name_email-button').prop('class', 'disabled');
	} else {
		$(this).css('color', '#00ff00');
		// $('#name_email-button').prop('disabled', false);
	}
});
$('#email').keyup(function () {
	var value = $(this).val();
	var valid = validateEmail(value);

	if (!valid) {
		$(this).css('color', 'red');
		$('#name_email-button').prop('disabled', true);
		$('#name_email-button').prop('class', 'disabled');
	} else {
		$(this).css('color', '#00ff00');
		$('#name_email-button').prop('disabled', false);
		$('#name_email-button').prop('class', false);
	}
});

const survey = {};

survey.main = document.querySelector('.main');
survey.formCreate = document.querySelector('.main > #create');
survey.formParticipate = document.querySelector('.main > #participate');
survey.create = document.querySelector('.main > #create > #create-button');
survey.participate = document.querySelector(
	'.main > #participate > #participate-button'
);
survey.divCreate = document.querySelector('.main > #create > #title_desc');
survey.divParticipate = document.querySelector(
	'.main > #participate > #name_email'
);
survey.inputTitle = document.querySelector(
	'.main > #create > #title_desc > #title'
);
survey.inputDescription = document.querySelector(
	'.main > #create > #title_desc > #description'
);
survey.inputName = document.querySelector(
	'.main > #participate > #name_email > #name'
);
survey.inputEmail = document.querySelector(
	'.main > #participate > #name_email > #email'
);
survey.buttonCreate = document.querySelector(
	'.main > #create > #title_desc > #title_desc-button'
);
survey.buttonParticipate = document.querySelector(
	'.main > #participate > #name_email > #name_email-button'
);
survey.successMessageCreate = document.querySelector('.main > #create_success');
survey.successMessageParticipate = document.querySelector(
	'.main > #participate_success'
);
survey.submitDelay = 3000;

survey.clickHandler = (e) => {
	switch (e.target) {
		case survey.create:
			console.log('case survey.create');
			survey.main.style.width = '80%';
			survey.formParticipate.classList.add('hidden');
			e.target.classList.add('trans');
			survey.participate.classList.add('hidden');
			survey.divCreate.classList.remove('hidden');
			survey.inputTitle.classList.remove('hidden');
			survey.inputDescription.classList.remove('hidden');
			survey.buttonCreate.classList.remove('hidden');
			survey.inputTitle.focus();
			break;
		case survey.participate:
			console.log('case survey.participate');
			survey.main.style.width = '80%';
			survey.formCreate.classList.add('hidden');
			e.target.classList.add('trans');
			survey.create.classList.add('hidden');
			survey.divParticipate.classList.remove('hidden');
			survey.inputName.classList.remove('hidden');
			survey.inputEmail.classList.remove('hidden');
			survey.buttonParticipate.classList.remove('hidden');
			survey.inputName.focus();
			break;
		case survey.buttonCreate:
			survey.submitFormCreate();
			break;
		case survey.buttonParticipate:
			survey.submitFormParticipate();
			break;
	}
};
survey.inputTitle.handleInputKeyPress = (e) => {
	if (e.keyCode === 13) {
		e.preventDefault();
		survey.submitFormCreate();
	}
};
survey.inputDescription.handleInputKeyPress = (e) => {
	if (e.keyCode === 13) {
		e.preventDefault();
		survey.submitFormCreate();
	}
};
survey.inputName.handleInputKeyPress = (e) => {
	if (e.keyCode === 13) {
		e.preventDefault();
		survey.submitFormParticipate();
	}
};
survey.inputEmail.handleInputKeyPress = (e) => {
	if (e.keyCode === 13) {
		e.preventDefault();
		survey.submitFormParticipate();
	}
};
async function handleFormSubmit(event) {
	event.preventDefault();

	const form = event.currentTarget;
	const url = form.action;

	try {
		const formData = new FormData(form);
		const responseData = await postFormDataAsJson({ url, formData });

		console.log({ responseData });
	} catch (error) {
		console.error(error);
	}
}

/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} options.url - URL to POST data to
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
async function postFormDataAsJson({ url, formData }) {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: formDataJsonString,
	};

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}
survey.submitFormCreate = () => {
	survey.inputTitle.style.transition = 'all .6s ease';
	survey.inputDescription.style.transition = 'all .6s ease';
	survey.buttonCreate.style.transition = 'all .6s ease';
	survey.main.style.transition =
		'all .6s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
	survey.create.classList.add('hidden');
	survey.divCreate.classList.add('hidden');
	survey.formCreate.classList.add('hidden');
	survey.main.style.width = '';
	survey.successMessageCreate.classList.remove('hidden');
	survey.successMessageCreate.classList.add('trans');
	survey.successMessageCreate.style.height = '100%';
	const submit = document.getElementById('create');
	submit.addEventListener('submit', handleFormSubmit);
	//   let submission = setTimeout(
	//     () => survey.formCreate.submit(),
	//     survey.submitDelay
	//   );
};
survey.submitFormParticipate = () => {
	survey.inputName.style.transition = 'all .6s ease';
	survey.inputEmail.style.transition = 'all .6s ease';
	survey.buttonParticipate.style.transition = 'all .6s ease';
	survey.main.style.transition =
		'all .6s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
	survey.participate.classList.add('hidden');
	survey.divParticipate.classList.add('hidden');
	survey.formParticipate.classList.add('hidden');
	survey.main.style.width = '';
	survey.successMessageParticipate.classList.remove('hidden');
	survey.successMessageParticipate.classList.add('trans');
	survey.successMessageParticipate.style.height = '100%';
	const submit = document.getElementById('participate');
	submit.addEventListener('submit', handleFormSubmit);
	// let submission = setTimeout(
	// () => survey.formParticipate.submit(),
	// survey.submitDelay
	//   );
};
survey.inputTitle.addEventListener('keypress', (e) =>
	survey.inputTitle.handleInputKeyPress(e)
);
survey.inputDescription.addEventListener('keypress', (e) =>
	survey.inputDescription.handleInputKeyPress(e)
);
survey.inputName.addEventListener('keypress', (e) =>
	survey.inputName.handleInputKeyPress(e)
);
survey.inputEmail.addEventListener('keypress', (e) =>
	survey.inputEmail.handleInputKeyPress(e)
);

document.addEventListener('click', (e) => survey.clickHandler(e));
