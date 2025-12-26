function show() {
    const head = ["เลขคูณ", "ผลลัพธ์"];
    const dek = [1,2,3,4,5,6,7,8,9,10,11,12];

    let num = parseInt(document.getElementById("inp").value);
    let showtable = document.getElementById("showtable");

    if (isNaN(num) || num < 1 || num > 12) {
        showtable.innerHTML = "กรุณาป้อนเลข 1 - 12";
        return;
    }

    showtable.innerHTML = "";

    let table = document.createElement("table");

    let headerRow = document.createElement("tr");
    head.forEach(hed => {
        let th = document.createElement("th");
        th.textContent = hed;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    dek.forEach(i => {
        let row = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = num + " x " + i;

        let td2 = document.createElement("td");
        td2.textContent = num * i;

        row.appendChild(td1);
        row.appendChild(td2);
        table.appendChild(row);
    });

    showtable.appendChild(table);
}