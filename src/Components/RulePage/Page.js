import React from 'react'
import './Page.css'

function Page() {
    return (
        <div className="page">
            <p>Easily query your data.</p>
            <p>You can edit your data directly from result</p>
            <p>You can you sql clauses in your query, go and try pasting below line to your editor</p>
            <p>{`SELECT * FROM CSV(?, {headers: true, separator:','}) where customerID='ALFKI';`}</p>
            <p>and then try by removing where caluse</p>
        </div>
    )
}

export default Page
