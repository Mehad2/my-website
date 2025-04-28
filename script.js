
    // Quiz functionality
    document.getElementById('quiz-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission
        
        const selectedOption = document.querySelector('input[name="quiz-answer"]:checked');
        const feedback = document.getElementById('quiz-feedback');

        if (!selectedOption) {
            feedback.textContent = 'Please select an answer.';
            feedback.style.color = 'red';
            return;  // Exit the function if no answer is selected
        }

        const answer = selectedOption.value;
        if (answer === '1') { // Correct answer is option 1
            feedback.textContent = 'Correct! Angelo Moriondo invented the first espresso machine.';
            feedback.style.color = 'green';
        } else {
            feedback.textContent = 'Incorrect. The correct answer is A) Angelo Moriondo.';
            feedback.style.color = 'red';
        }
    });

    // Contact form validation
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission
        
        // Clear previous error messages
        document.getElementById('name-error').style.display = 'none';
        document.getElementById('email-error').style.display = 'none';

        // Validate Name
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            document.getElementById('name-error').textContent = 'Name is required.';
            document.getElementById('name-error').style.display = 'block';
        }

        // Validate Email
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
        if (email === '') {
            document.getElementById('email-error').textContent = 'Email is required.';
            document.getElementById('email-error').style.display = 'block';
        } else if (!emailPattern.test(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email.';
            document.getElementById('email-error').style.display = 'block';
        }

        // If all fields are valid, submit the form (or perform desired action)
        if (name && emailPattern.test(email)) {
            alert('Form submitted successfully!');
        }
    });

    // Review slider functionality
    let currentIndex = 0;

    function currentSlide(index) {
        const reviews = document.querySelectorAll('.review');
        const dots = document.querySelectorAll('.dot');
        
        reviews.forEach((review, i) => {
            review.classList.remove('active');
            dots[i].classList.remove('active');
        });
        
        reviews[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % document.querySelectorAll('.review').length;
        currentSlide(currentIndex);
    }

    setInterval(autoSlide, 3000);
;