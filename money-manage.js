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

}

document.getElementById("calc-button").addEventListener('click', function(){
    calcultion();
})