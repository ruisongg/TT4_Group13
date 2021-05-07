import React from 'react'

function HistoryPage() {
    return (
        <div>
          <h1>History</h1>
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
