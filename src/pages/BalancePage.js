import React from 'react'

function BalancePage() {
    const [user, setUser] = useState({});
<<<<<<< HEAD
    const [accounts, setAccounts] = useState([]);
=======
>>>>>>> 7906ae00918438d3df3f68352f8118aadd3211bc

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    useEffect(() => {
        if (user.custID != null)
        {
<<<<<<< HEAD
            fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts",{
=======
            fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",{
>>>>>>> 7906ae00918438d3df3f68352f8118aadd3211bc
                method: 'POST',
                headers: { 'content-type': 'application/json',
                            'x-api-key': 'QNd2HPwfhv2bK2pNt4pfl79YaNoq7p0X7XeSPkKY' },
                body: `{ "custID": ${user.custID},"accountKey": "${user.accountKey}" }`
                }).then(respond => respond.json())
                .then(data => {
                                console.log(JSON.stringify(data))
<<<<<<< HEAD
                                setAccounts(data);
                                });
        }
    }, [user])
    
    useEffect(() => {
        console.log(accounts);
    }, [accounts])
=======
                                });
        }
    }, [user])
>>>>>>> 7906ae00918438d3df3f68352f8118aadd3211bc

    return (
        <div>
            <h1>Balance Page</h1>

            <img src="https://www.pinclipart.com/picdir/big/117-1177303_1-dbs-group-holdings-ltd-dbs-bank-logo.png" width="250" height="auto" />
            <h1 className="h3 mb-3 fw-normal">Account Balance</h1>
            <table class="table table-striped table-bordered table-condensed">
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Account Balance</th>
                    </tr>
                </thead>
                <tbody>
<<<<<<< HEAD
                    <tr ng-repeat="row in balanceList | filter: balance">
=======
                    <tr ng-repeat="row in balanceList | filter: balanceType">
>>>>>>> 7906ae00918438d3df3f68352f8118aadd3211bc
                        <td ng-bind="row.name"></td>
                        <td ng-bind="row.number"></td>
                        <td ng-bind="row.balance"></td>
                    </tr>
                </tbody>
            </table>

<<<<<<< HEAD
            <button className="w-100 btn btn-lg btn-primary" type="submit">Refresh Button</button>
=======
            <button className="w-100 btn btn-lg btn-primary" type="submit">Refresh</button>
>>>>>>> 7906ae00918438d3df3f68352f8118aadd3211bc
        </div>
    )
}


export default BalancePage
