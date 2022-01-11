import React, { useState } from "react";

const TaskList = () => {
	let [task, setTask] = useState("");
	let [list, setList] = useState([]);

	const handleInput = (e) => {
		if (e.keyCode == 13) {
			setTask(e.target.value);
			setList([...list, task]);
			setTask("");
		}
	};

	return (
		<div className="d-inline justify-content-center card">
			<div className="input-group fw-light">
				<input
					className="form-control fw-light ps-3"
					type="text"
					placeholder="To Do List"
					onChange={(event) => setTask(event.target.value)}
					onKeyDown={(e) => handleInput(e)}
					value={task}
				/>
			</div>
			<div className="w-100 h-100" id="list">
				<ul>
					{list.map((singleTask, i) => {
						return (
							<li
								className="d-flex justify-content-between ps-3 pe-4 py-2 border-end border-start border-bottom text-muted fw-light fs-5"
								key={i}>
								{singleTask}
							</li>
						);
					})}
				</ul>
				<div className="ps-3 py-1 border-end border-start border-bottom text-muted fw-light fs-6 text-start card-footer">
					<span>{list.length} Items</span>
				</div>
			</div>
		</div>
	);
};
export default TaskList;
