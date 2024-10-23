const h1 = document.querySelector("h1");

async function updateh1() {
  const response = await fetch(
    "https://mono-repo-demo-server-04na.onrender.com/message"
  );
  const data = await response.json();
  h1.textContent = data;
}

updateh1();
