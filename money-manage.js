// function for taking input value and convert to number
function getInput(inputValue){
    const inputAmount = document.getElementById(inputValue);
    const inputAmountText = inputAmount.value;
    const amount = parseFloat(inputAmountText);
    return amount ;
}

// function for calculate expenses and rest balance
function calcultion(){
    const totalIncome = getInput("input-income");
    const foodCost = getInput("food-cost");
     const rentCost = getInput("rent-cost");
     const clothCost = getInput("cloth-cost");
     const totalCost =foodCost + rentCost + clothCost;
     const expensesValue = document.getElementById('expenses');
     const restBalance = document.getElementById('balance');
     
// checking input parameter 
    if(isNaN(totalIncome)){
         alert('Your input income is wrong. Please enter a number of your income.');
     }
     else if(isNaN(foodCost)){
         alert('Your food cost input is wrong. Please enter a number of food cost.');
     }
     else if(isNaN(rentCost)){
         alert('Your rent cost input is wrong. Please enter a number of rent cost.');
     }
     else if(isNaN(clothCost)){
         alert('Your clothes cost input is wrong. Please enter a number of clothes cost.');
     }
// checking total income is greater than or not from total cost
     else if(totalIncome > totalCost){
        expensesValue.innerText = totalCost;
        restBalance.innerText = totalIncome - totalCost;
     }
     else{
         alert('Your income is low');
     }
  return remainBalance = totalIncome - totalCost ;
}
// function for saving amount and final remain balance
function calculateSaving(){
    const totalIncome = getInput('input-income');
    const savingsPercent = getInput('input-savings');
    const savingAmount = totalIncome * savingsPercent/100;
    const previousBalance = calcultion();
    const finalRestBalance = previousBalance -savingAmount;
    if(isNaN(savingsPercent)){
        alert('Your input percentage is wrong. Please input a number as a percentage.')
    }
    if(previousBalance > savingAmount){
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('final-rest-balance').innerText = finalRestBalance;
    }
    else{
        alert('Your cost is high. You can not save this percentage of your income.')
    }
}

// event handler for calculate button
document.getElementById("calc-button").addEventListener('click', function(){
    calcultion();
})

// event handler for save button
document.getElementById('saving-button').addEventListener('click', function(){
    calculateSaving();
})