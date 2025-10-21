// HNG front end javascript code set up for timer

const timeElement = document.querySelector('[data-testid="test-user-time"]');

// Updates the timer in milliseconds 
function updateTime() {
  timeElement.textContent = `Current time: ${Date.now()} ms`;
}

updateTime();
setInterval(updateTime, 1000); // updates the timer every second
