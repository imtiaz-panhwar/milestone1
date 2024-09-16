var togglebutton = document.getElementById('btn');
var skills = document.getElementById('skills');
togglebutton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block'; // Assign 'block' when 'none'
    }
    else {
        skills.style.display = 'none'; // Correctly assign 'none' here
    }
});
