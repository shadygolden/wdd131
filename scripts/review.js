// increment review counter in localStorage
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.querySelector("#reviewCount").textContent = count;
document.querySelector("#lastModified").textContent = document.lastModified;
