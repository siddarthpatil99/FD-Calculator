function calculateMaturityAmount() {
    
    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestrate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    const maturityAmount = principle + (principle * interestRate * tenure)/100;

    // Dipslay the result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;

}

// Attach the event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);