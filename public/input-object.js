let amounts = [];

const addAmount = (ev)=>{
    ev.preventDefault();
    let amount = {
        id: Date.now(),
        amount: document.getElementById('amount').value
    }
    amounts= amount;
    document.forms[0].reset();

    console.warn('added',{amounts});

    let pre = document.querySelector('#msg pre');
   // pre.textContent = '\n' + JSON.stringify(amounts, '\t',2);

    window.open("/static/amount.html");
    localStorage.setItem("MyAmountList", JSON.stringify(amounts) );
    
    amounts.reset();
}
//document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addAmount);

//});
    