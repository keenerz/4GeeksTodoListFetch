import React, { useState } from "react";

const TaskList = () => {
	let [task, setTask] = useState("");
	let [list, setList] = useState([]);
	let [place, setPlace] = useState("No tasks, add a task");

	const handleInput = (e) => {
		if (e.keyCode == 13 && e.target.value != "") {
			setTask(e.target.value);
			setList([...list, task]);
			setTask("");
		}
	};

	const getList = () => {
		if (list.length > -1) {
			setPlace("What needs to be done?");
		} else {
			setPlace("No tasks, add a task");
		}
	};
	return (
		<div className="d-inline justify-content-center w-100 card-body">
			<div className="input-group fw-light">
				<input
					className="form-control fw-light ps-3 card-header"
					type="text"
					placeholder={place}
					onChange={(event) => setTask(event.target.value)}
					onKeyDown={(e) => {
						handleInput(e);
						getList(list.length);
					}}
					value={task}
				/>
			</div>
			<div className="list-group-flush" id="list">
				<ul>
					{list.map((singleTask, i) => {
						return (
							<li
								className="d-flex justify-content-between ps-3 py-2 text-muted fw-light fs-5 list-group-item"
								key={i}>
								{singleTask}{" "}
								<div
									className="listDelete"
									onClick={() => {
										setList(
											list.filter(
												(deleteTask) =>
													deleteTask !== singleTask
											)
										);
										getList(list.length);
									}}>
									x
								</div>
							</li>
						);
					})}
				</ul>
				<div className="ps-2 py-1 border-end border-start border-bottom text-muted fw-light text-start card-footer">
					<span>{list.length} Items</span>
				</div>
			</div>
		</div>
	);
};
export default TaskList;
