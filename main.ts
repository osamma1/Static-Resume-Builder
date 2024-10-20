// Function to update the resume preview based on user input
function updatePreview() {
    const nameInput = (<HTMLInputElement>document.getElementById("name")).value;
    const emailInput = (<HTMLInputElement>document.getElementById("email")).value;
    const phoneInput = (<HTMLInputElement>document.getElementById("phone")).value;
    const addressInput = (<HTMLInputElement>document.getElementById("address")).value;
    const educationInput = (<HTMLTextAreaElement>document.getElementById("education")).value;
    const experienceInput = (<HTMLTextAreaElement>document.getElementById("experience")).value;
    const skillsInput = (<HTMLTextAreaElement>document.getElementById("skills")).value;
  
    // Update the resume preview section
    document.getElementById("preview-name")!.innerText = nameInput;
    document.getElementById("preview-email")!.innerText = emailInput;
    document.getElementById("preview-phone")!.innerText = phoneInput;
    document.getElementById("preview-address")!.innerText = addressInput;
    document.getElementById("preview-education")!.innerText = educationInput;
    document.getElementById("preview-experience")!.innerText = experienceInput;
    document.getElementById("preview-skills")!.innerText = skillsInput;
  }
  
  // Function to add event listeners to form fields
  function addEventListeners() {
    const formElements = [
      "name", "email", "phone", "address", "education", "experience", "skills"
    ];
  
    formElements.forEach(element => {
      document.getElementById(element)!.addEventListener("input", updatePreview);
    });
  }
  
  // Initialize event listeners when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    addEventListeners();
  });
  