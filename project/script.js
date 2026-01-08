const recipes = {
  tomyum: {
    title: "ต้มยำกุ้ง",
    source:
      "https://www.wongnai.com/recipes/ugc/06c21e83ed584ed4996a129af5c3231c?ref=ct",
    text: `ส่วนผสม
- กุ้งขนาดแล้วแต่ชอบ 6 ขีด
- ข่า ตะไคร้ ใบมะกรูด 1 มัด
- พริกขี้หนู 10 เม็ด
- พริกจินดา 7 เม็ด
- น้ำพริกเผา 1 ช้อน
- นมสด 7 ช้อน
- น้ำปลา 2 ช้อน
- น้ำตาล 1 ช้อน
- มะนาว 2 ช้อน
- หอมแดง 6 หัวเล็ก
- ผักชีฝรั่ง แล้วแต่ชอบ
- เห็ด แล้วแต่ชอบ

วิธีทำ
เวลาเตรียมส่วนผสม: 15 นาที
เวลาปรุงอาหาร: 15 นาที

  1) นำกุ้งมาปลอกเปลือกและผ่าหลังเอาเส้นดำๆ ออก

  2) ล้างข่า, ตะไคร้, ใบมะกรูดแล้วหั่นเตรียมไว้ ปลอกหอมแดงล้างแล้วทุบให้แตกเล็กน้อย ล้างพริกแล้วตำพริกจินดาให้แหลก ผักชีฝรั่งล้างแล้วซอยหั่นเห็ดและล้างให้สะอาด

  3) ใส่น้ำ 400 ml ตั้งไฟให้เดือดใส่ข่า, ตะไคร้ ใบมะกรูด หอมแดงต้มสักพัก ใส่เห็ดพอเดือดตามด้วยกุ้ง

  4) กุ้งเริ่มออกสีแดง ปรุงรส:
   ใส่น้ำพริกเผา 1 ช้อน + นมสด 7 ช้อน
   ใส่พริกตามชอบ
   น้ำปลา 2 ช้อน + น้ำตาล 1 ช้อน
   ปิดไฟแล้วค่อยใส่น้ำมะนาว 2 ช้อน
   ชิมตามชอบ โรยพริกขี้หนู + ผักชีฝรั่ง`,
  },

  rotee: {
    title: "โรตี",
    img: "pic/rotee.jpg",
    source: "https://www.wongnai.com/recipes/roti",
    text: `ส่วนผสม
- แป้งอเนกประสงค์ 250 กรัม
- เนยชนิดจืด ตราออร์คิด 200 กรัม
- ไข่ไก่ 1 ฟอง
- เกลือ 1/8 ช้อนชา
- ผลิตภัณฑ์นมข้นหวาน ตรามะลิ อีซี่ สควีซ 100 มิลลิลิตร
- น้ำสะอาด 20 มิลลิตร
- น้ำมัน 1/2 ถ้วยตวง
- ผลิตภัณฑ์นมข้นหวานมะลิโอวัลติน อีซี่ สควีซ สูตรนมสด สำหรับทานเคียง

วิธีทำ
1) ผสม
- ผสมเนยชนิดจืดตราออร์คิด ละลาย ไข่ไก่ เกลือ และ ผลิตภัณฑ์นมข้นหวาน ตรามะลิ อีซี่ สควีซ เข้าด้วยกัน
- เทแป้งอเนกประสงค์ลงอ่างผสม จากนั้นทำหลุมไว้ตรงกลาง เติมส่วนผสมของเหลวลงไปตรงกลางหลุมแป้ง
2) นวด
- จากนั้นนวดให้ส่วนผสมเข้ากัน และเติมน้ำสะอาดเล็กน้อย (หากส่วนผสมแห้งจนเกินไป)
- เมื่อนวดจนแป้งเนียนดี นำมือจุ่มน้ำมันให้ทั่ว
- จากนั้นแบ่งแป้งเป็นก้อน ปั้นเป็นก้อนกลม คลุมด้วยพลาสติกแร๊ป นำแช่เย็นเพื่อพักแป้งเป็นเวลา 30 นาที
3) ทอด
- ทาน้ำมันลงบนพื้นไม้ จากนั้นนำแป้งโรตีที่พักได้ที่มาคลึงให้เป็นแผ่น แล้วตั้งกระทะไฟกลาง
- ใส่น้ำมันลงไป จากนั้นนำแผ่นโรตีลงไปทอด ใส่เนยชนิดจืด ตราออร์คิด ลงไป แล้วพลิกกลับด้านให้สุกกรอบทั้งสองฝั่ง
- จากนั้นหั่นแป้งโรตีเป็นชิ้น แล้วราดด้วย ผลิตภัณฑ์นมข้นหวาน ตรามะลิ อีซี่ สควีซ หรือ ผลิตภัณฑ์นมข้นหวานมะลิโอวัลติน อีซี่ สควีซ สูตรนมสด แค่นี้ก็พร้อมเสิร์ฟแล้ว`,
  },
};

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupSource = document.getElementById("popup-source");
const closeBtn = document.querySelector(".close");

function openPopup(recipe) {
  popupImg.src = recipe.img || "";
  popupTitle.textContent = recipe.title || "";
  popupText.textContent = recipe.text || "";
  popupSource.href = recipe.source || "#";
  popupSource.style.display =
    recipe.source && recipe.source !== "#" ? "inline-block" : "none";
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

document.querySelectorAll(".card").forEach((card) => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    const recipe = recipes[id];
    if (!recipe) return;
    openPopup(recipe);
  });
});

closeBtn.addEventListener("click", closePopup);
popup.addEventListener("click", (e) => {
  if (e.target === popup) closePopup();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});
