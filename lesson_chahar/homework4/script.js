function grandTotalCost() {
    let tbody = document.getElementById("cart")
    const columnIndex = 2;
    const items = tbody.querySelectorAll(`tr td:nth-child(${columnIndex})`)
    const prices = tbody.querySelectorAll(`tr td:nth-child(${columnIndex + 1})`)
    const sumItems = Array.from(items).reduce((acc, cell) => {
        return acc + parseFloat(cell.textContent) || 0;
    }, 0);

    const sumCost = Array.from(prices).reduce((acc, cell) => {
        return acc + parseFloat(cell.textContent) || 0;
    }, 0);

    document.getElementById('totalOrderName').innerHTML = '<em>Total Order</em>';
    document.getElementById('totalItems').innerHTML = sumItems;
    document.getElementById('totalOrder').innerHTML = sumCost;
}


function addRowToTable(name, quantity, total) {
    let tbody = document.getElementById("cart")


    let row = tbody.insertRow()
    let cell1 = row.insertCell()
    let cell2 = row.insertCell()
    let cell3 = row.insertCell()

    cell1.innerHTML = name
    cell2.innerHTML = quantity
    cell3.innerHTML = total


}




function updateValue(inputElement, change) {
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

    addRowToTable(itemName, quantity, costFormatted);
    grandTotalCost()

}












