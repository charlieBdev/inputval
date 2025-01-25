const submitBtn = document.getElementById('submit');
const inputs = document.querySelectorAll('input');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const invalidInputs = Array.from(inputs).filter(input => !input.checkValidity())

  if (invalidInputs.length) {
    const invalidInputNames = invalidInputs.map(input => {
      const label = document.querySelector(`label[for="${input.id}"]`)
      return label.textContent;
    })
    .join('\n- ');

    alert(`Please fix the invalid inputs:\n\n- ${invalidInputNames}`);
  } else {
    alert('All inputs are valid!');
  }
})

function checkOnSubmit() {
  const invalidInputs = Array.from(inputs).filter(input => !input.checkValidity())

  if (invalidInputs.length) {
    const invalidInputNames = invalidInputs.map(input => {
      const label = document.querySelector(`label[for="${input.id}"]`)
      return label.textContent;
    })
    .join('\n- ');

    alert(`Please fix the invalid inputs:\n\n- ${invalidInputNames}`);
  } else {
    alert('All inputs are valid!');
  }
}

inputs.forEach(input => {
  input.addEventListener('keyup', toggleSubmit);
});

function toggleSubmit() {
  const validInputs = Array.from(inputs).every(input => input.checkValidity())
  if (validInputs) {
    submitBtn.classList.add('ok');
  } else {
    submitBtn.classList.remove('ok');
  }
}