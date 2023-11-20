document.addEventListener("DOMContentLoaded", function () {
    // Get the form and submit button elements
    var form = document.querySelector("form");
    var submitButton = document.querySelector(".btn-primary");
  
    // Fetch data for the City dropdown
    fetch("https://run.mocky.io/v3/d426f1dc-ca00-4e07-8c1f-bd1bd545741b")
      .then(response => response.json())
      .then(data => {
        populateDropdown("city", data);
      });
  
    // Fetch data for the Course Type dropdown
    fetch("https://run.mocky.io/v3/aaa8239d-40fe-40f5-a0d5-378d6f9dccc3")
      .then(response => response.json())
      .then(data => {
        populateDropdown("courseType", data);
      });
  
    // Add a click event listener to the submit button
    submitButton.addEventListener("click", function (event) {
      // Validate email
      var emailInput = document.getElementById("email");
      if (!isValidEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
      }
  
      // Validate phone number
      var phoneInput = document.getElementById("phonenumber");
      if (!isValidPhoneNumber(phoneInput.value)) {
        alert("Please enter a valid Turkish phone number.");
        event.preventDefault();
        return;
      }

      // Validate city
      var cityInput = document.getElementById("city");
      if (!cityInput.value) {
        alert("Please select a City.");
        event.preventDefault();
        return;
      }
  
      // Validate courseType
      var courseTypeInput = document.getElementById("courseType");
      if (!courseTypeInput.value) {
        alert("Please select a Course Type.");
        event.preventDefault();
        return;
      }
  
      
  
      // If all validations pass, submit the form
      form.submit();
    });
  
    // Function to validate email address
    function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Function to validate Turkish phone number
    function isValidPhoneNumber(phoneNumber) {
      // Assuming Turkish phone numbers start with +90 and have 10 digits
      var phoneRegex = /^\+90\d{10}$/;
      return phoneRegex.test(phoneNumber);
    }
  
    // Function to populate dropdown
    function populateDropdown(elementId, data) {
      var dropdown = document.getElementById(elementId);
  
      // Check if data is an array or an object with a named key
      var dataArray = Array.isArray(data) ? data : data[elementId];
  
      // Check if dataArray is an array
      if (Array.isArray(dataArray)) {
        dataArray.forEach(item => {
          var option = document.createElement("option");
          option.value = item;
          option.text = item;
          dropdown.add(option);
        });
      } else {
        console.error("Invalid data structure. Expected an array.");
      }
    }
  });
