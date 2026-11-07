
"use strict";

/* =====================================
   1. EXAM QUESTIONS
===================================== */

const readingPassage = `Exploring Different Places to Stay

When we travel, we can stay in many kinds of places! Some people choose hotels, which are big buildings with lots of rooms where guests can sleep, eat, and have fun. Hotels often have pools and restaurants. Others might stay in cozy cabins in the woods, surrounded by trees and nature, where they can enjoy fresh air and quiet. Some families like to camp in tents, where they can sleep under the stars and hear the sounds of crickets at night. There are also special places called hostels, where travelers from all over the world share rooms and make new friends. No matter where we stay, each place gives us a chance to explore new things and make wonderful memories!`;

const questions = [
  {
    section:"GRAMMAR",icon:"📘",
    instruction:"Choose the correct word or form.",
    text:"_____ you a student? Yes, I am.",
    options:["Are","Is","Am","Be"],answer:0
  },
  {
    section:"GRAMMAR",icon:"📘",
    instruction:"Choose the correct question word.",
    text:"_____ is that man?",
    options:["What","Which","Who","How"],answer:2
  },
  {
    section:"GRAMMAR",icon:"📘",
    instruction:"Choose the correct negative form.",
    text:"Is this your passport? No, it _____.",
    options:["isn't","aren't","am not","are"],answer:0
  },
  {
    section:"GRAMMAR",icon:"📘",
    instruction:"Choose the correct form of the verb.",
    text:"I _____ happy to see you.",
    options:["are","am","is","be"],answer:1
  },
  {
    section:"GRAMMAR",icon:"📘",
    instruction:"Choose the correct question word.",
    text:"_____ are you from?",
    options:["What","Which","Where","Who"],answer:2
  },
  {
    section:"GRAMMAR",icon:"📘",
    instruction:"Choose the correct preposition.",
    text:"The bank is _____ the pharmacy and the supermarket.",
    options:["between","near","far away","on"],answer:0
  },
  {
    section:"VOCABULARY • MATCHING",icon:"🧩",
    instruction:"Choose the best response.",
    text:"Hello, how are you?",
    options:["I'm fine, thank you.","Nice to meet you.","You are welcome.","Bye, take care."],answer:0
  },
  {
    section:"VOCABULARY • MATCHING",icon:"🧩",
    instruction:"Choose the best response.",
    text:"Thank you.",
    options:["Bye, take care.","You are welcome.","Friends call me Jo.","I'm fine, thank you."],answer:1
  },
  {
    section:"VOCABULARY • MATCHING",icon:"🧩",
    instruction:"Choose the best response.",
    text:"See you tomorrow.",
    options:["Nice to meet you.","I'm fine, thank you.","Bye, take care.","You are welcome."],answer:2
  },
  {
    section:"VOCABULARY • MATCHING",icon:"🧩",
    instruction:"Choose the best completion.",
    text:"My name is John, but my _____.",
    options:["friends call me Jo.","you are welcome.","nice to meet you.","bye, take care."],answer:0
  },
  {
    section:"VOCABULARY • MATCHING",icon:"🧩",
    instruction:"Choose the correct meaning.",
    text:"Here you are.",
    options:["I'm fine, thank you.","Friends call me Jo.","An expression used when you give something to someone.","Nice to meet you."],answer:2
  },
  {
    section:"VOCABULARY • MATCHING",icon:"🧩",
    instruction:"Choose the best response.",
    text:"This is my friend Omer.",
    options:["Nice to meet you.","You are welcome.","Bye, take care.","I'm fine, thank you."],answer:0
  },
  {
    section:"VOCABULARY • MATCHING",icon:"🧩",
    instruction:"Choose the correct meaning.",
    text:"Have a nice stay.",
    options:["Friends call me Jo.","Bye, take care.","An expression used when you give something to someone.","An expression used to wish someone a good time in a place."],answer:3
  },
  {
    section:"VOCABULARY • FILL IN THE BLANK",icon:"🔤",
    instruction:"Choose from: festival / fill in / reservation / introduce.",
    text:"Let me _____ myself.",
    options:["festival","fill in","reservation","introduce"],answer:3
  },
  {
    section:"VOCABULARY • FILL IN THE BLANK",icon:"🔤",
    instruction:"Choose from: festival / fill in / reservation / introduce.",
    text:"I'd like to make a _____ for one night.",
    options:["festival","fill in","reservation","introduce"],answer:2
  },
  {
    section:"VOCABULARY • FILL IN THE BLANK",icon:"🔤",
    instruction:"Choose from: festival / fill in / reservation / introduce.",
    text:"Please, _____ the form.",
    options:["festival","fill in","reservation","introduce"],answer:1
  },
  {
    section:"VOCABULARY • FILL IN THE BLANK",icon:"🔤",
    instruction:"Choose from: festival / fill in / reservation / introduce.",
    text:"Today we have a big _____ at school.",
    options:["festival","fill in","reservation","introduce"],answer:0
  },
  {
    section:"VOCABULARY • PICTURE WORDS",icon:"🖼️",
    instruction:"Look at the picture symbol and choose the correct word.",
    text:"What does this picture represent?",
    visual:"🏨",
    options:["Hostel","Vacation","Credit card","Directions"],answer:0
  },
  {
    section:"VOCABULARY • PICTURE WORDS",icon:"🖼️",
    instruction:"Look at the picture symbol and choose the correct word.",
    text:"What does this picture represent?",
    visual:"🏝️",
    options:["Hostel","Vacation","Credit card","Directions"],answer:1
  },
  {
    section:"VOCABULARY • PICTURE WORDS",icon:"🖼️",
    instruction:"Look at the picture symbol and choose the correct word.",
    text:"What does this picture represent?",
    visual:"💳",
    options:["Hostel","Vacation","Credit card","Directions"],answer:2
  },
  {
    section:"VOCABULARY • PICTURE WORDS",icon:"🖼️",
    instruction:"Look at the picture symbol and choose the correct word.",
    text:"What does this picture represent?",
    visual:"🧭",
    options:["Hostel","Vacation","Credit card","Directions"],answer:3
  },
  {
    section:"READING",icon:"📖",
    instruction:"Read the passage carefully and choose the best answer.",
    passage:readingPassage,
    text:"Hotels are big _____ with lots of rooms for guests.",
    options:["buildings","cars","schools"],answer:0
  },
  {
    section:"READING",icon:"📖",
    instruction:"Read the passage carefully and choose the best answer.",
    passage:readingPassage,
    text:"In cabins, people can enjoy fresh air and _____.",
    options:["food","music","quiet"],answer:2
  },
  {
    section:"READING",icon:"📖",
    instruction:"Read the passage carefully and choose the best answer.",
    passage:readingPassage,
    text:"Hostels are places where travelers can make new _____.",
    options:["friends","clothes","shoes"],answer:0
  },
  {
    section:"READING",icon:"📖",
    instruction:"Read the passage carefully and choose the best answer.",
    passage:readingPassage,
    text:"In which place do travelers from all over the world share rooms?",
    options:["hostels","cabins","tents"],answer:0
  }
];


/* =====================================
   2. EXAM SETTINGS
===================================== */

const PASS_MARK = 18;
const EXAM_SECONDS = 30 * 60;

let current = 0;
let remaining = EXAM_SECONDS;
let timerId = null;
let submitted = false;

const selectedAnswers = {};

const $ = id => document.getElementById(id);


/* =====================================
   3. BUTTON EVENTS
===================================== */

$("startBtn").addEventListener("click", startExam);

$("studentName").addEventListener("keydown", event => {
    if (event.key === "Enter") startExam();
});

$("studentName").addEventListener("input", () => {
    $("studentName").classList.remove("invalid");
    $("nameHint").textContent = "Enter your full name in English.";
});

$("previousBtn").addEventListener("click", previousQuestion);
$("nextBtn").addEventListener("click", nextQuestion);
$("downloadCertificateBtn").addEventListener("click", downloadCertificate);


/* =====================================
   4. START EXAM
===================================== */

function startExam() {

    const name = $("studentName").value.trim();

    if (!name) {
        $("studentName").classList.add("invalid");
        $("nameHint").textContent =
            "Please enter your name before starting.";

        $("studentName").focus();
        return;
    }

    $("studentName").classList.remove("invalid");

    $("welcome").hidden = true;

    $("exam").style.display = "flex";

    $("studentDisplay").textContent = name;

    renderQuestion();

    updateTimer();

    timerId = setInterval(() => {

        remaining = Math.max(0, remaining - 1);

        updateTimer();

        if (remaining === 0) {
            submitExam(true);
        }

    }, 1000);

}


/* =====================================
   5. TIMER
===================================== */

function updateTimer() {

    const minutes = String(
        Math.floor(remaining / 60)
    ).padStart(2, "0");

    const seconds = String(
        remaining % 60
    ).padStart(2, "0");

    $("time").textContent = `${minutes}:${seconds}`;

    $("timerBox").classList.toggle(
        "urgent",
        remaining <= 300
    );

}


/* =====================================
   6. ANSWERED QUESTIONS
===================================== */

function updateAnsweredCount() {

    $("answeredCount").textContent =
        `Answered: ${Object.keys(selectedAnswers).length} / ${questions.length}`;

}


/* =====================================
   7. DISPLAY QUESTION
===================================== */

function renderQuestion() {

    if (submitted) return;

    const q = questions[current];

    $("qmeta").textContent =
        `QUESTION ${current + 1} OF ${questions.length}`;

    $("questionPosition").textContent =
        `${current + 1} of ${questions.length}`;

    $("sectionTag").textContent = q.section;

    $("sectionIcon").textContent = q.icon;

    $("sectionInstruction").textContent = q.instruction;

    $("qtext").textContent = q.text;

    // Reading passage

    const passage = $("passage");

    passage.hidden = !q.passage;

    passage.textContent = q.passage || "";

    // Picture

    const visual = $("visualCue");

    visual.hidden = !q.visual;

    visual.textContent = q.visual || "";

    // Progress

    $("progress").style.width =
        `${((current + 1) / questions.length) * 100}%`;

    updateAnsweredCount();

    // Answers

    const answersBox = $("answers");

    answersBox.innerHTML = "";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "answer";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        const selected = selectedAnswers[current] === index;

        if (selected) {
            button.classList.add("selected");
        }

        button.setAttribute(
            "aria-pressed",
            selected ? "true" : "false"
        );

        button.addEventListener("click", () => {

            selectedAnswers[current] = index;

            renderQuestion();

        });

        answersBox.appendChild(button);

    });

    $("previousBtn").disabled = current === 0;

    $("nextBtn").textContent =
        current === questions.length - 1
            ? "Submit Exam ✓"
            : "Next Question →";

}


/* =====================================
   8. NEXT QUESTION
===================================== */

function nextQuestion() {

    if (current === questions.length - 1) {

        const unanswered =
            questions.length - Object.keys(selectedAnswers).length;

        const message = unanswered > 0
            ? `You have ${unanswered} unanswered questions. Submit your exam?`
            : "Are you sure you want to submit your exam?";

        if (confirm(message)) {
            submitExam(false);
        }

        return;
    }

    current++;

    renderQuestion();

}


/* =====================================
   9. PREVIOUS QUESTION
===================================== */

function previousQuestion() {

    if (current > 0) {

        current--;

        renderQuestion();

    }

}


/* =====================================
   10. SUBMIT EXAM
===================================== */

function submitExam(timeExpired = false) {

    if (submitted) return;

    submitted = true;

    if (timerId !== null) {

        clearInterval(timerId);

        timerId = null;

    }

    let correct = 0;

    questions.forEach((q, index) => {

        if (selectedAnswers[index] === q.answer) {
            correct++;
        }

    });

    const incorrect = questions.length - correct;

    const passed = correct >= PASS_MARK;

    const percentage = Math.round(
        (correct / questions.length) * 100
    );

    // Hide questions

    $("question-area").hidden = true;

    $("sectionHeading").hidden = true;

    $("result").hidden = false;

    // Result title

    $("resultIcon").textContent =
        passed ? "🎊🏆🎊" : "📘";

    $("resultHeading").textContent =
        passed ? "مبروك يا بطل!" : "Keep Practicing!";

    $("result").classList.toggle(
        "celebrated",
        passed
    );

    // Status

    $("resultStatus").textContent =
        passed ? "PASSED" : "NOT PASSED";

    $("resultStatus").className =
        passed
            ? "result-status passed"
            : "result-status failed";

    // Student

    $("resultStudent").textContent =
        `Student: ${$("studentName").value.trim()}`;

    // Score

    $("score").textContent =
        `${correct} / ${questions.length}`;

    $("correctCount").textContent = correct;

    $("wrongCount").textContent = incorrect;

    $("percentage").textContent = `${percentage}%`;

    // Message

    $("result-note").textContent =
        timeExpired
            ? "Time is over. Your exam was submitted automatically."
            : passed
                ? "Well done! You achieved the required passing score."
                : `You need ${PASS_MARK} correct answers to pass. Keep practicing!`;

    // Certificate

    $("certificateArea").hidden = !passed;

    if (passed) {

        $("certificateStudent").textContent =
            $("studentName").value.trim();

        $("certificateScore").textContent = correct;

        $("certificatePercentage").textContent =
            `${percentage}%`;

        $("certificateDate").textContent =
            new Date().toLocaleDateString("en-GB");

        showCelebration();

    } else {

        $("celebrationLayer").hidden = true;

        $("celebrationLayer").innerHTML = "";

    }

    // Review

    buildAnswerReview();

}


/* =====================================
   11. REVIEW ANSWERS
===================================== */

function buildAnswerReview() {

    const review = $("reviewList");

    review.innerHTML = "";

    questions.forEach((q, index) => {

        const row = document.createElement("div");

        row.className = "review-item";

        const prompt = document.createElement("strong");

        prompt.textContent =
            `${index + 1}. ${q.text}`;

        const yourAnswer = document.createElement("span");

        const chosen = selectedAnswers[index];

        yourAnswer.textContent =
            chosen === undefined
                ? "Your answer: Not answered"
                : `Your answer: ${q.options[chosen]}`;

        const correctAnswer = document.createElement("span");

        correctAnswer.textContent =
            `Correct answer: ${q.options[q.answer]}`;

        if (chosen === q.answer) {

            row.classList.add("review-correct");

        } else {

            row.classList.add("review-wrong");

        }

        row.append(
            prompt,
            yourAnswer,
            correctAnswer
        );

        review.appendChild(row);

    });

}


/* =====================================
   12. FIREWORKS
===================================== */

function showCelebration() {

    const layer = $("celebrationLayer");

    const colors = [
        "#ffc928",
        "#ff5b72",
        "#26b58a",
        "#328fe0",
        "#b56bff",
        "#ff9f43"
    ];

    const positions = [
        [16,18],
        [50,12],
        [84,20],
        [25,76],
        [72,72],
        [91,52]
    ];

    layer.innerHTML = "";

    layer.hidden = false;

    positions.forEach(([x,y], burstIndex) => {

        const burst = document.createElement("div");

        burst.className = "firework-burst";

        burst.style.left = `${x}%`;

        burst.style.top = `${y}%`;

        for (let i = 0; i < 18; i++) {

            const spark = document.createElement("span");

            spark.className = "firework-spark";

            spark.style.setProperty(
                "--spark-angle",
                `${i * 20}deg`
            );

            spark.style.setProperty(
                "--spark-color",
                colors[(i + burstIndex) % colors.length]
            );

            spark.style.setProperty(
                "--spark-delay",
                `${((i % 6) * 0.08) + burstIndex * 0.18}s`
            );

            burst.appendChild(spark);

        }

        layer.appendChild(burst);

    });

    setTimeout(() => {

        layer.hidden = true;

        layer.innerHTML = "";

    }, 9000);

}


/* =====================================
   13. CERTIFICATE SVG
===================================== */

function escapeXml(value) {

    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    })[character]);

}


function buildCertificateSvg(studentName, score, percentage, date) {

    const name = escapeXml(studentName);

    const scoreValue = escapeXml(String(score));

    const percentageText = escapeXml(`${percentage}%`);

    const dateText = escapeXml(date);

    return `<?xml version="1.0" encoding="UTF-8"?>

<svg xmlns="http://www.w3.org/2000/svg"
width="1600" height="1100" viewBox="0 0 1600 1100">

<rect width="1600" height="1100" fill="#fffdf6"/>

<path d="M0 0H1600V78Q1200 140 800 76Q350 10 0 95Z"
fill="#0b3475"/>

<path d="M0 91Q420 4 800 90T1600 78"
fill="none" stroke="#e7b53d" stroke-width="10"/>

<path d="M0 1030Q420 1090 800 1025T1600 1030V1100H0Z"
fill="#0b3475"/>

<path d="M0 1020Q420 1080 800 1015T1600 1020"
fill="none" stroke="#e7b53d" stroke-width="10"/>

<rect x="28" y="28" width="1544" height="1044"
rx="34" fill="none" stroke="#c98e1b" stroke-width="7"/>

<rect x="45" y="45" width="1510" height="1010"
rx="25" fill="none" stroke="#f1d58a" stroke-width="3"/>

<g stroke="#e9ad2c" stroke-width="7" stroke-linecap="round">
<path d="M160 170v-48m0 48l-38-29m38 29l39-31m-39 31l-12 46m12-46l37 34"/>
<path d="M1430 175v-48m0 48l-38-29m38 29l39-31m-39 31l-12 46m12-46l37 34"/>
</g>

<g fill="#eab331">
<path d="M800 70l13 28 31 3-24 20 7 30-27-16-27 16 7-30-24-20 31-3z"/>
</g>

<rect x="325" y="112" width="950" height="150"
rx="70" fill="#0b3475" stroke="#e3b13c" stroke-width="12"/>

<text x="800" y="210" text-anchor="middle"
direction="rtl" unicode-bidi="plaintext"
font-family="Tahoma,Arial,sans-serif"
font-size="72" font-weight="bold" fill="#fff0b3">
شهادة إتمام الوحدة
</text>

<path d="M515 250Q800 315 1085 250L1055 337Q800 392 545 337Z"
fill="#efbd4b" stroke="#b77b16" stroke-width="6"/>

<text x="800" y="323" text-anchor="middle"
direction="rtl" unicode-bidi="plaintext"
font-family="Tahoma,Arial,sans-serif"
font-size="61" font-weight="bold" fill="#0b3475">
بنجاح
</text>

<text x="800" y="420" text-anchor="middle"
direction="rtl" unicode-bidi="plaintext"
font-family="Tahoma,Arial,sans-serif"
font-size="33" fill="#244674">
مقدمة من
</text>

<text x="800" y="480" text-anchor="middle"
font-family="Georgia,serif"
font-size="47" font-weight="bold" fill="#092f70">
Mr Ibrahiem Mohamed Abdelahdy
</text>

<text x="800" y="548" text-anchor="middle"
direction="rtl" unicode-bidi="plaintext"
font-family="Tahoma,Arial,sans-serif"
font-size="36" font-weight="bold" fill="#173d77">
للطالب / الطالبة
</text>

<rect x="300" y="570" width="1000" height="100"
rx="25" fill="#fff8e8" stroke="#d69a25" stroke-width="7"/>

<text x="800" y="635" text-anchor="middle"
direction="rtl" unicode-bidi="plaintext"
font-family="Tahoma,Arial,sans-serif"
font-size="46" font-weight="bold" fill="#092f70">
${name}
</text>

<text x="800" y="735" text-anchor="middle"
direction="rtl" unicode-bidi="plaintext"
font-family="Tahoma,Arial,sans-serif"
font-size="39" font-weight="bold" fill="#173d77">
لتفوقه واجتيازه اختبار الوحدة الأولى
</text>

<text x="800" y="790" text-anchor="middle"
direction="rtl" unicode-bidi="plaintext"
font-family="Tahoma,Arial,sans-serif"
font-size="29" font-weight="bold" fill="#654313">
الدرجة: ${scoreValue} من ${questions.length}
</text>

<rect x="535" y="820" width="530" height="130"
rx="25" fill="#0b3475" stroke="#e2b244" stroke-width="9"/>

<text x="800" y="868" text-anchor="middle"
direction="rtl" unicode-bidi="plaintext"
font-family="Tahoma,Arial,sans-serif"
font-size="27" font-weight="bold" fill="#ffe8a3">
بنسبة مئوية 
</text>

<text x="800" y="925" text-anchor="middle"
direction="ltr" font-family="Arial,sans-serif"
font-size="57" font-weight="bold" fill="#ffffff">
${percentageText}
</text>

<text x="740" y="985" text-anchor="middle"
direction="rtl" unicode-bidi="plaintext"
font-family="Tahoma,Arial,sans-serif"
font-size="30" font-weight="bold" fill="#654313">
مع تمنياتنا له بدوام النجاح والتفوق
</text>

<text x="1330" y="920" text-anchor="middle"
direction="rtl" unicode-bidi="plaintext"
font-family="Tahoma,Arial,sans-serif"
font-size="27" fill="#173d77">
خالص التحيات
</text>

<text x="1330" y="968" text-anchor="middle"
font-family="cursive,Georgia,serif"
font-size="37" font-style="italic" fill="#092f70">
Mr Ibrahiem
</text>

<path d="M1200 980Q1330 999 1460 978"
fill="none" stroke="#092f70" stroke-width="4"/>

<text x="220" y="995" text-anchor="middle"
direction="ltr" font-family="Arial,sans-serif"
font-size="22" fill="#ffffff">
${dateText}
</text>

<g transform="translate(95 660)">
<path d="M50 0H180V105Q175 180 115 193Q55 180 50 105Z"
fill="#efbd4b" stroke="#b77b16" stroke-width="9"/>
<path d="M50 22H20Q-8 22 2 82Q12 130 65 134M180 22H210Q238 22 228 82Q218 130 165 134"
fill="none" stroke="#d69a25" stroke-width="17"/>
<path d="M115 48l15 30 33 4-24 23 6 33-30-16-30 16 6-33-24-23 33-4z"
fill="#fff8d8" stroke="#b77b16" stroke-width="4"/>
<rect x="98" y="193" width="34" height="54" fill="#d99a25"/>
<rect x="63" y="244" width="104" height="24" rx="5" fill="#0b3475" stroke="#d69a25" stroke-width="5"/>
<rect x="40" y="267" width="150" height="28" rx="6" fill="#efbd4b" stroke="#b77b16" stroke-width="5"/>
</g>

</svg>`;

}


/* =====================================
   14. SAFE FILE NAME
===================================== */

function safeFileName(value) {

    return String(value)
        .trim()
        .replace(/[^\p{L}\p{N}_-]+/gu, "_")
        .slice(0, 50) || "Student";

}


/* =====================================
   15. DOWNLOAD CERTIFICATE
===================================== */

function downloadCertificate() {

    const button = $("downloadCertificateBtn");

    const studentName = $("studentName").value.trim();

    const finalScore = Number(
        $("correctCount").textContent
    );

    const percentage = Number(
        $("percentage").textContent.replace("%", "")
    );

    const date = new Date().toLocaleDateString("en-GB");

    if (finalScore < PASS_MARK) return;

    button.disabled = true;

    button.textContent = "جارٍ تجهيز الشهادة...";

    const svgMarkup = buildCertificateSvg(
        studentName,
        finalScore,
        percentage,
        date
    );

    const svgBlob = new Blob(
        [svgMarkup],
        {type:"image/svg+xml;charset=utf-8"}
    );

    const svgUrl = URL.createObjectURL(svgBlob);

    const image = new Image();

    image.onload = () => {

        try {

            const canvas = document.createElement("canvas");

            canvas.width = 1600;

            canvas.height = 1100;

            const context = canvas.getContext("2d");

            if (!context) {
                throw new Error("Canvas is not available");
            }

            context.drawImage(
                image,
                0,
                0,
                canvas.width,
                canvas.height
            );

            canvas.toBlob(blob => {

                URL.revokeObjectURL(svgUrl);

                if (!blob) {

                    downloadSvgFile(svgMarkup, studentName);

                } else {

                    const pngUrl = URL.createObjectURL(blob);

                    triggerDownload(
                        pngUrl,
                        `Certificate_${safeFileName(studentName)}.png`
                    );

                    setTimeout(() => {
                        URL.revokeObjectURL(pngUrl);
                    }, 1500);

                }

                resetDownloadButton(button);

            }, "image/png");

        } catch (error) {

            URL.revokeObjectURL(svgUrl);

            downloadSvgFile(svgMarkup, studentName);

            resetDownloadButton(button);

        }

    };

    image.onerror = () => {

        URL.revokeObjectURL(svgUrl);

        downloadSvgFile(svgMarkup, studentName);

        resetDownloadButton(button);

    };

    image.src = svgUrl;

}


/* =====================================
   16. RESET DOWNLOAD BUTTON
===================================== */

function resetDownloadButton(button) {

    button.disabled = false;

    button.innerHTML =
        'استلام الشهادة <span aria-hidden="true">⬇</span>';

}


/* =====================================
   17. DOWNLOAD FILE
===================================== */

function triggerDownload(url, filename) {

    const link = document.createElement("a");

    link.href = url;

    link.download = filename;

    document.body.appendChild(link);

    link.click();

    link.remove();

}


/* =====================================
   18. SVG DOWNLOAD BACKUP
===================================== */

function downloadSvgFile(svgMarkup, studentName) {

    const blob = new Blob(
        [svgMarkup],
        {type:"image/svg+xml;charset=utf-8"}
    );

    const url = URL.createObjectURL(blob);

    triggerDownload(
        url,
        `Certificate_${safeFileName(studentName)}.svg`
    );

    setTimeout(() => {
        URL.revokeObjectURL(url);
    }, 1500);

}
