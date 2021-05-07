import React, { useState, useEffect } from 'react'

function HistoryPage() {

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    useEffect(() => {
        if (user.custID != null)
        {
            fetch("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",{
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
          <h1>{user.lastName}'s History</h1>
          <table class="table table-striped table-bordered table-condensed">
            <thead>
              <tr>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr ng-repeat="row in transactionList | filter: transType">
                <td ng-bind="row.description"></td>
                <td ng-bind="row.type"></td>
                <td ng-bind="row.amount | currency"></td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default HistoryPage
