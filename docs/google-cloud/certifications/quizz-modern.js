let score = 0;
let answeredCount = 0;
let totalQuestions = 0;
let quizQuestions = [];
let allQuizData = {};

const quizContainer = document.getElementById('quiz-questions');
const currentScoreSpan = document.getElementById('current-score');
const answeredCountSpan = document.getElementById('answered-count');
const totalQuestionsSpan = document.getElementById('total-questions');
const submitButton = document.getElementById('submit-quiz');
const quizSummary = document.getElementById('quiz-summary');
const quizSelector = document.getElementById('quiz-selector');
const quizTitle = document.getElementById('quiz-title');

const availableDatasets = [
    { file: 'ace.js', title: 'Associate Cloud Engineer' },
    { file: 'ace-easy.js', title: 'Associate Cloud Engineer - Easy' },
    { file: 'generative-ai-leader.js', title: 'Generative AI Leader' },
    { file: 'generative-ai-leader-2.js', title: 'Generative AI Leader 2' }
];

function populateQuizSelector() {
    availableDatasets.forEach(dataset => {
        const option = document.createElement('option');
        option.value = dataset.file;
        option.textContent = dataset.title;
        quizSelector.appendChild(option);
    });

    quizSelector.addEventListener('change', (event) => {
        loadDataset(event.target.value);
    });

    if (availableDatasets.length > 0) {
        loadDataset(availableDatasets[0].file);
    }
}

function loadDataset(datasetFile) {
    const existingScript = document.getElementById('quiz-data-script');
    if (existingScript) {
        existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'quiz-data-script';
    script.src = `questions-datasets/${datasetFile}`;
    script.onload = () => {
        const quizNames = Object.keys(allQuizData);
        if (quizNames.length > 0) {
            loadQuiz(quizNames[0]);
        } else {
            console.error("No quiz data found in the loaded file:", datasetFile);
            quizContainer.innerHTML = "<p class='text-danger'>Error: Could not find any quiz data in the selected file.</p>";
        }
    };
    script.onerror = () => {
        console.error("Failed to load the quiz dataset:", datasetFile);
        quizContainer.innerHTML = "<p class='text-danger'>Error: Failed to load the questions. Please check the file path and content.</p>";
    };

    document.body.appendChild(script);
}

function loadQuiz(quizName) {
    const pageTitle = `${quizName} Quizz`;
    quizTitle.textContent = pageTitle;
    document.title = pageTitle;

    quizQuestions = allQuizData[quizName].questions;
    totalQuestions = quizQuestions.length;
    resetQuiz();
    renderQuiz();
}

function resetQuiz() {
    score = 0;
    answeredCount = 0;
    quizContainer.innerHTML = '';
    submitButton.disabled = true;
    submitButton.style.display = 'block';
    quizSummary.style.display = 'none';
    currentScoreSpan.textContent = '0';
    answeredCountSpan.textContent = '0';
    totalQuestionsSpan.textContent = totalQuestions;
}

function renderQuiz() {
    try {
        if (quizQuestions.length === 0) {
            quizContainer.innerHTML = "<p class='text-warning'>No questions loaded. Please check the quiz data.</p>";
            return;
        }
        quizQuestions.forEach((q, index) => {
            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            questionBlock.id = `question-${index}`;

            const questionText = document.createElement('p');
            questionText.className = 'lead';
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionBlock.appendChild(questionText);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';

            q.answerOptions.forEach((option, optionIndex) => {
                const formCheck = document.createElement('div');
                formCheck.className = 'form-check';

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.className = 'form-check-input';
                radio.name = `question-${index}`;
                radio.id = `q${index}o${optionIndex}`;
                radio.dataset.questionIndex = index;
                radio.dataset.optionIndex = optionIndex;
                radio.addEventListener('change', onAnswerSelected);

                const label = document.createElement('label');
                label.className = 'form-check-label';
                label.htmlFor = radio.id;
                label.textContent = option.text;

                formCheck.appendChild(radio);
                formCheck.appendChild(label);
                optionsDiv.appendChild(formCheck);
            });

            questionBlock.appendChild(optionsDiv);

            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'feedback';
            feedbackDiv.id = `feedback-${index}`;
            questionBlock.appendChild(feedbackDiv);

            quizContainer.appendChild(questionBlock);
        });
    } catch (error) {
        console.error("Error during quiz rendering:", error);
        quizContainer.innerHTML = "<p class='text-danger'>An error occurred while loading questions. Please check the browser console for more details.</p>";
    }
}

function onAnswerSelected(event) {
    const selectedRadio = event.target;
    const questionIndex = parseInt(selectedRadio.dataset.questionIndex);
    const optionIndex = parseInt(selectedRadio.dataset.optionIndex);

    const questionBlock = document.getElementById(`question-${questionIndex}`);
    const feedbackDiv = document.getElementById(`feedback-${questionIndex}`);
    const optionsDiv = questionBlock.querySelector('.options');

    if (questionBlock.classList.contains('answered')) {
        return;
    }

    questionBlock.classList.add('answered');
    const radios = optionsDiv.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.disabled = true);

    const questionData = quizQuestions[questionIndex];
    const selectedOption = questionData.answerOptions[optionIndex];
    const isCorrect = selectedOption.isCorrect;

    const selectedLabel = selectedRadio.parentElement;

    if (isCorrect) {
        score++;
        selectedLabel.classList.add('selected-correct');
    } else {
        selectedLabel.classList.add('selected-incorrect');
        const correctOptionIndex = questionData.answerOptions.findIndex(opt => opt.isCorrect);
        if (correctOptionIndex !== -1) {
            optionsDiv.children[correctOptionIndex].classList.add('correct-answer-highlight');
        }
    }

    let feedbackHTML = isCorrect ? "<strong>Correct.</strong>" : "<strong>Incorrect.</strong>";
    if (selectedOption.rationale) {
        feedbackHTML += " " + selectedOption.rationale;
    } else {
        const correctAnswer = questionData.answerOptions.find(opt => opt.isCorrect);
        if (!isCorrect && correctAnswer) {
             feedbackHTML += ` The correct answer was: ${correctAnswer.text}`;
        }
    }

    if (isCorrect) {
        score++;
        feedbackDiv.classList.add('correct');
        feedbackDiv.classList.remove('incorrect');
    } else {
        feedbackDiv.classList.add('incorrect');
        feedbackDiv.classList.remove('correct');
    }
    
    feedbackDiv.innerHTML = feedbackHTML;

    answeredCount++;
    currentScoreSpan.textContent = score;
    answeredCountSpan.textContent = answeredCount;

    if (answeredCount === totalQuestions) {
        submitButton.disabled = false;
    }
}

function showQuizSummary() {
    const summaryScoreValue = document.getElementById('summary-score-value');
    const summaryAccuracyValue = document.getElementById('summary-accuracy-value');
    const summaryRightValue = document.getElementById('summary-right-value');
    const summaryWrongValue = document.getElementById('summary-wrong-value');
    const summaryResultValue = document.getElementById('summary-result-value');

    const wrongAnswers = answeredCount - score;
    const accuracy = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

    summaryScoreValue.textContent = `${score}/${totalQuestions}`;
    summaryAccuracyValue.textContent = `${accuracy.toFixed(0)}%`;
    summaryRightValue.textContent = score;
    summaryWrongValue.textContent = wrongAnswers;

    if (accuracy >= 70) {
        summaryResultValue.textContent = "PASS";
        summaryResultValue.style.color = '#28a745'; // Green
    } else {
        summaryResultValue.textContent = "FAIL";
        summaryResultValue.style.color = '#dc3545'; // Red
    }

    quizSummary.style.display = 'block';
    submitButton.style.display = 'none';

    quizSummary.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

submitButton.addEventListener('click', showQuizSummary);

document.getElementById('reset-quiz').addEventListener('click', () => {
    const selectedQuiz = quizSelector.value;
    loadDataset(selectedQuiz);
});

document.addEventListener('DOMContentLoaded', populateQuizSelector);
