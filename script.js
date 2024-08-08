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


 const icon = document.getElementById('grade-icon');
    icon.classList.add('rotate-scale');
 // Remove the class after the animation to reset it for future clicks
    setTimeout(() => {
        icon.classList.remove('rotate-scale');
    }, 1); // Duration should match the transition time


    displayData(selectedCity, selectedUniversity, selectedCollege);
    document.getElementById('grade-popup').style.display = 'none';
});



// Data for Erbil
const data = {
    "erbil": {
"جامعة هولير الطبية": {
        "كلية الطب": [
            {
                "department": "طب عام",
                "evening": "***",
                "parallel": "97.139",
                "online": "97.837"
            },
            {
                "department": "طب اسنان",
                "evening": "***",
                "parallel": "96.333",
                "online": "96.667"
            },
            {
                "department": "صيدلة",
                "evening": "***",
                "parallel": "95.667",
                "online": "96.077"
            }
        ],
        " كلية التمريض": [
            {
                "department": "تمريض",
                "evening": "***",
                "parallel": "91.281",
                "online": "92.8"
            }
        ],
        "كلية التمريض": [
            {
                "department": "توليد",
                "evening": "***",
                "parallel": "75.143",
                "online": "81.565"
            }
        ],
        "كلية العلوم الصحية": [
            {
                "department": "مايكروبايلوجي طبي",
                "evening": "***",
                "parallel": "95.429",
                "online": "94.571"
            },
            {
                "department": "كيمياء سريرية",
                "evening": "***",
                "parallel": "89.429",
                "online": "91.66"
            },
            {
                "department": "علاج طبيعي",
                "evening": "***",
                "parallel": "87.649",
                "online": "89.4"
            },
            {
                "department": "صحة المجتمع",
                "evening": "***",
                "parallel": "72.667",
                "online": "78.857"
            },
            {
                "department": "التغذية والحميات",
                "evening": "***",
                "parallel": "70.459",
                "online": "75.2"
            }
        ]
    },
    "جامعة صلاح الدين": {
        "كلية الطب": [
            {
                "department": "طب بيطري",
                "evening": "***",
                "parallel": "88.013",
                "online": "79.143"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "معماري",
                "evening": "***",
                "parallel": "95.849",
                "online": "94.56"
            },
            {
                "department": "كومبيوتر",
                "evening": "***",
                "parallel": "95.2",
                "online": "94.36"
            },
            {
                "department": "مدني",
                "evening": "***",
                "parallel": "89.067",
                "online": "90.88"
            },
            {
                "department": "كيمياء وبتروكيمياء",
                "evening": "***",
                "parallel": "82.932",
                "online": "86.861"
            },
            {
                "department": "كهرباء",
                "evening": "***",
                "parallel": "79.466",
                "online": "81.989"
            },
            {
                "department": "طيران",
                "evening": "***",
                "parallel": "88",
                "online": "88"
            },
            {
                "department": "ميكانيك وميكاترونك",
                "evening": "***",
                "parallel": "80.6",
                "online": "79.433"
            },
            {
                "department": "مساح",
                "evening": "***",
                "parallel": "85.52",
                "online": "79.732"
            },
            {
                "department": "مصادر المياه",
                "evening": "***",
                "parallel": "95.72",
                "online": "80.292"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايولوجي طبي",
                "evening": "***",
                "parallel": "88.013",
                "online": "89.667"
            },
            {
                "department": "بايولوجي عام",
                "evening": "***",
                "parallel": "81.2",
                "online": "85.9"
            },
            {
                "department": "كيمياء",
                "evening": "***",
                "parallel": "78.281",
                "online": "80.814"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "***",
                "parallel": "78.281",
                "online": "83.254"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "***",
                "parallel": "76.936",
                "online": "80.5"
            },
            {
                "department": "فيزياء طبي",
                "evening": "***",
                "parallel": "74.489",
                "online": "79"
            },
            {
                "department": "فيزياء عام",
                "evening": "***",
                "parallel": "66.257",
                "online": "71.5"
            },
            {
                "department": "النفط والأرض",
                "evening": "***",
                "parallel": "59.701",
                "online": "62.947"
            },
            {
                "department": "رياضيات",
                "evening": "***",
                "parallel": "57.35",
                "online": "62.806"
            },
            {
                "department": "صحة البيئة",
                "evening": "***",
                "parallel": "58.013",
                "online": "63.164"
            }
        ],
        "كلية الهندسة الزراعية": [
            {
                "department": "كافة الاقسام",
                "evening": "***",
                "parallel": "53.538",
                "online": "58.386"
            }
        ],
        "كلية العلوم السياسية": [
            {
                "department": "سياسة دبلوماسية وخارجية",
                "evening": "***",
                "parallel": "59.854",
                "online": "66.644"
            },
            {
                "department": "سياسة العامة",
                "evening": "***",
                "parallel": "58.1",
                "online": "64.1"
            }
        ],
        "كلية القانون": [
            {
                "department": "قانون",
                "evening": "***",
                "parallel": "77.6",
                "online": "81.429"
            }
        ],
        "كلية اللغات": [
            {
                "department": "إنكليزي",
                "evening": "***",
                "parallel": "73.209",
                "online": "77.4"
            },
            {
                "department": "عربي",
                "evening": "***",
                "parallel": "60.8",
                "online": "61.6"
            },
            {
                "department": "كوردى",
                "evening": "***",
                "parallel": "57.9",
                "online": "62.3"
            },
            {
                "department": "فارسي",
                "evening": "***",
                "parallel": "60",
                "online": "65"
            },
            {
                "department": "الماني",
                "evening": "***",
                "parallel": "57.2",
                "online": "62.464"
            },
            {
                "department": "فرنسي",
                "evening": "***",
                "parallel": "58.549",
                "online": "61.997"
            },
            {
                "department": "الترجمة",
                "evening": "***",
                "parallel": "65.8",
                "online": "69.399"
            },
            {
                "department": "تركي",
                "evening": "***",
                "parallel": "65.8",
                "online": "65.2"
            }
        ],
        "كلية الأدارة والاقتصاد": [
            {
                "department": "إدارة الاعمال",
                "evening": "***",
                "parallel": "64.3",
                "online": "69.1"
            },
            {
                "department": "اقتصاد",
                "evening": "***",
                "parallel": "62",
                "online": "64.638"
            },
            {
                "department": "المحاسبة",
                "evening": "***",
                "parallel": "61.8",
                "online": "61.708"
            },
            {
                "department": "علوم مالية ومصرفية",
                "evening": "***",
                "parallel": "57.6",
                "online": "64.033"
            },
            {
                "department": "الإحصاء",
                "evening": "***",
                "parallel": "57.5",
                "online": "65"
            },
            {
                "department": "إدارة المنظمات السياحية",
                "evening": "***",
                "parallel": "58.2",
                "online": "64.4"
            }
        ],
        "كلية التربية": [
            {
                "department": "إنكليزي",
                "evening": "***",
                "parallel": "74.4",
                "online": "80.8"
            },
            {
                "department": "سرياني",
                "evening": "***",
                "parallel": "55",
                "online": "55"
            },
            {
                "department": "تربية خاصة",
                "evening": "***",
                "parallel": "57",
                "online": "62.2"
            },
            {
                "department": "عربي",
                "evening": "***",
                "parallel": "65.01",
                "online": "70.9"
            },
            {
                "department": "كوردى",
                "evening": "***",
                "parallel": "63.5",
                "online": "65.9"
            },
            {
                "department": "رياضيات",
                "evening": "***",
                "parallel": "60",
                "online": "61.489"
            },
            {
                "department": "كيمياء",
                "evening": "***",
                "parallel": "63.6",
                "online": "68.5"
            },
            {
                "department": "فيزياء",
                "evening": "***",
                "parallel": "61.427",
                "online": "62.381"
            },
            {
                "department": "ارشاد تربوي ونفسي",
                "evening": "***",
                "parallel": "58.2",
                "online": "62.2"
            },
            {
                "department": "احياء",
                "evening": "***",
                "parallel": "66.137",
                "online": "72.5"
            }
        ],

        "كلية التربية الاساس": [
            {
                "department": "علوم عامة",
                "evening": "***",
                "parallel": "62.506",
                "online": "62.963"
            },
            {
                "department": "علوم مجتمعات",
                "evening": "60.704",
                "parallel": "63.4",
                "online": "67.3"
            },
            {
                "department": "عربي",
                "evening": "59.3",
                "parallel": "62.6",
                "online": "67.295"
            },
            {
                "department": "كوردى",
                "evening": "60.5",
                "parallel": "62.3",
                "online": "61.4"
            },
            
               {
                "department": "إنكليزي",
                "evening": "66.5",
                "parallel": "70.121",
                "online": "75.02"
            },
            
            
            {
                "department": "رياضيات",
                "evening": "***",
                "parallel": "58.165",
                "online": "63.107"
            },
            {
                "department": "روضة أطفال",
                "evening": "57.614",
                "parallel": "60.025",
                "online": "61.6"
            }
        ],
        "كلية الاَداب": [
            {
                "department": "تاريخ",
                "evening": "***",
                "parallel": "58.9",
                "online": "64.5"
            },
            {
                "department": "جغرافيا",
                "evening": "***",
                "parallel": "57.939",
                "online": "64.414"
            },
            {
                "department": "اعلام",
                "evening": "***",
                "parallel": "57.4",
                "online": "61.6"
            },
            {
                "department": "علم النفس",
                "evening": "***",
                "parallel": "58",
                "online": "62.8"
            },
            {
                "department": "اَثار",
                "evening": "***",
                "parallel": "60",
                "online": "69.1"
            },
            {
                "department": "علم الاجتماع",
                "evening": "***",
                "parallel": "58.4",
                "online": "63"
            },
            {
                "department": "فلسفة",
                "evening": "***",
                "parallel": "60",
                "online": "63.789"
            },
            {
                "department": "الخدمة الاجتماعية",
                "evening": "***",
                "parallel": "60",
                "online": "65"
            }
        ],
        "كلية التربية شقلاوة": [
            {
                "department": "إنكليزي",
                "evening": "***",
                "parallel": "68",
                "online": "72.2"
            },
            {
                "department": "احياء",
                "evening": "***",
                "parallel": "60.63",
                "online": "64.138"
            },
            {
                "department": "فيزياء",
                "evening": "***",
                "parallel": "58.465",
                "online": "64.6"
            },
            {
                "department": "عربي",
                "evening": "57.9",
                "parallel": "57.791",
                "online": "61.7"
            },
            {
                "department": "كوردى",
                "evening": "57.492",
                "parallel": "57.5",
                "online": "62.491"
            }
        ]
    },
    "جامعة أربيل التقنية": {
        "كلية الصحة الطبية": [
            {
                "department": "تحليلات مرضية",
                "evening": "***",
                "parallel": "90",
                "online": "91.436"
            },
            {
                "department": "علاج طبيعي",
                "evening": "***",
                "parallel": "78.115",
                "online": "84"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "أنظمة المعلومات",
                "evening": "***",
                "parallel": "84.797",
                "online": "88.76"
            },
            {
                "department": "مدني",
                "evening": "***",
                "parallel": "81.001",
                "online": "85.92"
            },
            {
                "department": "الطرق والنقل",
                "evening": "***",
                "parallel": "98.4",
                "online": "79.307"
            },
            {
                "department": "الطاقة",
                "evening": "***",
                "parallel": "80",
                "online": "79.733"
            }
        ],
        "الكلية التكنولوجيا": [
            {
                "department": "المعلومات والأتصالات",
                "evening": "***",
                "parallel": "64.924",
                "online": "69.535"
            },
            {
                "department": "البترول",
                "evening": "***",
                "parallel": "58",
                "online": "58.343"
            },
            {
                "department": "معدات البناء",
                "evening": "***",
                "parallel": "57.959",
                "online": "58.802"
            },
            {
                "department": "مساح",
                "evening": "***",
                "parallel": "57.092",
                "online": "58.5"
            },
            {
                "department": "الطرق والنقل",
                "evening": "***",
                "parallel": "57.245",
                "online": "59.3"
            },
            {
                "department": "التعدين",
                "evening": "***",
                "parallel": "55.183",
                "online": "60.3"
            },
            {
                "department": "تقنية السيارات",
                "evening": "***",
                "parallel": "56.194",
                "online": "60.6"
            },
            {
                "department": "ميكانيك وطاقة",
                "evening": "***",
                "parallel": "56.2",
                "online": "59.884"
            },
            {
                "department": "صناعة السيارات",
                "evening": "***",
                "parallel": "55.492",
                "online": "61.725"
            }
        ],
        "الكلية التقنية شقلاوة": [
            {
                "department": "تمريض دبلوم",
                "evening": "68.789",
                "parallel": "72.571",
                "online": "76.286"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "66.885",
                "parallel": "70.286",
                "online": "73.714"
            },
            {
                "department": "بيطري دبلوم",
                "evening": "58.857",
                "parallel": "60.557",
                "online": "62"
            },
            {
                "department": " تقنية المعلومات دبلوم",
                "evening": "57.95",
                "parallel": "59.887",
                "online": "61.737"
            },
            {
                "department": "معماري دبلوم",
                "evening": "54.905",
                "parallel": "57.056",
                "online": "57.682"
            },
            {
                "department": "بناء دبلوم",
                "evening": "53.543",
                "parallel": "56.818",
                "online": "58.6"
            },
            {
                "department": "إدارة المعلومات دبلوم",
                "evening": "54.245",
                "parallel": "55.659",
                "online": "59.966"
            },
            {
                "department": "إدارة السياحة دبلوم",
                "evening": "53.712",
                "parallel": "54.435",
                "online": "60"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "56.547",
                "parallel": "57.793",
                "online": "58.273"
            }
        ],
        "كلية الاعمال": [
            {
                "department": "إدارة الاعمال",
                "evening": "62.6",
                "parallel": "62.2",
                "online": "65.9"
            },
            {
                "department": "المحاسبة",
                "evening": "***",
                "parallel": "60.853",
                "online": "64.759"
            },
            {
                "department": "التسويق الدولي",
                "evening": "57.22",
                "parallel": "59.367",
                "online": "62.702"
            },
            {
                "department": "اعلام",
                "evening": "58.2",
                "parallel": "57.837",
                "online": "62.8"
            }
        ],
        "المعهد التقني الطبي": [
            {
                "department": "صيدلة",
                "evening": "81.24",
                "parallel": "84.462",
                "online": "85.945"
            },
            {
                "department": "التمريض ",
                "evening": "77.429",
                "parallel": "78.974",
                "online": "81.429"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "72.857",
                "parallel": "74.859",
                "online": "77.752"
            },
            {
                "department": "تخدير",
                "evening": "***",
                "parallel": "73.049",
                "online": "76.969"
            },
            {
                "department": "مساعد طبيب اسنان",
                "evening": "***",
                "parallel": "71.209",
                "online": "74.395"
            },
            {
                "department": "فحص العيون",
                "evening": "***",
                "parallel": "70.286",
                "online": "72"
            },
            {
                "department": "أشعة",
                "evening": "***",
                "parallel": "69.488",
                "online": "71.225"
            },
            {
                "department": "نسائية وتوليد",
                "evening": "65.714",
                "parallel": "67.378",
                "online": "69.049"
            }
        ],
        "المعهد التقني للأعمال": [
            {
                "department": "إدارة القوانين",
                "evening": "57.821",
                "parallel": "59.788",
                "online": "61,6"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "57.9",
                "parallel": "59",
                "online": "61.58"
            },
            {
                "department": "تقني ترجمة",
                "evening": "56.786",
                "parallel": "59.224",
                "online": "59.2"
            },
            {
                "department": "المحاسبة",
                "evening": "56.796",
                "parallel": "58.746",
                "online": "59"
            },
            {
                "department": "إدارة التسويق",
                "evening": "55.504",
                "parallel": "57.918",
                "online": "58"
            },
            {
                "department": "إدارة السياحة ",
                "evening": "53.573",
                "parallel": "56.016",
                "online": "57.8"
            },
            {
                "department": "اعلام",
                "evening": "55.069",
                "parallel": "57.678",
                "online": "57.2"
            },
            {
                "department": "معلومات المكتبات",
                "evening": "53.6",
                "parallel": "56.282",
                "online": "57.078"
            },
            {
                "department": "أنظمة المعلومات الإدارية",
                "evening": "54.866",
                "parallel": "57.717",
                "online": "57"
            }
        ],
        "المعهد التقني كويه": [
            {
                "department": "التمريض ",
                "evening": "65.501",
                "parallel": "69.234",
                "online": "73.129"
            },
            {
                "department": "التمريض تةقتةق",
                "evening": "64.857",
                "parallel": "67.255",
                "online": "69.714"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "64",
                "parallel": "65.449",
                "online": "68.847"
            },
            {
                "department": "تحليلات مرضية تةقتةق",
                "evening": "63.143",
                "parallel": "65.143",
                "online": "66.969"
            },
            {
                "department": "تقنية النفط",
                "evening": "54.394",
                "parallel": "56.19",
                "online": "64.717"
            },
            {
                "department": "نسائية وتوليد",
                "evening": "60.286",
                "parallel": "61.76",
                "online": "63.173"
            },
            {
                "department": "إدارة سياحية",
                "evening": "54.2",
                "parallel": "53.722",
                "online": "62.504"
            },
            {
                "department": "إدارة الاعمل تةقتةق",
                "evening": "54.069",
                "parallel": "55.3",
                "online": "59.3"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "54.053",
                "parallel": "56.7",
                "online": "59.2"
            },
            {
                "department": "تقنية النفط الكيميائي",
                "evening": "53.78",
                "parallel": "57.2",
                "online": "58"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "55.794",
                "parallel": "57.866",
                "online": "57.1"
            }
        ],
        "الكلية التقنية سوران": [
            {
                "department": "التمريض",
                "evening": "65.865",
                "parallel": "68.283",
                "online": "72.628"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "63.36",
                "parallel": "65.953",
                "online": "68.571"
            },
            {
                "department": "نسائية وتوليد",
                "evening": "59.807",
                "parallel": "61.562",
                "online": "63.155"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "53.8",
                "parallel": "56.571",
                "online": "59"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "55.581",
                "parallel": "58.223",
                "online": "58.5"
            }
        ],
        "المعهد التقني ميركةسور": [
            {
                "department": "إدارة الاعمال",
                "evening": "54",
                "parallel": "54.273",
                "online": "60"
            },
            {
                "department": "تقني ترجمة",
                "evening": "53.649",
                "parallel": "53.8",
                "online": "57.8"
            }
        ],
        "المعهد التقني جومان": [
            {
                "department": "إدارة المالية",
                "evening": "***",
                "parallel": "***",
                "online": "***"
            },
            {
                "department": "إدارة الجمارك",
                "evening": "***",
                "parallel": "54.6",
                "online": "63.1"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "***",
                "parallel": "54.461",
                "online": "60"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "***",
                "parallel": "55.73",
                "online": "58.141"
            }
        ],
        "المعهد التقني خبات": [
            {
                "department": "انتاج النباتات الطبية",
                "evening": "52.4",
                "parallel": "54.343",
                "online": "60"
            },
            {
                "department": "حماية النبات",
                "evening": "51.1",
                "parallel": "55.342",
                "online": "60"
            },
            {
                "department": "امن الغذاء والجودة",
                "evening": "53.36",
                "parallel": "54.281",
                "online": "59.08"
            },
            {
                "department": "إدارة القوانين",
                "evening": "55.35",
                "parallel": "56.976",
                "online": "58.983"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "54.596",
                "parallel": "57.3",
                "online": "58.553"
            }
        ]
    },
    "جامعة كوية": {
        "كلية الطب": [
            {
                "department": "طب عام",
                "evening": "***",
                "parallel": "96.87",
                "online": "97.333"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "معماري",
                "evening": "***",
                "parallel": "92.08",
                "online": "92.8"
            },
            {
                "department": "كومبيوتر",
                "evening": "***",
                "parallel": "91.44",
                "online": "92.467"
            },
            {
                "department": "مدني",
                "evening": "***",
                "parallel": "80.733",
                "online": "85.327"
            },
            {
                "department": "نفط",
                "evening": "***",
                "parallel": "85.507",
                "online": "79.36"
            },
            {
                "department": "كيمياويات",
                "evening": "***",
                "parallel": "80",
                "online": "81.787"
            },
            {
                "department": "جيوتكنيك",
                "evening": "***",
                "parallel": "80",
                "online": "80"
            },
            {
                "department": "الصناعة",
                "evening": "***",
                "parallel": "80",
                "online": "80"
            }
        ],
        "كلية العلوم الصحية": [
            {
                "department": "مايكروبايلوجي طبي",
                "evening": "***",
                "parallel": "91.667",
                "online": "92.571"
            },
            {
                "department": "بايولوجي",
                "evening": "***",
                "parallel": "73.984",
                "online": "80.133"
            },
            {
                "department": "كيمياء",
                "evening": "***",
                "parallel": "63.984",
                "online": "67.78"
            },
            {
                "department": "علم النفس السريري",
                "evening": "***",
                "parallel": "61.196",
                "online": "65.965"
            },
            {
                "department": "فيزياء",
                "evening": "***",
                "parallel": "66.9",
                "online": "64.912"
            },
            {
                "department": "رياضيات",
                "evening": "***",
                "parallel": "60.051",
                "online": "65.3"
            }
        ],
        "كلية العلوم الأنسانية": [
            {
                "department": "قانون",
                "evening": "***",
                "parallel": "68.6",
                "online": "73.5"
            },
            {
                "department": "إنكليزي",
                "evening": "57.127",
                "parallel": "62.66",
                "online": "66.3"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "55.853",
                "parallel": "59.393",
                "online": "63.541"
            },
            {
                "department": "المحاسبة",
                "evening": "***",
                "parallel": "57.962",
                "online": "64.2"
            }
        ],
        "كلية التربية": [
            {
                "department": "إنكليزي",
                "evening": "57.7",
                "parallel": "59.1",
                "online": "69.8"
            },
            {
                "department": "عربي",
                "evening": "58",
                "parallel": "59.9",
                "online": "63.819"
            },
            {
                "department": "تاريخ",
                "evening": "53.706",
                "parallel": "62",
                "online": "65.9"
            },
            {
                "department": "كوردي",
                "evening": "60",
                "parallel": "58.982",
                "online": "61.2"
            },
            {
                "department": "جغرافيا",
                "evening": "54.105",
                "parallel": "63.1",
                "online": "65.4"
            },
            {
                "department": "تربية علم النفس",
                "evening": "54.06",
                "parallel": "59",
                "online": "63.883"
            }
        ]
    },
    "جامعة سوران": {
        "كلية الهندسة": [
            {
                "department": "مدني",
                "evening": "***",
                "parallel": "80.2",
                "online": "85.16"
            },
            {
                "department": "نفط",
                "evening": "***",
                "parallel": "80",
                "online": "80.36"
            },
            {
                "department": "كيمياء",
                "evening": "***",
                "parallel": "83.6",
                "online": "80.72"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايولوجي",
                "evening": "***",
                "parallel": "76.167",
                "online": "81.758"
            },
            {
                "department": "كيمياء",
                "evening": "***",
                "parallel": "68.7",
                "online": "73.832"
            },
            {
                "department": "كومبيوتر",
                "evening": "***",
                "parallel": "66.534",
                "online": "72.167"
            },
            {
                "department": "جيولوجي نفط",
                "evening": "***",
                "parallel": "58.9",
                "online": "65.048"
            },
            {
                "department": "رياضيات",
                "evening": "***",
                "parallel": "58.477",
                "online": "65.1"
            }
        ],
        "كلية الاَداب": [
            {
                "department": "إنكليزي",
                "evening": "59.05",
                "parallel": "59.295",
                "online": "70"
            },
            {
                "department": "عربي",
                "evening": "57.6",
                "parallel": "58.2",
                "online": "64.155"
            },
            {
                "department": "تاريخ",
                "evening": "***",
                "parallel": "58.901",
                "online": "66.6"
            },
            {
                "department": "كوردي",
                "evening": "***",
                "parallel": "60.2",
                "online": "61.306"
            },
            {
                "department": "جغرافيا",
                "evening": "58.215",
                "parallel": "59.4",
                "online": "64.519"
            },
            {
                "department": "علم النفس",
                "evening": "56.9",
                "parallel": "58.4",
                "online": "63.774"
            },
            {
                "department": "علم الاجتماع",
                "evening": "55.9",
                "parallel": "58.4",
                "online": "62"
            }
        ],
        "كلية التربية": [
            {
                "department": "إنكليزي",
                "evening": "58.9",
                "parallel": "61.49",
                "online": "70.1"
            },
            {
                "department": "العلوم العامة",
                "evening": "***",
                "parallel": "60.36",
                "online": "62.917"
            },
            {
                "department": "الاجتماعيات",
                "evening": "58.6",
                "parallel": "60.1",
                "online": "65"
            },
            {
                "department": "كوردى",
                "evening": "57.8",
                "parallel": "57.1",
                "online": "62.537"
            },
            {
                "department": "رياضيات",
                "evening": "***",
                "parallel": "60.198",
                "online": "65.997"
            }
        ],
        "كلية الاَدارة": [
            {
                "department": "إدارة الاعمال",
                "evening": "***",
                "parallel": "58.169",
                "online": "62.029"
            },
            {
                "department": "المحاسبة",
                "evening": "***",
                "parallel": "57.334",
                "online": "61.8"
            }
        ],
        "كلية القانون والسياسة": [
            {
                "department": "القانون",
                "evening": "***",
                "parallel": "70.703",
                "online": "75.7"
            },
            {
                "department": "علاقات دولية",
                "evening": "***",
                "parallel": "59.949",
                "online": "61"
            }
        ]
    

    } 
    },

 "sul": {











},
 "duhok": {










},
 "halabja": {








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

document.getElementById('grade-icon').addEventListener('click', function() {
    this.classList.toggle('rotate-scale');
   
});
















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


