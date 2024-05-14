function toggleService(serviceId) {
    // Hide all service content sections
    var serviceContents = document.querySelectorAll('.service-content');
    serviceContents.forEach(function(serviceContent) {
        serviceContent.style.display = 'none';
    });

    // Show the selected service content
    var selectedService = document.getElementById(serviceId);
    selectedService.style.display = 'block';
}

function redirectToDataAnalysisPage() {
    // Replace 'data-analysis-page.html' with the actual URL of your data analysis page
    window.location.href = 'data_analysis.html';
}

function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

// Redirect to create account page when "Create Account" link is clicked
document.getElementById("create-account-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "create_account.html"; // Redirect to create account page
});
