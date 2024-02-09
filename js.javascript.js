const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
  // Redirect to a thank you page for Yes response
  window.location.href = "thankyou.html"; // Change "thankyou.html" to your desired URL
});

noBtn.addEventListener('click', () => {
  // Redirect to a sorry page for No response
  window.location.href = "sorry.html"; // Change "sorry.html" to your desired URL
});
