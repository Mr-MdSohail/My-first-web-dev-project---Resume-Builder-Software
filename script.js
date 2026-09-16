alert("you are about to make a professional resume!");
// Get all form inputs
const form = {
    photo: document.getElementById('photo'),
    name: document.getElementById('name'),
    job: document.getElementById('job'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    addr: document.getElementById('addr'),
    about: document.getElementById('about'),
    college: document.getElementById('college'),
    degree: document.getElementById('degree'),
    year: document.getElementById('year'),
    skill1: document.getElementById('skill1'),
    skill2: document.getElementById('skill2'),
    skill3: document.getElementById('skill3'),
    exptitle: document.getElementById('exptitle'),
    expdetail: document.getElementById('expdetail')
};

// Photo upload handler
document.getElementById('photo').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('photoImg').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Add event listeners - when user types, update resume
Object.values(form).forEach(input => {
    input.addEventListener('input', updateResume);
});

// Function to update resume
function updateResume() {
    document.getElementById('rName').textContent = form.name.value || 'Your Name';
    document.getElementById('rJob').textContent = form.job.value || 'Position';
    document.getElementById('rEmail').textContent = form.email.value || 'email@example.com';
    document.getElementById('rPhone').textContent = form.phone.value || '9876543210';
    document.getElementById('rAddr').textContent = form.addr.value || 'City, State';
    document.getElementById('rAbout').textContent = form.about.value || 'I am a responsible and orderly person...';
    document.getElementById('rCollege').textContent = form.college.value || 'University';
    document.getElementById('rDegree').textContent = form.degree.value || 'Degree';
    document.getElementById('rYear').textContent = form.year.value || '2020-2024';
    document.getElementById('rSkill1').textContent = form.skill1.value || 'Skill';
    document.getElementById('rSkill2').textContent = form.skill2.value || 'Skill';
    document.getElementById('rSkill3').textContent = form.skill3.value || 'Skill';
    document.getElementById('rExpTitle').textContent = form.exptitle.value || 'Project Name';
    document.getElementById('rExpDetail').textContent = form.expdetail.value || 'Description...';
}

// Download PDF
function downloadPDF() {
    document.querySelector('.form').style.display = 'none';
    document.querySelector('.header').style.display = 'none';
    window.print();
    setTimeout(() => {
        document.querySelector('.form').style.display = 'block';
        document.querySelector('.header').style.display = 'block';
    }, 100);
}

// Clear all
function clearAll() {
    Object.values(form).forEach(input => {
        input.value = '';
    });
    document.getElementById('photoImg').src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='130'%3E%3Crect width='130' height='130' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' font-size='12' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EPhoto%3C/text%3E%3C/svg%3E";
    updateResume();
}

// Start
updateResume();