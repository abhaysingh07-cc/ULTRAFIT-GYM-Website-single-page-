// Function to update the floating "Action Center"
function updateDisplay(title, message) {
    const center = document.getElementById('action-center');
    const text = document.getElementById('action-text');

    // Add a quick pulse effect
    center.style.transform = 'translateX(-50%) scale(1.1)';
    center.style.borderColor = '#00f2ff';
    
    // Update Text
    text.innerHTML = `<span style="color:#00f2ff">${title}</span>: ${message}`;

    setTimeout(() => {
        center.style.transform = 'translateX(-50%) scale(1)';
    }, 300);
}

// Function for buttons and formal actions
function triggerAction(actionName, detail) {
    console.log(`User clicked on: ${actionName}`);
    
    // Smooth update to UI
    updateDisplay("ACTION", detail);

    // If it's a membership plan, show a confirmation
    if (actionName.includes("Plan")) {
        setTimeout(() => {
            alert(`Ready to join? The ${actionName} is a great choice!`);
        }, 500);
    }
}

// Scroll Effect for Navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 8%';
        nav.style.background = 'rgba(0,0,0,0.95)';
    } else {
        nav.style.padding = '20px 8%';
        nav.style.background = 'rgba(0,0,0,0.8)';
    }
});