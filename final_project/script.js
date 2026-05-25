function grandTotalCost() {
    /**
     * Caclulates the total number of items ordered and total cost of all items ordered.
     * @type {HTMLElement}
     */
    let tbody = document.getElementById("cart")
    let sumItems = 0;
    let sumCost = 0
    const columnIndex = 2;
    const items = tbody.querySelectorAll(`tr td:nth-child(${columnIndex})`)
    const prices = tbody.querySelectorAll(`tr td:nth-child(${columnIndex + 2})`)
    sumItems = Array.from(items).reduce((acc, cell) => {
        return acc + parseFloat(cell.textContent) || 0;
    }, 0);

    sumCost = Array.from(prices).reduce((acc, cell) => {
        return acc + parseFloat(cell.textContent) || 0;
    }, 0);

    document.getElementById('totalOrderName').innerHTML = '<em>Total Order</em>';
    document.getElementById('totalItems').innerHTML = sumItems;

    // sumCost = sumCost * 1.072
    let sumCostFormatted = sumCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    })
    document.getElementById('totalCost').innerHTML = sumCostFormatted;
}


function addRowToTable(name, quantity, total, cost) {
    /**
     * This function updates the cart when the item name, number of items
     * selected, and the total cost.
     * @type {HTMLElement}
     */
    let tbody = document.getElementById("cart")



    let row = tbody.insertRow()
    let cell1 = row.insertCell()
    let cell2 = row.insertCell()
    let cell3 = row.insertCell()
    let cell4 = row.insertCell()

    cell1.innerHTML = name
    cell2.innerHTML = quantity
    cell3.innerHTML = total
    cell4.innerHTML = cost

    document.getElementById('totalItems').innerHTML = 0;
    document.getElementById('totalCost').innerHTML = 0;

    grandTotalCost()

}

function updateValue(inputElement, change) {
    /**
     * This function updates each menu item quantity when the '+' or '-' button is clicked.
     * @type {HTMLElement}
     */
    const input = document.getElementById(inputElement)
    let value = parseInt(input.value || 0);
    if (value === 1 && change === -1) {
        input.value = 1;
    } else {
        value += change;
        input.value = value;
    }
}

function calclulateItemCost(elementDesc, inputElement, priceElement) {
    /**
     * Caclulates the cost of each item selected based on quantity and price
     * @type {string}
     */
    const itemName = document.getElementById(elementDesc).innerHTML;
    const quantity = document.getElementById(inputElement).value;
    const priceString = document.getElementById(priceElement).innerHTML;
    const priceValue = parseFloat(priceString.replace('$', ""))
    let cost = quantity * priceValue;
    const costFormatted = cost.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    addRowToTable(itemName, quantity, costFormatted, cost);

}

function checkPassword() {
    const pwd1 = document.getElementById('new-password').value;
    const pwd2 = document.getElementById('new-password-confirm').value;

    if (pwd1 !== pwd2) {
        alert('Passwords no not match!');
        return false; //prevents form submission
    }

    return true; //allows form submission
}

function checkPasswordFr() {
    const pwd1 = document.getElementById('new-password').value;
    const pwd2 = document.getElementById('new-password-confirm').value;

    if (pwd1 !== pwd2) {
        alert('Les mots de passe ne correspondent pas!');
        return false; //prevents form submission
    }

    return true; //allows form submission
}













