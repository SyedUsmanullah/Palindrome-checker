window.onload = function () {
  // Full page styles
  document.body.style.margin = '0';
  document.body.style.height = '100vh';
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.fontFamily = 'Segoe UI, sans-serif';
  document.body.style.background = 'linear-gradient(to right top, #56ccf2, #2f80ed)';
  document.body.style.transition = 'background 1s ease';

  // Card container
  const container = document.createElement('div');
  container.style.background = 'rgba(0, 77, 102, 0.9)';
  container.style.padding = '40px';
  container.style.borderRadius = '15px';
  container.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
  container.style.textAlign = 'center';
  container.style.color = 'white';
  container.style.width = '400px';
  container.style.maxWidth = '90%';
  container.style.backdropFilter = 'blur(10px)';
  container.style.webkitBackdropFilter = 'blur(10px)';

  // Heading
  const title = document.createElement('h2');
  title.textContent = 'Palindrome Word Checker';
  title.style.marginBottom = '10px';
  title.style.fontSize = '26px';
  title.style.fontWeight = '700';
  container.appendChild(title);

  // Description
  const desc = document.createElement('p');
  desc.innerHTML = 'A palindrome word is a word that reads the same<br>backward as forward';
  desc.style.fontSize = '15px';
  desc.style.opacity = '0.9';
  container.appendChild(desc);

  // Input box
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Enter a Word';
  input.style.padding = '12px';
  input.style.fontSize = '15px';
  input.style.borderRadius = '5px';
  input.style.border = 'none';
  input.style.width = '80%';
  input.style.marginTop = '15px';
  input.style.marginBottom = '10px';
  input.style.outline = 'none';
  container.appendChild(input);

  // Button
  const button = document.createElement('button');
  button.textContent = 'Check';
  button.style.marginTop = '10px';
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.border = 'none';
  button.style.borderRadius = '8px';
  button.style.cursor = 'pointer';
  button.style.backgroundColor = 'white';
  button.style.color = '#31707c';
  button.style.fontWeight = 'bold';
  button.style.marginBottom = '10px';
  container.appendChild(document.createElement('br'));
  container.appendChild(button);

  // Result
  const result = document.createElement('div');
  result.style.marginTop = '20px';
  result.style.fontSize = '18px';
  container.appendChild(result);

  // Add to document
  document.body.appendChild(container);

  // Palindrome logic
  button.onclick = function () {
    const word = input.value.trim();
    const clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = clean.split('').reverse().join('');
    if (clean && clean === reversed) {
      result.textContent = `"${word}" is a Palindrome ✅`;
      result.style.color = '#00ffcc';
    } else {
      result.textContent = `"${word}" is NOT a Palindrome ❌`;
      result.style.color = '#ff9999';
    }
  };
};

