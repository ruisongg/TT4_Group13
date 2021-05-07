import React, { useState, useEffect } from 'react'

function dropList(){
    var mylist = document.getElementById("myList");
    document.getElementById("Recepient").value = mylist.options[mylist.selectedIndex].text;
}

function accountList(){
    var mylist = document.getElementById("othersList");
    document.getElementById("personalAccount").value = mylist.options[mylist.selectedIndex].text;
}

function TransferPage() {

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    useEffect(() => {
        if (user.custID != null)
        {
            fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts",{
                method: 'POST',
                headers: { 'content-type': 'application/json',
                            'x-api-key': 'QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY' },
                body: `{ "custID": ${user.custID},"accountKey": "${user.accountKey}" }`
                }).then(respond => respond.json())
                .then(data => {
                                console.log(JSON.stringify(data))
                                });
        }
    }, [user])

    return (
        <div>
            <img src="https://www.pinclipart.com/picdir/big/117-1177303_1-dbs-group-holdings-ltd-dbs-bank-logo.png" width="250" height="auto"/>
            <h1>Transfer Page</h1>
            <form>
            <b> Select Recepient: </b>
            <select id = "myList" onChange= "dropList()">
                <option>FUTU Holdings</option>
                <option>TIGRS Trades </option>
                <option>HelloWorld</option>
            </select>
            </form>
           
            <form>              
            <b>Select Transfer Account: </b>
            <select id = "othersList" onChange= "accountList()" width="1000">
                <option>Account 1</option>
                <option>Account 2</option>
                <option>Account 3</option>

            </select>
            </form>
        
        </div> 
       
    )
}

export default TransferPage
