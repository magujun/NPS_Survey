var validateQuestion = function(elementValue) {
    var questionPattern = /^[a-zA-Z0-9._-]/;
    return questionPattern.test(elementValue);
}
$('#question-input').keyup(function() {
 
    var value = $(this).val();
    var valid = validateQuestion(value);
 
    if (!valid) {
        $(this).css('color', 'red');
		$('.question-button').prop('disabled', true);
    } else {
        $(this).css('color', '#2bb673');
		$('.question-button').prop('disabled', false);
    }
});

var validateEmail = function(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}
$('#email-input').keyup(function() {
 
    var value = $(this).val();
    var valid = validateEmail(value);
 
    if (!valid) {
        $(this).css('color', 'red');
		$('.email-button').prop('disabled', true);
    } else {
        $(this).css('color', '#2bb673');
		$('.email-button').prop('disabled', false);
    }
});

const survey = {};
 
survey.main = document.querySelector('.main');
survey.form = document.querySelector('.main > #form');
survey.create = document.querySelector('.main > #form > button#create');
survey.participate = document.querySelector('.main > #form > button#participate');
survey.divCreate = document.querySelector('.main > #form > #question');
survey.divParticipate = document.querySelector('.main > #form > #email');
survey.inputCreate = document.querySelector('.main > #form > #question > #question-input');
survey.inputParticipate = document.querySelector('.main > #form > #email > #email-input');
survey.buttonCreate = document.querySelector('.main > #form > #question > #question-button');
survey.buttonParticipate = document.querySelector('.main > #form > #email > #email-button');
survey.successMessageCreate = document.querySelector('.main > #create_success');
survey.successMessageParticipate = document.querySelector('.main > #participate_success');
survey.submitDelay = 1000;
 
survey.clickHandler = (e) => {
    switch (e.target) {
        case survey.create:
            console.log('case survey.create');
            survey.main.style.width = '30rem'
            e.target.classList.add('shown');
            survey.participate.classList.add('hidden');
            survey.divParticipate.classList.add('hidden');
            survey.inputCreate.classList.add('shown');
            survey.buttonCreate.classList.add('shown');
            survey.inputCreate.focus();
            break;
         case survey.participate:
            console.log('case survey.participate');
            survey.main.style.width = '30rem'
            e.target.classList.add('shown');
            survey.create.classList.add('hidden');
            survey.divCreate.classList.add('hidden');
            survey.inputParticipate.classList.add('shown');
            survey.buttonParticipate.classList.add('shown');
            survey.inputParticipate.focus();
            break;
        case survey.buttonCreate:
            survey.submitFormCreate();
            survey.handleInputKeypress = (e) => {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    survey.submitFormCreate();
                }
            }
            break;
        case survey.buttonParticipate:
            survey.submitFormParticipate();
            survey.handleInputKeypress = (e) => {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    survey.submitFormParticipate();
                }
            }
            break;
    }
}

survey.submitFormCreate = () => {
    survey.inputCreate.style.transition = 'all .6s ease';
    survey.buttonCreate.style.transition = 'all .6s ease';
    survey.main.style.transition = 'all .6s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
    survey.main.style.width = '';
    survey.create.classList.add('hidden');
    survey.divCreate.classList.add('hidden');
    survey.successMessageCreate.classList.remove('hidden');
    let submission = setTimeout(() => survey.form.submit(), survey.submitDelay);
}
survey.submitFormParticipate = () => {
    survey.inputCreate.style.transition = 'all .6s ease';
    survey.buttonParticipate.style.transition = 'all .6s ease';
    survey.main.style.transition = 'all .6s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
    survey.main.style.width = '';
    survey.divParticipate.classList.add('hidden');
    survey.successMessageParticipate.classList.remove('hidden');
    let submission = setTimeout(() => survey.form.submit(), survey.submitDelay);
}
survey.inputCreate.addEventListener('keypress', (e) => survey.handleInputKeypress(e));
survey.inputParticipate.addEventListener('keypress', (e) => survey.handleInputKeypress(e));
document.addEventListener('click', (e) => survey.clickHandler(e));