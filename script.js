document.addEventListener('DOMContentLoaded', function () {
    const price = document.getElementById('price');
    const totalPrice = document.getElementById('total-price');
    const billInput = document.getElementById('bill-input');
    const numOfPeopleInput = document.getElementById('numOfPeople');
    
    const fivePercent = document.getElementById('5percent');
    const tenPercent = document.getElementById('10percent');
    const fifteenPercent = document.getElementById('15percent');
    const twentyFivePercent = document.getElementById('25percent');
    const fiftyPercent = document.getElementById('50percent');
    const customPercent = document.getElementById('customised');

    if (billInput) {
        price.innerHTML = "$0.00";
        totalPrice.innerHTML = "$0.00";

        function updatePrices(percent) {
            const updatedValue = parseFloat(billInput.value);
            const numOfPeople = parseFloat(numOfPeopleInput.value);

            if (!isNaN(updatedValue) && !isNaN(numOfPeople) && numOfPeople > 0) {
                const newPricePerPerson = updatedValue * percent / numOfPeople;
                const newTotalPrice = updatedValue * percent;
                totalPrice.innerHTML = `$${newTotalPrice.toFixed(2)}`;
                price.innerHTML = `$${newPricePerPerson.toFixed(2)}`;
            }
        }

        customPercent.addEventListener('input', function () {
            updatePrices(parseFloat(customPercent.value / 100));
        });

        fivePercent.addEventListener('click', function () {
            updatePrices(0.05);
        });

        tenPercent.addEventListener('click', function () {
            updatePrices(0.10);
        });

        fifteenPercent.addEventListener('click', function () {
            updatePrices(0.15);
        });

        twentyFivePercent.addEventListener('click', function () {
            updatePrices(0.25);
        });

        fiftyPercent.addEventListener('click', function () {
            updatePrices(0.50);
        });

        // Reset button
        const resetButton = document.getElementById('rstButton');
        resetButton.addEventListener('click', function () {
            price.innerHTML = `$${'0.00'}`;
            totalPrice.innerHTML = `$${'0.00'}`;
        });
    }
});
