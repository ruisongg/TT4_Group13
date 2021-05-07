import React,  { useState, useEffect }  from 'react'

function AccountPage() {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    return (
        <div>
            <h1>My Account</h1>
            <table>
                <tr>
                <th scope="row">Customer ID: {user.custID}</th>
                </tr>
                <tr>
                <th scope="row">Account Key: {user.accountKey}</th>
                </tr>
                <tr>
                <th scope="row">First Name: {user.firstName}</th>
                </tr>
                <tr>
                <th scope="row">Last Name: {user.lastName}</th>
                </tr>
                <tr>
                <th scope="row">NRIC: {user.nric}</th>
                </tr>
                <tr>
                <th scope="row">Age: {user.age}</th>
                </tr>
                <tr>
                <th scope="row">Phone Number: {user.phoneNumber}</th>
                </tr>
                <tr>
                <th scope="row">E-mail: {user.email}</th>
                </tr>
            </table>
        </div>
    )
}

export default AccountPage