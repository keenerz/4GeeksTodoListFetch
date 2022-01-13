import React, { useState, useEffect } from "react";

const TaskList = () => {
	let [task, setTask] = useState("");
	let [list, setList] = useState([]);
	let [place, setPlace] = useState("No tasks, add a task");
	let [footer, setFooter] = useState("items");

	// Input and mechanics
	const handleInput = (e) => {
		if (e.keyCode === 13 && e.target.value != "") {
			if (e.target.value.trim() === "") {
				alert("Error 404: words not found");
				setTask("");
			} else {
				setTask(e.target.value);
				setList([...list, { label: task, done: false }]);
				setTask("");
				getList([...list, { label: task, done: false }].length);
				getFooter([...list, { label: task, done: false }].length);
				saveTodoList([...list, { label: task, done: false }]);
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

	//Fetch Integration
	const getTodos = async () => {
		const options = {
			method: "GET",
		};
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/keenerz",
			options
		);
		setList(await response.json());
	};

	useEffect(() => {
		getTodos();
	}, []);

	const saveTodoList = async (newTodos) => {
		const options = {
			method: "PUT",
			body: JSON.stringify(newTodos),
			headers: { "content-type": "application/json" },
		};
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/keenerz",
			options
		);
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
								{singleTask.label}{" "}
								<div
									className="listDelete"
									onClick={() => {
										setList(
											list.filter(
												(deleteTask, j) => j !== i
											)
										);
										saveTodoList(
											list.filter(
												(deleteTask, j) => j !== i
											)
										);
										getList();
										getFooter();
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
