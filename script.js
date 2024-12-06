const questions = [
    {
        question: "全球升溫控制目標是幾度？",
        options: [
            "2.0°C",
            "1.5°C",
            "3.0°C",
            "1.0°C"
        ],
        correct: 1,
        explanation: "根據國際共識，全球升溫控制目標為1.5°C，這是避免氣候災難的關鍵門檻。"
    },
    {
        question: "淨零排放的目標年是哪一年？",
        options: [
            "2030年",
            "2040年",
            "2050年",
            "2060年"
        ],
        correct: 2,
        explanation: "全球淨零排放的目標年訂在2050年，這是實現氣候目標的重要時間點。"
    },
    {
        question: "ESG中的'E'代表哪個面向？",
        options: [
            "經濟(Economic)",
            "環境(Environmental)",
            "效率(Efficiency)",
            "能源(Energy)"
        ],
        correct: 1,
        explanation: "ESG中的'E'代表Environmental（環境），關注企業在環境保護和氣候變遷應對上的表現。"
    },
    {
        question: "在環境面向SDGs中，SDG 6指的是什麼？",
        options: [
            "清潔飲水與衛生",
            "可負擔能源",
            "海洋生態",
            "陸地生態"
        ],
        correct: 0,
        explanation: "SDG 6代表清潔飲水與衛生，致力於確保水資源的永續管理。"
    },
    {
        question: "淨零轉型路徑圖中，第一個階段是什麼？",
        options: [
            "加速減碳期",
            "減碳基礎建設期",
            "淨零實現期",
            "碳權交易期"
        ],
        correct: 1,
        explanation: "淨零轉型路徑的第一階段是減碳基礎建設期，包含建立碳排放盤查制度等基礎工作。"
    },
    {
        question: "循環經濟的主要目標是什麼？",
        options: [
            "增加生產量",
            "提高銷售額",
            "優化資源使用效率，減少環境衝擊",
            "擴大市場規模"
        ],
        correct: 2,
        explanation: "循環經濟主要目標是優化資源使用效率，減少環境衝擊，建立永續的經濟模式。"
    },
    {
        question: "ESG永續發展中，社會面向包含哪些要素？",
        options: [
            "碳排放管理",
            "員工福祉和社會參與",
            "董事會運作",
            "資訊透明度"
        ],
        correct: 1,
        explanation: "社會面向主要包含員工福祉（如職業安全衛生、人才發展）和社會參與（如社區發展、供應鏈管理）。"
    },
    {
        question: "SDG 13「氣候行動」包含哪些主要內容？",
        options: [
            "經濟發展",
            "減緩氣候變遷、調適能力建構和氣候教育推廣",
            "消除貧窮",
            "性別平等"
        ],
        correct: 1,
        explanation: "SDG 13聚焦於氣候行動，包括減緩氣候變遷、提升調適能力和推廣氣候教育。"
    },
    {
        question: "企業碳盤查指南主要協助企業完成什麼？",
        options: [
            "財務報表",
            "建立碳排放管理制度",
            "行銷策略",
            "人力資源管理"
        ],
        correct: 1,
        explanation: "企業碳盤查指南協助企業建立完整的碳排放管理制度，包含排放源鑑別、數據收集等。"
    },
    {
        question: "永續金融的主要功能是什麼？",
        options: [
            "增加企業利潤",
            "驅動綠色投資，支持永續發展",
            "提高股東報酬",
            "擴大市場規模"
        ],
        correct: 1,
        explanation: "永續金融主要功能是驅動綠色投資，支持永續發展相關項目和計畫。"
    },
    {
        question: "加速減碳期的目標是減少多少碳排放？",
        options: [
            "10%",
            "20%",
            "30%",
            "40%"
        ],
        correct: 2,
        explanation: "在加速減碳期，目標是達成30%的減碳目標。"
    },
    {
        question: "環境永續策略包含哪些主要面向？",
        options: [
            "碳排放管理與減量、能源效率提升",
            "行銷策略",
            "產品定價",
            "通路管理"
        ],
        correct: 0,
        explanation: "環境永續策略主要包含碳排放管理與減量、能源效率提升等環境相關措施。"
    },
    {
        question: "能源轉型方案包含哪些項目？",
        options: [
            "擴大化石燃料使用",
            "太陽能系統建置、風力發電開發",
            "增加核能發電",
            "減少能源使用"
        ],
        correct: 1,
        explanation: "能源轉型方案包含太陽能系統建置、風力發電開發等再生能源發展項目。"
    },
    {
        question: "公司治理策略的核心要素是什麼？",
        options: [
            "提高營收",
            "董事會運作、風險管理、資訊透明度",
            "擴大市場",
            "降低成本"
        ],
        correct: 1,
        explanation: "公司治理策略的核心要素包含董事會運作、風險管理、資訊透明度等。"
    },
    {
        question: "綠能科技補助計畫的最高補助比例是多少？",
        options: [
            "30%",
            "40%",
            "50%",
            "60%"
        ],
        correct: 2,
        explanation: "依計畫內容最高補助50%，每案上限新台幣500萬元。"
    },
    {
        question: "SDG 8代表什麼永續目標？",
        options: [
            "消除貧窮",
            "就業與經濟成長",
            "性別平等",
            "教育品質"
        ],
        correct: 1,
        explanation: "SDG 8代表就業與經濟成長，致力於促進包容且永續的經濟成長。"
    },
    {
        question: "產業升級方案包含哪些主要內容？",
        options: [
            "製程效率提升、清潔生產技術",
            "增加人力",
            "擴大規模",
            "降低價格"
        ],
        correct: 0,
        explanation: "產業升級方案包含製程效率提升、清潔生產技術等永續生產方式。"
    },
    {
        question: "環境保護方案的重點是什麼？",
        options: [
            "提高產量",
            "生態系統維護、污染防治管理",
            "增加銷售",
            "擴大市場"
        ],
        correct: 1,
        explanation: "環境保護方案重點包含生態系統維護、污染防治管理等環境保護措施。"
    },
    {
        question: "SDG 12代表什麼永續目標？",
        options: [
            "消除飢餓",
            "責任消費與生產",
            "教育品質",
            "性別平等"
        ],
        correct: 1,
        explanation: "SDG 12代表責任消費與生產，促進永續的消費和生產模式。"
    },
    {
        question: "社會共融的主要目標是什麼？",
        options: [
            "增加利潤",
            "促進公平轉型，創造共榮社會",
            "擴大規模",
            "提高效率"
        ],
        correct: 1,
        explanation: "社會共融的主要目標是促進公平轉型，創造共榮社會。"
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

function startGame() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 30;
    
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('timeValue').textContent = timeLeft;
    
    showQuestion();
    startTimer();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        endGame();
        return;
    }

    const q = questions[currentQuestion];
    document.getElementById('questionNumber').textContent = currentQuestion + 1;
    document.getElementById('questionText').textContent = q.question;
    
    const options = document.getElementsByClassName('option');
    for(let i = 0; i < options.length; i++) {
        const option = options[i];
        option.querySelector('.option-text').textContent = q.options[i];
        option.className = 'option';
        option.onclick = () => checkAnswer(i);
    }
    
    document.getElementById('explanationText').style.display = 'none';
    updateProgress();
}

function checkAnswer(choice) {
    const correct = questions[currentQuestion].correct;
    const options = document.getElementsByClassName('option');
    
    Array.from(options).forEach(option => {
        option.onclick = null;
    });
    
    if(choice === correct) {
        options[choice].classList.add('correct');
        score += 10;
        timeLeft += 3;
        document.getElementById('scoreValue').textContent = score;
        document.getElementById('timeValue').textContent = timeLeft;
    } else {
        options[choice].classList.add('wrong');
        options[correct].classList.add('correct');
        timeLeft = Math.max(0, timeLeft - 5);
        document.getElementById('timeValue').textContent = timeLeft;
    }
    
    const explanation = document.getElementById('explanationText');
    explanation.textContent = questions[currentQuestion].explanation;
    explanation.style.display = 'block';
    
    setTimeout(() => {
        currentQuestion++;
        if(currentQuestion < questions.length && timeLeft > 0) {
            showQuestion();
        } else {
            endGame();
        }
    }, 2000);
}

function updateProgress() {
    const progress = (currentQuestion / questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timeValue').textContent = timeLeft;
        if(timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('endScreen').style.display = 'block';
    document.getElementById('finalScore').textContent = score;
}

function restartGame() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 30;
    
    document.getElementById('endScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    
    showQuestion();
    startTimer();
}