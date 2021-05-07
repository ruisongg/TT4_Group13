import React, { useState, useEffect } from 'react'

function HistoryPage() {

    const [user, setUser] = useState({});
    const [hlist, setHist] = useState([])

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
                                setHist(data);
                                console.log(hlist)
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
                <td ng-bind="row.date">
                {
                    Object.keys(hlist).map((item, i) => (
                        <tr className="transactionList" key={i}>
                            <td className="input-label">{ hlist[item].datetime }</td>
                        </tr>
                    ))
                }
                </td>
                <td ng-bind="row.payee">
                {
                    Object.keys(hlist).map((item, i) => (
                        <tr className="transactionList" key={i}>
                            <td className="input-label">{ hlist[item].custID }</td>
                        </tr>
                    ))
                }
                </td>
                <td ng-bind="row.description">
                {
                    Object.keys(hlist).map((item, i) => (
                        <tr className="transactionList" key={i}>
                            <td className="input-label">{ hlist[item].message }</td>
                        </tr>
                    ))
                }
                </td>
                <td ng-bind="row.type">
                {
                    Object.keys(hlist).map((item, i) => (
                        <tr className="transactionList" key={i}>
                            <td className="input-label">{ hlist[item].eGift == true ? "eGift" : "" }</td>
                        </tr>
                    ))
                }
                </td>
                <td ng-bind="row.amount | currency">
                {
                    Object.keys(hlist).map((item, i) => (
                        <tr className="transactionList" key={i}>
                            <td className="input-label">{ hlist[item].amount }</td>
                        </tr>
                    ))
                }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    )
}

export default HistoryPage
