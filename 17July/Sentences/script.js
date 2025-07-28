document.getElementById("processButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value;
  const paragraphs = inputText.split(/\n\s*\n/);
  const output = [];

  for (let i = 0; i < paragraphs.length; i++) {
    const sentences = paragraphs[i].match(/[^.?!]+[.?!]/g);
    const trimmedSentences = [];

    if (sentences) {
      for (let j = 0; j < sentences.length; j++) {
        trimmedSentences.push(sentences[j].trim());
      }
    }

    output.push(trimmedSentences);
  }

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  output.forEach((para, index) => {
    const paraDiv = document.createElement("div");
    paraDiv.innerHTML = `<strong>Paragraph ${index + 1}:</strong><ul>` +
      para.map(sentence => `<li>${sentence}</li>`).join("") +
      `</ul>`;
    outputDiv.appendChild(paraDiv);
  });
});
