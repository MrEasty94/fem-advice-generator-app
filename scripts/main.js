const adviceNumber = document.querySelector('.advice-number-api');
const adviceText = document.querySelector('.advice-text-api');
const diceButton = document.querySelector('.dice-container');

const defaultQuote = `It is easy to sit up and take notice, what's difficult is getting up and taking action.`;
const defaultNumber = `117`;

const fetchUrl = `https://api.adviceslip.com/advice`;

const getAdvice = () => {
  fetch(fetchUrl)
    .then((r) => r.json())
    .then((data) => {
      console.log(data.slip);
      adviceNumber.innerHTML = data.slip.id;
      adviceText.innerHTML = data.slip.advice;
    });
};

getAdvice();

diceButton.addEventListener('click', () => {
  getAdvice();
});
