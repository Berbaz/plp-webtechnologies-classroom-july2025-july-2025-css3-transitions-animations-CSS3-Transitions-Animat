/* Hover button preview */
const hoverBtn = document.getElementById("hoverBtn");
const hoverPreview = document.getElementById("hoverPreview");
hoverBtn.addEventListener("mouseover", () => {
  hoverPreview.style.display = "block";
});
hoverBtn.addEventListener("mouseout", () => {
  hoverPreview.style.display = "none";
});

/* Part 2: Functions */
let boxElement = document.getElementById('box');

function changeBoxColor() {
  const colors = ["#00f9ff", "#ff00ff", "#2575fc", "#00ff95", "#ff4d4d"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  boxElement.style.background = randomColor;
}

function scaleBox(factor) {
  let currentScale = getCurrentScale();
  let newScale = currentScale * factor;
  boxElement.style.transform = `scale(${newScale})`;
  return newScale;
}

function getCurrentScale() {
  let transform = window.getComputedStyle(boxElement).transform;
  if (transform === "none") return 1;
  let values = transform.split('(')[1].split(')')[0].split(',');
  return parseFloat(values[0]);
}

function toggleBox() {
  boxElement.classList.toggle('hidden');
}

function calculateArea(width, height) {
  return width * height;
}
function alertArea(width, height) {
  let area = calculateArea(width, height);
  alert(`📐 The area of ${width} x ${height} is ${area}`);
}

/* Part 3 */
function animateBox() {
  let box = document.getElementById('bounceBox');
  box.classList.add('bounce');
  box.addEventListener('animationend', () => {
    box.classList.remove('bounce');
  }, { once: true });
}

function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}

function toggleSpinner() {
  let spinner = document.getElementById('loadingSpinner');
  spinner.classList.toggle('active');
}

function toggleModal() {
  let modal = document.getElementById('modal');
  modal.classList.toggle('active');
}

