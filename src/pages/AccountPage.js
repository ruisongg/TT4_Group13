import React, {useState, useEffect} from 'react'

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
                <th scope="row">Account Key:</th>
                </tr>
                <tr>
                <th scope="row">First Name:</th>
                </tr>
                <tr>
                <th scope="row">Last Name:</th>
                </tr>
                <tr>
                <th scope="row">NRIC:</th>
                </tr>
                <tr>
                <th scope="row">Age:</th>
                </tr>
                <tr>
                <th scope="row">Phone Number:</th>
                </tr>
                <tr>
                <th scope="row">E-mail:</th>
                </tr>
            </table>
        </div>
    )
}

export default AccountPage