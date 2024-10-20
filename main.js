
function updatePreview() {
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var phoneInput = document.getElementById("phone").value;
    var addressInput = document.getElementById("address").value;
    var educationInput = document.getElementById("education").value;
    var experienceInput = document.getElementById("experience").value;
    var skillsInput = document.getElementById("skills").value;
    document.getElementById("preview-name").innerText = nameInput;
    document.getElementById("preview-email").innerText = emailInput;
    document.getElementById("preview-phone").innerText = phoneInput;
    document.getElementById("preview-address").innerText = addressInput;
    document.getElementById("preview-education").innerText = educationInput;
    document.getElementById("preview-experience").innerText = experienceInput;
    document.getElementById("preview-skills").innerText = skillsInput;
}
// Add event listeners to form fields
function addEventListeners() {
    var formElements = [
        "name", "email", "phone", "address", "education", "experience", "skills"
    ];
    formElements.forEach(function (element) {
        document.getElementById(element).addEventListener("input", updatePreview);
    });
}
// Initialize event listeners when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    addEventListeners();
});
