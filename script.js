// Star animation
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.stars').appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let numStars = 100;
const starSpeed = 0.7;

function initStars() {
    stars = []; // إعادة تعيين النجوم لتجنب تراكمها
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width
        });
    }
}

function moveStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        stars[i].z -= starSpeed;
        if (stars[i].z <= 0) {
            stars[i].z = canvas.width;
        }

        const k = 128.0 / stars[i].z;
        const px = stars[i].x * k + canvas.width / 2;
        const py = stars[i].y * k + canvas.height / 2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
            const size = (1 - stars[i].z / canvas.width) * 5;
            const shade = parseInt((1 - stars[i].z / canvas.width) * 255);
            ctx.fillStyle = `rgb(${shade}, ${shade}, 255)`;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    requestAnimationFrame(moveStars);
}

initStars();
moveStars();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars(); // إعادة تهيئة النجوم عند تغيير حجم النافذة
});


// منع النسخ
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// منع استخدام قائمة السياق (النقر بزر الفأرة الأيمن)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع تحديد النصوص
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'v')) {
        e.preventDefault();
    }
});







// Data for Erbil
const data = {
    "erbil": {
        "جامعة هولير الطبية": {
            "الطب": [
                { department: 'طب عام', evening: 99, parallel: 97.139, online: 97.837 },
                { department: 'طب اسنان', evening: '***', parallel: 96.333, online: 96.667 },
                // ... (remaining data)
            ],
            "التمريض": [
                { department: 'تمريض', evening: '***', parallel: 91.281, online: 92.8 },
                // ... (remaining data)
            ]
        },
        "جامعة صلاح الدين": {
            "كلية الطب": [
                { department: 'طب بيطري', evening: '***', parallel: 88.013, online: 79.143 },
                // ... (remaining data)
            ],
            "الهندسة": [
                { department: 'معماري', evening: '***', parallel: 95.849, online: 94.56 },
                // ... (remaining data)
            ]
        }
    }
};

// Populate universities based on city
function populateUniversities(city) {
    const universitySelect = document.getElementById('university-select');
    universitySelect.innerHTML = '<option value="">-- اختر جامعة --</option>';
    if (city && data[city]) {
        Object.keys(data[city]).forEach(university => {
            const option = document.createElement('option');
            option.value = university;
            option.textContent = university;
            universitySelect.appendChild(option);
        });
        universitySelect.disabled = false;
    } else {
        universitySelect.disabled = true;
    }
    document.getElementById('college-select').disabled = true;
    document.getElementById('show-data-btn').disabled = true;
    document.getElementById('data-table-container').style.display = 'none';
}

// Populate colleges based on university
function populateColleges(city, university) {
    const collegeSelect = document.getElementById('college-select');
    collegeSelect.innerHTML = '<option value="">-- اختر كلية --</option>';
    if (city && university && data[city][university]) {
        Object.keys(data[city][university]).forEach(college => {
            const option = document.createElement('option');
            option.value = college;
            option.textContent = college;
            collegeSelect.appendChild(option);
        });
        collegeSelect.disabled = false;
    } else {
        collegeSelect.disabled = true;
    }
    document.getElementById('show-data-btn').disabled = true;
    document.getElementById('data-table-container').style.display = 'none';
}

// Display data in table based on city, university, and college
function displayData(city, university, college) {
    const tbody = document.getElementById('data-body');
    tbody.innerHTML = '';

    // Debugging: Check the selected values
    console.log("City:", city);
    console.log("University:", university);
    console.log("College:", college);

    if (city && university && college && data[city] && data[city][university] && data[city][university][college]) {
        console.log("Data available:", data[city][university][college]); // Debugging: Check if data is available
        
        data[city][university][college].forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.department}</td>
                
                <td>${entry.online !== "***" ? parseFloat(entry.online).toFixed(1) : entry.online}</td>
                <td>${entry.parallel !== "***" ? parseFloat(entry.parallel).toFixed(1) : entry.parallel}</td>
                <td>${entry.evening !== "***" ? parseFloat(entry.evening).toFixed(1) : entry.evening}</td>

             
            `;
            tbody.appendChild(row);
        });
        document.getElementById('data-table-container').style.display = 'block';
    } else {
        document.getElementById('data-table-container').style.display = 'none';
        console.log("No data available for the selected filters."); // Debugging: No data available message
    }
}


// Event listener for button click
document.getElementById('show-data-btn').addEventListener('click', function() {
    const selectedUniversity = document.getElementById('university-select').value;
    if (selectedUniversity) {
        showNotification(` ${document.querySelector(`#university-select option[value="${selectedUniversity}"]`).textContent}`);
    }
    displayData(selectedUniversity);
});

// Event listeners
document.getElementById('city-select').addEventListener('change', function() {
    const selectedCity = this.value;
    populateUniversities(selectedCity);
});

document.getElementById('university-select').addEventListener('change', function() {
    const selectedCity = document.getElementById('city-select').value;
    const selectedUniversity = this.value;
    populateColleges(selectedCity, selectedUniversity);
});

document.getElementById('college-select').addEventListener('change', function() {
    const selectedCity = document.getElementById('city-select').value;
    const selectedUniversity = document.getElementById('university-select').value;
    const selectedCollege = this.value;
    document.getElementById('show-data-btn').disabled = !(selectedCity && selectedUniversity && selectedCollege);
});

document.getElementById('show-data-btn').addEventListener('click', function() {
    const selectedCity = document.getElementById('city-select').value;
    const selectedUniversity = document.getElementById('university-select').value;
    const selectedCollege = document.getElementById('college-select').value;
    displayData(selectedCity, selectedUniversity, selectedCollege);
});



const menuButton = document.getElementById('menu-button');
const sideMenu = document.getElementById('side-menu');

// فتح القائمة الجانبية عند الضغط على زر القائمة
menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    menuButton.classList.toggle('clicked'); // إضافة أو إزالة الفئة لإحداث الحركة
});

// إغلاق القائمة الجانبية عند النقر في أي مكان داخل الموقع
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && e.target !== menuButton) {
        sideMenu.classList.remove('open');
        menuButton.classList.remove('clicked'); // إزالة الفئة عند إغلاق القائمة
    }
});

    // دالة لفتح صفحات الويب عند النقر على أزرار القائمة
    function openPage(url) {
        window.open(url, '_blank');
    }

    // استماع لحدث النقر على أزرار القائمة وفتح الصفحات المناسبة
    sideMenu.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const url = button.dataset.url;
            if (url) {
                openPage(url);
            }
        });
 

 });
function openPage(url) {
    window.location.href = url;
}


