// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Function to close the modal if clicked outside the image
function closeModal(event) {
    // Close modal if clicked outside the modal content
    if (event.target.classList.contains('modal')) {
        document.querySelectorAll('.modal').forEach(function(modal) {
            modal.style.display = "none";
        });
    }
}

