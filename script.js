// Select buttons and elements from the DOM
const allButton = document.querySelector("#allButton");
const insideButton = document.querySelector("#insideButton");
const outsideButton = document.querySelector("#outsideButton");
const lawnButton = document.querySelector("#lawnButton");
const cleaningButton = document.querySelector("#cleaningButton");
const clearEstimateButton = document.querySelector("#clearEstimateButton");
const outsideServices = document.querySelectorAll(".outsideServices");
const insideServices = document.getElementsByClassName("insideServices");
const estimateBanner = document.querySelector("h3");
const lawnPhoto = document.getElementById("lawnPhoto");
const lawnEstimate = document.querySelector("#lawnEstimate");
const cleaningPhoto = document.querySelector("#cleaningPhoto");
const cleaningEstimate = document.querySelector(".cleaningEstimate");
const estimates = document.getElementsByTagName("li");

// Function to hide the banner
function hideBanner() {
  document.getElementById("banner").style.display = "none";
}

// Function to show outside services and hide the banner
function showOutside() {
  hideBanner();
  outsideServices[0].classList.remove("hide");
}

// Function to show inside services and hide the banner
function showInside() {
  hideBanner();
  insideServices[0].classList.remove("hide");
}

// Function to show both inside and outside services
function showAll() {
  showOutside();
  showInside();
}

// Function to show the estimate banner
function showEstimateBanner() {
  estimateBanner.classList.remove("hide");
}

// Function to show the clear estimate button
function showClearButton() {
  clearEstimateButton.classList.remove("hide");
}

// Function to add lawn service estimate
function addLawn() {
  showEstimateBanner();
  showClearButton();
  lawnEstimate.classList.remove("hide");
  lawnPhoto.setAttribute("src", "https://mimo.app/i/piggy-bank.png");
}

// Function to add cleaning service estimate
function addCleaning() {
  showEstimateBanner();
  showClearButton();
  cleaningEstimate.classList.remove("hide");
  cleaningPhoto.setAttribute("src", "https://mimo.app/i/piggy-bank.png");
}

// Function to clear all estimates and reset photos
function clearEstimate() {
  // Hide the estimate banner and clear button
  estimateBanner.classList.add("hide");
  clearEstimateButton.classList.add("hide");

  // Hide all estimate list items
  Array.from(estimates).forEach(el => {
    el.classList.add("hide");
  });

  // Reset photos to default images
  lawnPhoto.src = "https://mimo.app/i/colorful-flowers.png";
  cleaningPhoto.src = "https://mimo.app/i/cleaning.png";
}

// Add event listeners to buttons
allButton.addEventListener("click", showAll);
outsideButton.addEventListener("click", showOutside);
insideButton.addEventListener("click", showInside);
lawnButton.addEventListener("click", addLawn);
cleaningButton.addEventListener("click", addCleaning);
clearEstimateButton.addEventListener("click", clearEstimate);
