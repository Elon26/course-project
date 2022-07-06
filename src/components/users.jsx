import React, { useState } from 'react'
import api from "../api"

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll())
	const [number, setNumber] = useState(users.length)

	const handleDelete = userID => {
		setUsers(prevstate => prevstate.filter(user => user._id !== userID))
		setNumber(prevstate => prevstate - 1)
	}

	const renderPhrase = number => {
		let postfix = ''
		let middlefix = 'е'
		if (number >= 2 && number <= 4) {
			postfix = 'а'
			middlefix = 'у'
		}

		return `${number} человек${postfix} тусан${middlefix}т с тобой сегодня`
	}

	if (number !== 0) {
		return (
			<>
				<div className='badge bg-primary m-2 fw-bold fs-4'>{renderPhrase(number)}</div>

				<table className="table table-striped align-middle">
					<thead>
						<tr>
							<th scope="col">Имя</th>
							<th scope="col">Качества</th>
							<th scope="col">Профессия</th>
							<th scope="col">Встретился, раз</th>
							<th scope="col">Оценка</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{users.map(user => {
							return (
								<tr key={user._id}>
									<td>{user.name}</td>
									<td>{
										user.qualities.map(
											quality =>
												<span key={quality._id} className={'badge m-1  bg-' + quality.color}>{quality.name}</span>
										)
									}</td>
									<td>{user.profession.name}</td>
									<td>{user.completedMeetings}</td>
									<td>{user.rate}/5</td>
									<td><button className='btn btn-danger btn-sm m-2' onClick={() => handleDelete(user._id)}>delete</button></td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</>
		)
	}

	return <div className='badge bg-danger m-2 fw-bold fs-4'>Твоя рука тусанет с тобой сегодня</div>
}

export default Users