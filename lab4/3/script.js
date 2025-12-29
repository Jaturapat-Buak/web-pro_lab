const balanceDisplay = document.getElementById('balance');
const inputName = document.getElementById('item-name');
const inputAmount = document.getElementById('item-amount');
const inputType = document.getElementById('item-type');
const inputDate = document.getElementById('item-date');
const addBtn = document.getElementById('add-btn');
const tableBody = document.getElementById('table-body');

let currentBalance = 0;

const initialData = [
    { date: '2024-12-01', name: 'เงินเดือน', amount: 10000, type: 'income' },
    { date: '2024-12-02', name: 'ค่าหอพัก', amount: 3500, type: 'expense' },
    { date: '2024-12-02', name: 'ค่าไฟ-ค่าน้ำ', amount: 800, type: 'expense' },
    { date: '2024-12-10', name: 'ค่าแรงทำงานพิเศษ', amount: 2500, type: 'income' },
    { date: '2024-12-15', name: 'ค่าอินเทอร์เน็ตรายเดือน', amount: 350, type: 'expense' }
];

function addRowToTable(date, name, type, amount) {
    const tr = document.createElement('tr');

    let incomeText = '0';
    let expenseText = '0';
    let amountVal = parseFloat(amount);

    if (type === 'income') {
        incomeText = amountVal;
        currentBalance += amountVal;
    } else {
        expenseText = amountVal;
        currentBalance -= amountVal;
    }

    const tdDate = document.createElement('td');
    tdDate.innerText = date;

    const tdName = document.createElement('td');
    tdName.innerText = name;

    const tdIncome = document.createElement('td');
    tdIncome.innerText = incomeText;

    const tdExpense = document.createElement('td');
    tdExpense.innerText = expenseText;

    tr.appendChild(tdDate);
    tr.appendChild(tdName);
    tr.appendChild(tdIncome);
    tr.appendChild(tdExpense);

    tableBody.appendChild(tr);

    balanceDisplay.innerText = currentBalance;
}

initialData.forEach(item => {
    addRowToTable(item.date, item.name, item.type, item.amount);
});

addBtn.addEventListener('click', function() {
    const name = inputName.value;
    const amount = inputAmount.value;
    const type = inputType.value;
    const date = inputDate.value;

    if (name === '' || amount === '' || date === '') {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    addRowToTable(date, name, type, amount);

    inputName.value = '';
    inputAmount.value = '';
    inputDate.value = '';
    inputName.focus();
});