import {React, useState} from 'react';
import {Link} from "react-router-dom";

function UserNavbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="/">Navbar</a>
				<button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav ms-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<Link to={'/user/contacts'} className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
							<Link to={'/user/contacts/new'} className="nav-link">New Contact</Link>
						</li>
					</ul>
				</div>
		    </div>
		</nav>
	)
}

export default UserNavbar