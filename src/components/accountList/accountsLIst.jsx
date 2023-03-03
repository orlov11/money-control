import Account from '../account/account'
import { Link } from 'react-router-dom'

const AccoutsList = () => {
	return (
		<>
			<Account name="Основной" sum="92000" />
			<Account name="На мелкие расходы" sum="41000" />
			<Account name="Подарки" sum="35000" />

			<button className="btn">
				<Link to="/account">К счетам</Link>
			</button>
		</>
	)
}

export default AccoutsList
