const choice = ["a", "b", "c"];

function createexam(data) {
  const plain = document.getElementById("exam");

  data.forEach((exam, index) => {
    const p = document.createElement("p");
    p.textContent = index + 1 + ". " + exam.question;

    const div = document.createElement("div");

    choice.forEach((ans) => {
      const label = document.createElement("label");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + index;
      input.value = ans;

      if (ans !== exam.answers.correct) {
        input.disabled = true;
      }
      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + exam.answers[ans]));

      div.appendChild(label);
      div.appendChild(document.createElement("br"));
    });

    plain.appendChild(p);
    plain.appendChild(div);
  });
}

fetch("questionAnswerData.json")
  .then((response) => response.json())
  .then((data) => createexam(data))
  .catch((error) => console.log("error", error));
