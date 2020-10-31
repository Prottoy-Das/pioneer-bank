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

    const depositeAmount = document.getElementById("depositAmount").value;
    const depositeNumber = parseFloat(depositeAmount);

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

    


    
})

function getInputNumber()
{
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
}


