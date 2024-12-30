function setupVotingDropdown() {
    const votingToggle = document.getElementById('voting-toggle');
    const votingDropdown = document.getElementById('voting-dropdown');

    if (votingToggle && votingDropdown) {
        votingToggle.addEventListener('click', () => {
            votingDropdown.classList.toggle('active'); // Use 'active' to match the CSS class
        });
    } else {
        console.warn('Voting toggle or dropdown element is missing!');
    }
}

// Call the function to set up the dropdown
setupVotingDropdown();