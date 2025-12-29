let isThai = true;

const infoDiv = document.getElementById("info");
const btn = document.querySelector("button");

const data = {
  th: {
    fname: "ชื่อ : ",
    lname: "นามสกุล : ",
    country: "ประเทศ : ",
    select: "เลือกประเทศ",
    options: [
      ["th", "ไทย"],
      ["vn", "เวียดนาม"],
      ["la", "ลาว"],
      ["my", "มาเลเซีย"],
      ["sg", "สิงคโปร์"],
      ["ph", "ฟิลิปปินส์"],
      ["mm", "เมียนมาร์"],
      ["kh", "กัมพูชา"],
      ["bn", "บรูไน"],
    ],
    btn: "เปลี่ยนเป็นภาษาอังกฤษ",
  },

  en: {
    fname: "First Name: ",
    lname: "Last Name: ",
    country: "Country: ",
    select: "Select a country",
    options: [
      ["th", "Thailand"],
      ["vn", "Vietnam"],
      ["la", "Laos"],
      ["my", "Malaysia"],
      ["sg", "Singapore"],
      ["ph", "Philippines"],
      ["mm", "Myanmar"],
      ["kh", "Cambodia"],
      ["bn", "Brunei"],
    ],
    btn: "Change to Thai",
  },
};

function render(lang) {
  infoDiv.innerHTML = "";

  const lblF = document.createElement("label");
  lblF.textContent = lang.fname;

  const inputF = document.createElement("input");
  inputF.type = "text";

  const lblL = document.createElement("label");
  lblL.textContent = lang.lname;

  const inputL = document.createElement("input");
  inputL.type = "text";

  const lblC = document.createElement("label");
  lblC.textContent = lang.country;

  const select = document.createElement("select");

  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.textContent = lang.select;
  select.appendChild(opt0);

  lang.options.forEach(([value, text]) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = text;
    select.appendChild(opt);
  });

  infoDiv.appendChild(lblF);
  infoDiv.appendChild(inputF);
  infoDiv.appendChild(document.createElement("br"));

  infoDiv.appendChild(lblL);
  infoDiv.appendChild(inputL);
  infoDiv.appendChild(document.createElement("br"));

  infoDiv.appendChild(lblC);
  infoDiv.appendChild(select);
}

render(data.th);

btn.addEventListener("click", () => {
  if (isThai) {
    render(data.en);
    btn.textContent = data.en.btn;
  } else {
    render(data.th);
    btn.textContent = data.th.btn;
  }

  isThai = !isThai;
});
