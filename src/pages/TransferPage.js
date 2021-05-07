import React from 'react'

function dropList(){
    var mylist = document.getElementById("myList");
    document.getElementById("Recepient").value = mylist.options[mylist.selectedIndex].text;
}

function accountList(){
    var mylist = document.getElementById("othersList");
    document.getElementById("personalAccount").value = mylist.options[mylist.selectedIndex].text;
}


function TransferPage() {
    return (
        <div>
            <img src="https://www.pinclipart.com/picdir/big/117-1177303_1-dbs-group-holdings-ltd-dbs-bank-logo.png" width="250" height="auto"/>
            <h1>Transfer Page</h1>
            <form>
            <b> Select Recepient: </b>
            <select id = "myList" onchange= "dropList()">
                <option>FUTU Holdings</option>
                <option>TIGRS Trades </option>
                <option>HelloWorld</option>
            </select>
            </form>
           
            <form>              
            <b>Select Transfer Account: </b>
            <select id = "othersList" onchange= "accountList()" width="1000">
                <option>Account 1</option>
                <option>Account 2</option>
                <option>Account 3</option>

            </select>
            </form>
        
        </div> 
       
    )
}

export default TransferPage
