import React from 'react';
import Quality from "./quality";
import BookMark from "./bookMark";

const User = ({ user, ...rest }) => {
	return (
		<tr>
			<td>{user.name}</td>
			<td>
				{user.qualities.map((item) => (
					<Quality color={item.color} name={item.name} key={item._id} />
				))}
			</td>
			<td>{user.profession.name}</td>
			<td>{user.completedMeetings}</td>
			<td>{user.rate}/5</td>
			<td><BookMark status={user.bookmark} onToggleBookMark={() => rest.onToggleBookMark(user._id)} /></td>
			<td>
				<button
					onClick={() => rest.onDelete(user._id)}
					className="btn btn-danger"
				>
					delete
				</button>
			</td>
		</tr>
	)
}

export default User;