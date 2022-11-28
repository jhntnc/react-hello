import React from "react"

function Footer () {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark ">
            <p className="col-md-4 mb-0 text-white">© 2022, 4Geeks, PT-32, Chile</p>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
        </footer>
    )
}

export default Footer