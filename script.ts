const togglebutton = document.getElementById('btn') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

togglebutton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';  // Assign 'block' when 'none'
    } else {
        skills.style.display = 'none';   // Correctly assign 'none' here
    }   
});
