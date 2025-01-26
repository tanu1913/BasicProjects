// Function to toggle dark/light mode
function toggleMode() {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}

// Function to update time
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const digitalTime = document.getElementById("digital-time");

    // Displaying digital time
    digitalTime.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    // Updating analog clock hands
    const hourDeg = (360 / 12) * (hours % 12 + minutes / 60);  // 12-hour format
    const minuteDeg = (360 / 60) * minutes;  // 60 minutes in a circle
    const secondDeg = (360 / 60) * seconds;  // 60 seconds in a circle

    document.querySelector('.hour').style.transform = `translate(-50%, -50%) rotate(${hourDeg}deg)`;
    document.querySelector('.minute').style.transform = `translate(-50%, -50%) rotate(${minuteDeg}deg)`;
    document.querySelector('.second').style.transform = `translate(-50%, -50%) rotate(${secondDeg}deg)`;
}

// Function to format time for digital clock
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Calling updateTime every second
setInterval(updateTime, 1000);
updateTime(); // Initial call to show time immediately
