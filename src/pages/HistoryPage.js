import React, { useState, useEffect } from 'react'

function HistoryPage() {

    const [user, setUser] = useState({});
    const [hist, setHist] = useState([])

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
                              //  console.log(JSON.stringify(data))
                                setHist([data]);
                                console.log(hist)
                                });
        }
    }, [user])

    return (
        <div>
          <h1>{user.firstName}'s History</h1>
        
          <table class="table table-striped table-bordered table-condensed">
            <thead>
              <tr>
                <th>Date</th>
                <th>Payee</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr ng-repeat="row in transactionList | filter: transType">
                <td ng-bind="row.date"> date </td>
                <td ng-bind="row.payee"> payee </td>
                <td ng-bind="row.description"> desc </td>
                <td ng-bind="row.type"> egift </td>
                <td ng-bind="row.amount | currency"> amt </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default HistoryPage
