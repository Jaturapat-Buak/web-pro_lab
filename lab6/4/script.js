const STORAGE_KEY = "favorites";

const titleInput = document.getElementById("titleInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const hint = document.getElementById("hint");

function loadItems() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveItems(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function setHintVisible(isVisible) {
  hint.style.display = isVisible ? "block" : "none";
}

function clearListUI() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function render() {
  const items = loadItems();

  clearListUI();
  setHintVisible(items.length === 0);

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "item";

    const text = document.createElement("span");
    text.textContent = item;

    const del = document.createElement("button");
    del.type = "button";
    del.className = "delBtn";
    del.textContent = "ลบ";

    del.addEventListener("click", () => {
      const cur = loadItems();
      cur.splice(index, 1);
      saveItems(cur);
      render();
    });

    li.appendChild(text);
    li.appendChild(del);
    list.appendChild(li);
  });
}

function addItem() {
  const value = titleInput.value.trim();
  if (value === "") return;

  const items = loadItems();
  items.push(value);
  saveItems(items);

  titleInput.value = "";
  titleInput.focus();
  render();
}

function clearAll() {
  localStorage.removeItem(STORAGE_KEY);
  render();
}

addBtn.addEventListener("click", addItem);

titleInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addItem();
});

clearBtn.addEventListener("click", clearAll);

// โหลดครั้งแรก
render();
