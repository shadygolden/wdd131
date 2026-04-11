// ARRAY + OBJECT
const tips = [
  { title: "Stay Hydrated", detail: "Drink at least 8 glasses of water daily." },
  { title: "Exercise Daily", detail: "Engage in at least 30 minutes of activity." },
  { title: "Eat Balanced Meals", detail: "Include fruits and vegetables in your diet." }
];

// FUNCTION
function displayTips(containerId) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = "";

  tips.forEach(tip => {
    container.innerHTML += `
      <div>
        <h3>${tip.title}</h3>
        <p>${tip.detail}</p>
      </div>
    `;
  });
}

// WAIT FOR PAGE TO LOAD (THIS FIXES YOUR ISSUE)
document.addEventListener("DOMContentLoaded", () => {
  displayTips("tipsList");

  const loadBtn = document.getElementById("loadTips");

  if (loadBtn) {
    loadBtn.addEventListener("click", () => {
      displayTips("tipsContainer");
    });
  }

  loadUser();
});

// LOCAL STORAGE
function loadUser() {
  const user = localStorage.getItem("username");
  const welcome = document.getElementById("welcome");

  if (user && welcome) {
    welcome.textContent = `Welcome back, ${user}`;
  }
}

const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;