const logintBtn = document.getElementById("login");
logintBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";

})

//deposite button event handler

const depositeBtn = document.getElementById("addDeposite");
depositeBtn.addEventListener("click",function()
{

    const depositeNumber = getInputNumber("depositAmount")

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositeNumber + currentDepositNumber;

    console.log(totalDeposit);

    document.getElementById("currentDeposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    const TotalBalance = totalDeposit + currentBalanceNumber;

    document.getElementById("currentBalance").innerText = TotalBalance;

  

     
})

// withdraw button event handler

const withdrawbtn = document.getElementById("addWithdraw");
withdrawbtn.addEventListener("click",function(){

    const withdrawNumber = getInputNumber("withdrawAmount");

    updateSpanText("currentwithdraw",withdrawNumber);
    updateSpanText("currentBalance",-1*withdrawNumber);

    document.getElementById("currentwithdraw").value = ""


   

    


    
})

function getInputNumber(id)
{
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);

    return amountNumber ;
}

function updateSpanText(id,depositeNumber)
{
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);

    const TotalAmount = depositeNumber+currentNumber;
    document.getElementById(id).innerText = TotalAmount;

    

}




