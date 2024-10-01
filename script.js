document.getElementById('startHack').addEventListener('click', function() {
    let type = document.getElementById('type').value;
    let period = document.getElementById('period').value;

    if (period === '') {
        alert("Please enter a period number");
        return;
    }

    let result = Math.random() > 0.5 ? 'Big' : 'Small';  // Randomly generate the result

    document.getElementById('result').textContent = result;
});
