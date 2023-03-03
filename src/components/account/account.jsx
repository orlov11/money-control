const Account = ({ name, sum }) => {
	return (
		<li className="card">
			<div>{name}</div>
			<div>Баланс: {sum}Р</div>
		</li>
	)
}

export default Account
