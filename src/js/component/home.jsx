import React, { useState } from "react";
import TaskList from "./TaskList.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container-flex">
			<div className="pt-5 text-center mx-auto">
				<h1 className="fw-light title opacity-25">todos</h1>
			</div>
			<div className="row px-5 d-flex justify-content-center">
				<div className="text-center d-flex justify-content-center">
					<TaskList />
				</div>
			</div>
		</div>
	);
};

export default Home;
