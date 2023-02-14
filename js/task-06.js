const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', onInputBlur); 
	function  onInputBlur(event) {
	if (event.currentTarget.value.length === Number(textInput.getAttribute('data-length'))) {
		event.currentTarget.classList.add('valid');
		if (event.currentTarget.classList.contains('invalid')) {
			event.currentTarget.classList.remove('invalid');
		}
	} else {
		if (event.currentTarget.classList.contains('valid')) {
			event.currentTarget.classList.remove('valid');
		}
		event.currentTarget.classList.add('invalid');
	}
}