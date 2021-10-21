let header = document.getElementById('header-container');
header.style.color = 'white';
header.style.backgroundColor = 'green';

let emergencyTasksBackground = document.querySelector('.emergency-tasks');
emergencyTasksBackground.style.backgroundColor = 'salmon'

let emergencyTasksh3 = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTasksh3.length; i+=1) {
emergencyTasksh3[i].style.backgroundColor = 'purple';
};

let noEmergencyTasksBackground = document.querySelector ('.no-emergency-tasks');
noEmergencyTasksBackground.style.backgroundColor = 'yellow';

let noEmergencyTasksh3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTasksh3.length; i+=1) {
  noEmergencyTasksh3[i].style.backgroundColor = 'black'
};

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'black';

