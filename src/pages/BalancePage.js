import React from 'react'

function BalancePage() {
    const [user, setUser] = useState({});
    const [accounts, setAccounts] = useState([]);

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
                                setAccounts(data);
                                });
        }
    }, [user])
    
    useEffect(() => {
        console.log(accounts);
    }, [accounts])

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
                    <tr ng-repeat="row in balanceList | filter: balance">
                        <td ng-bind="row.name"></td>
                        <td ng-bind="row.number"></td>
                        <td ng-bind="row.balance"></td>
                    </tr>
                </tbody>
            </table>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Refresh Button</button>
        </div>
    )
}


export default BalancePage
