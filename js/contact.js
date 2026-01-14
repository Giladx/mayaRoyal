// Contact Form JavaScript
// Form validation and submission handling

// Initialize contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
});

// Handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Validate all fields
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        showToast('Please fill in all required fields correctly', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (in production, this would send to a backend API)
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Get form values for display
        const name = formData.get('name');
        const email = formData.get('email');
        const interest = formData.get('interest');
        const message = formData.get('message');
        
        console.log('Form submitted:', { name, email, interest, message });
        
        // Show success message
        displaySuccessMessage(form);
        
        // Reset form
        form.reset();
        
        showToast('Message sent successfully! We will contact you soon.', 'success');
        
    } catch (error) {
        console.error('Error submitting form:', error);
        showToast('Failed to send message. Please try again or contact us directly.', 'error');
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error
    removeFieldError(field);
    
    // Check if required field is empty
    if (field.hasAttribute('required') && value === '') {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (fieldName === 'email' && value !== '') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Phone validation (optional but if filled, should be valid)
    if (fieldName === 'phone' && value !== '') {
        const phonePattern = /^[\d\s\-\+\(\)]+$/;
        if (!phonePattern.test(value) || value.length < 10) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    
    // Display error if invalid
    if (!isValid) {
        displayFieldError(field, errorMessage);
    }
    
    return isValid;
}

// Display field error
function displayFieldError(field, message) {
    field.classList.add('error');
    
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Insert after field
    field.parentNode.appendChild(errorDiv);
}

// Remove field error
function removeFieldError(field) {
    field.classList.remove('error');
    
    // Remove error message if exists
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Display success message
function displaySuccessMessage(form) {
    // Remove existing success message if any
    const existingSuccess = form.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <strong>✓ Success!</strong> Your message has been sent. 
        We'll get back to you within 24 hours.
    `;
    
    // Insert at top of form
    form.insertBefore(successDiv, form.firstChild);
    
    // Scroll to success message
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.style.transition = 'opacity 0.5s';
        successDiv.style.opacity = '0';
        setTimeout(() => successDiv.remove(), 500);
    }, 5000);
}

// Export for use in other scripts
window.ContactForm = {
    validateField,
    handleFormSubmit
};
