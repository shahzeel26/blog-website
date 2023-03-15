import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './Settings.css'
function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0mMt47pNfPXRZgp-NfCVunnT_lpqqY4XCQ&usqp=CAU" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Zeel' />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='zeel@gmail.com' />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='zeel' />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings