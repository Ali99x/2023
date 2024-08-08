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



// Show the grade input popup
document.getElementById('grade-icon').addEventListener('click', () => {
    document.getElementById('grade-popup').style.display = 'block';
});

// Save grade and hide the popup
document.getElementById('save-grade-btn').addEventListener('click', () => {
    const selectedCity = document.getElementById('city-select').value;
    const selectedUniversity = document.getElementById('university-select').value;
    const selectedCollege = document.getElementById('college-select').value;

    displayData(selectedCity, selectedUniversity, selectedCollege);
    document.getElementById('grade-popup').style.display = 'none';
});



// Data for Erbil
const data = {
    "erbil": {
        "جامعة هولير الطبية": {
            "الطب": [
                { department: 'طب عام', evening: 99, parallel: 97.139, online: 97.837 },
                { department: 'طب اسنان', evening: '-', parallel: 96.333, online: 96.667 },
                // ... (remaining data)
                                { "department": "صيدلة", "evening": "-", "parallel": 95.7, "online": 96.1 }

            ],
            "التمريض": [
                { department: 'تمريض', evening: '-', parallel: 91.281, online: 92.8 },
                // ... (remaining data)
                                { "department": "توليد", "evening": "-", "parallel": 75.1, "online": 81.6 }

            ],
            
            
            
            "العلوم الصحية": [
                { "department": "مايكروبايلوجي طبي", "evening": "-", "parallel": 95.4, "online": 94.6 },
                { "department": "كيمياء حياتية سريرية", "evening": "-", "parallel": 89.4, "online": 91.7 },
                { "department": "علاج طبيعي", "evening": "-", "parallel": 87.6, "online": 89.4 },
                { "department": "صحة المجتمع", "evening": "-", "parallel": 72.7, "online": 78.9 },
                { "department": "التغذية والحميات", "evening": "-", "parallel": 70.5, "online": 75.2 }
            ],
            
        },
        "جامعة صلاح الدين": {
            "كلية الطب": [
                { department: 'طب بيطري', evening: '-', parallel: 88.013, online: 79.143 },
                // ... (remaining data)
                
            ],
            "الهندسة": [
                { department: 'معماري', evening: '-', parallel: 95.849, online: 94.56 },
                // ... (remaining data)
                  { "department": "برمجة", "evening": "-", "parallel": 95.2, "online": 94.4 },
                { "department": "مدني", "evening": "-", "parallel": 89.1, "online": 90.9 },
                { "department": "كيمياء وبتروكيمياء", "evening": "-", "parallel": 82.9, "online": 86.9 },
                { "department": "كهرباء", "evening": "-", "parallel": 79.5, "online": 82.0 },
                { "department": "طيران", "evening": "-", "parallel": 88.0, "online": 88.0 },
                { "department": "ميكانيك وميكاترونيك", "evening": "-", "parallel": 80.6, "online": 79.4 },
                { "department": "مساح", "evening": "-", "parallel": 85.5, "online": 79.7 },
                { "department": "مصادر المياه", "evening": "-", "parallel": 95.7, "online": 80.3 }
                
            ]
        }
    }
};




document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('tooltip');

    // Show the tooltip after 5 seconds
    setTimeout(() => {
        tooltip.classList.add('show');
        
        // Hide the tooltip after 3 seconds
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 3000);
    }, 5000);
});












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

    const inputGrade = parseFloat(document.getElementById('grade-input').value);

    if (city && university && college && data[city] && data[city][university] && data[city][university][college]) {
        data[city][university][college].forEach(entry => {
            const row = document.createElement('tr');

            // Check if the input grade is less than the department's grade
            const onlineGrade = entry.online !== "-" ? parseFloat(entry.online) : null;
            const parallelGrade = entry.parallel !== "-" ? parseFloat(entry.parallel) : null;
            const eveningGrade = entry.evening !== "-" ? parseFloat(entry.evening) : null;

            // Apply highlight class based on comparison
            const onlineClass = (onlineGrade && inputGrade < onlineGrade) ? 'highlight-red' : '';
            const parallelClass = (parallelGrade && inputGrade < parallelGrade) ? 'highlight-red' : '';
            const eveningClass = (eveningGrade && inputGrade < eveningGrade) ? 'highlight-red' : '';

            row.innerHTML = `
                <td>${entry.department}</td>
                <td class="${onlineClass}">${entry.online !== "-" ? parseFloat(entry.online).toFixed(1) : entry.online}</td>
                <td class="${parallelClass}">${entry.parallel !== "-" ? parseFloat(entry.parallel).toFixed(1) : entry.parallel}</td>
                <td class="${eveningClass}">${entry.evening !== "-" ? parseFloat(entry.evening).toFixed(1) : entry.evening}</td>
            `;
            tbody.appendChild(row);
        });
        document.getElementById('data-table-container').style.display = 'block';
    } else {
        document.getElementById('data-table-container').style.display = 'none';
    }
}


// Event listener for button click
// تعديل الحدث المرتبط بزر عرض البيانات
document.getElementById('show-data-btn').addEventListener('click', function() {
    const selectedCollege = document.getElementById('college-select').value;
    if (selectedCollege) {
        showNotification(selectedCollege);
    }
    const selectedCity = document.getElementById('city-select').value;
    const selectedUniversity = document.getElementById('university-select').value;
    displayData(selectedCity, selectedUniversity, selectedCollege);
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



// script.js
document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    setTimeout(() => {
        overlay.classList.add('show');
    }, 400);

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('show');
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('show');
        }
    });
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



function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 500); // Match the duration of the slideUp animation
    }, 2000); // Display for 2 seconds
}
