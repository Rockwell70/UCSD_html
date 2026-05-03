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









