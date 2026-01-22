const head = ["ID", "Name", "Gender", "Position", "Address"];
const head_forjson = ["id", "Name", "Gender", "Position", "Address"];
function createtable(data) {
  //create table head
  let space = document.getElementById("em_table");
  let table = document.createElement("table");
  let table_row = document.createElement("tr");
  head.forEach((i) => {
    let table_head = document.createElement("th");
    table_head.textContent = i;
    table_row.appendChild(table_head);
  });
  table.appendChild(table_row);

  //create table body
  data.forEach((i) => {
    let table_row2 = document.createElement("tr");
    head_forjson.forEach((j) => {
      let table_doc = document.createElement("td");
      if (j == "Name") {
        table_doc.textContent = i["FirstName"] + " " + i["LastName"];
      } else {
        table_doc.textContent = i[j];
      }
      table_row2.appendChild(table_doc);
    });
    table.appendChild(table_row2);
  });
  space.appendChild(table);
}

//fetch json
fetch("employees.json")
  .then((response) => response.json())
  .then((data) => createtable(data))
  .catch((error) => console.log("error", error));
