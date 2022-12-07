import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Menu from "../components/Menu";

import "./MainLayout.scss";

function MainLayout() {
	const [active, setActive] = useState(false);

	return (
		<div className={`container ${active ? "active" : ""}`}>
			<Header active={active} setActive={setActive} />
			<div className="main-container">
				<div className="main">
					<div className="content">
						<div className="overlay">
							<Outlet />
						</div>
					</div>
				</div>
			</div>
			<Menu active={active} setActive={setActive} />
		</div>
	);
}

export default MainLayout;
