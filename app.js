// HTML Elements
const form = document.querySelector("form");
const response = document.querySelector("#response");

// Functions
const generateFibonacci = (n) => {
  const sequence = [0, 1]; // Initialize with the first two Fibonacci numbers

  if (n <= 2) {
    return sequence.slice(0, n);
  }

  for (let i = 2; i < n; i++) {
    const nextFib = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextFib);
  }

  return sequence;
};

const createCards = (quantity) => {
  const fibonacciSequence = generateFibonacci(quantity);
  let cards = "";

  for (let i = 0; i < quantity; i++) {
    cards += `
      <div class="square">${fibonacciSequence[i]}</div>
    `;
  }
  return cards;
};

const drawCards = (cards) => {
  response.innerHTML = cards;
};

// Event Handlers
const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const cards = createCards(+formData.get("quantity"));
  drawCards(cards);
};

// Event Listeners
form.addEventListener("submit", onFormSubmit);
