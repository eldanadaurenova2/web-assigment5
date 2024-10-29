
const steps = document.querySelectorAll('.form-step');
let currentStep = 0;

function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.style.display = index === stepIndex ? 'block' : 'none';
    });
}

document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMessage = document.getElementById('error-message');

        if (currentStep === 0 && !validateEmail(email)) {
            errorMessage.textContent = 'Пожалуйста, введите корректный email.';
            return;
        } else if (currentStep === 1 && password.length < 6) {
            errorMessage.textContent = 'Пароль должен содержать минимум 6 символов.';
            return;
        } else if (currentStep === 2 && password !== confirmPassword) {
            errorMessage.textContent = 'Пароли не совпадают.';
            return;
        }

        errorMessage.textContent = '';
        currentStep++;
        showStep(currentStep);
    });
});

document.querySelectorAll('.back').forEach(button => {
    button.addEventListener('click', () => {
        currentStep--;
        showStep(currentStep);
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма успешно отправлена!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


showStep(currentStep);
