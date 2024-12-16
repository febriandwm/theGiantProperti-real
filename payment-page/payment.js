const paymentForm = document.querySelector('.payment-form form');

paymentForm.addEventListener('submit', function (event) {
    console.log('Form submit event triggered'); 

    const inputs = paymentForm.querySelectorAll('input');
    console.log('Found inputs:', inputs); 
    let allFieldsFilled = true;

    inputs.forEach(input => {
        console.log('Checking input:', input.name, 'with value:', input.value); 
        if (input.value.trim() === '') {
            allFieldsFilled = false;
            input.style.border = '2px solid red'; 
            console.log('Input is empty:', input.name); 
        } else {
            input.style.border = '1px solid #ccc'; 
            console.log('Input is filled:', input.name); 
        }
    });

    if (!allFieldsFilled) {
        event.preventDefault();
        console.log('Form submission prevented due to empty fields'); 
        alert('Harap isi semua bidang sebelum melanjutkan.');
    } else {
        console.log('All fields are filled, form submission will proceed'); 
    }
});
