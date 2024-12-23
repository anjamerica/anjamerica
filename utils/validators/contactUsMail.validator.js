const contactUsMailValidator = (data) => {
  const {
    first_name,
    last_name,
    description,
    country_code,
    mobile_number,
    email,
  } = data;

  let errors = {};

  // First Name Validation (Required and must be a string)
  if (
    !first_name ||
    typeof first_name !== "string" ||
    first_name.trim().length === 0
  ) {
    errors.first_name = "First name is required and must be a valid string.";
  }

  // Last Name Validation (Required and must be a string)
  if (
    !last_name ||
    typeof last_name !== "string" ||
    last_name.trim().length === 0
  ) {
    errors.last_name = "Last name is required and must be a valid string.";
  }

  // Description Validation (Optional but must be a string and within the character limit)
  //   if (description) {
  //     if (typeof description !== 'string') {
  //       errors.description = 'Description must be a valid string.';
  //     } else if (description.length > 500) {
  //       // Set a limit of 500 characters
  //       errors.description = 'Description cannot exceed 500 characters.';
  //     }
  //   }

  // Mobile Number Validation (Required and must be a valid number format)
  const mobileNumberRegex = /^[0-9]{7,15}$/; // Validates 7 to 15 digit numbers
  if (!mobile_number || !mobileNumberRegex.test(mobile_number)) {
    errors.mobile_number =
      "Mobile number is required and must be between 7 to 15 digits.";
  }

  // Email Validation (Required and must be a valid email format)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "A valid email is required.";
  }

  // Return errors or success
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  } else {
    return { success: true };
  }
};

export { contactUsMailValidator };
