import React from 'react'
import './Nav.css'

function Nav(props) {
    return (
        <div className="Nav">
            <ul className="list">
                <li>
                SQL{' '}<span>editor</span>
                </li>
                <li onClick={props.download}>
                    Download Result
                </li>
            </ul>
        </div>
    )
}

export default Nav
