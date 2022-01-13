import React, { useState, useEffect } from "react";

const TaskList = () => {
	let [task, setTask] = useState("");
	let [list, setList] = useState([]);
	let [place, setPlace] = useState("No tasks, add a task");
	let [footer, setFooter] = useState("items");

	const handleInput = (e) => {
		if (e.keyCode === 13 && e.target.value != "") {
			if (e.target.value.trim() === "") {
				alert("Error 404: words not found");
				setTask("");
			} else {
				setTask(e.target.value);
				setList([...list, task]);
				setTask("");
				getList([...list, task].length);
				getFooter([...list, task].length);
			}
		}
	};

	const getList = () => {
		if (list.length > -1) {
			setPlace("What needs to be done?");
		} else {
			setPlace("No tasks, add a task");
		}
	};

	const getFooter = () => {
		if (list.length <= 0) {
			setFooter("item");
		} else {
			setFooter("items");
		}
	};

	return (
		<div className="d-inline justify-content-center w-100" id="whole">
			<div className="fw-light">
				<input
					className="form-control fw-light ps-5"
					id="inputZone"
					type="text"
					placeholder={place}
					onChange={(event) => setTask(event.target.value)}
					onKeyDown={(e) => {
						handleInput(e);
					}}
					value={task}
				/>
			</div>
			<div id="list">
				<ul>
					{list.map((singleTask, i) => {
						return (
							<li
								className="d-flex justify-content-between ps-5 py-2 text-muted fw-light fs-5"
								key={i}>
								{singleTask}{" "}
								<div
									className="listDelete"
									onClick={() => {
										setList(
											list.filter(
												(deleteTask, j) => j !== i
											)
										);
										console.log(list.length);
										getList([...list, task].length);
										getFooter([...list, task].length);
									}}>
									x
								</div>
							</li>
						);
					})}
				</ul>
				<div className="ps-3 py-2 fw-light text-start" id="footer">
					<span id="footerText">
						{list.length} {footer} left
					</span>
				</div>
			</div>
		</div>
	);
};
export default TaskList;
