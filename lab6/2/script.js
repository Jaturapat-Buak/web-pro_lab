function creategrid(data) {
  const container = document.getElementById("container");
  data.forEach((student, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    if (student.gender === "Male") {
      img.src = "http://webdev.it.kmitl.ac.th/labdocs/lab6/images/img_male.png";
      img.alt = "Male";
    } else {
      img.src =
        "http://webdev.it.kmitl.ac.th/labdocs/lab6/images/img_female.png";
      img.alt = "Female";
    }

    const name = document.createElement("h3");
    name.textContent = `${index + 1}. ${student.name}`;

    const phy = document.createElement("p");
    phy.textContent = `Physics : ${student.physics}`;

    const math = document.createElement("p");
    math.textContent = `Mathematics : ${student.maths}`;

    const eng = document.createElement("p");
    eng.textContent = `English : ${student.english}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(phy);
    card.appendChild(math);
    card.appendChild(eng);

    container.appendChild(card);
  });
}

fetch("student-score.json")
  .then((response) => response.json())
  .then((data) => creategrid(data))
  .catch((error) => console.log("error", error));
