import FormAccount from '../../components/FormAccount/formAccout'
import './account-page.scss'
const AccoutPage = () => {
	return (
		<section>
			<div className="container">
				<h1 className="title_page">Счета и редактирование</h1>
				<div className="new-account">
					<h2 className="title_page">Создание нового счета</h2>
					<FormAccount />
				</div>
			</div>
		</section>
	)
}

export default AccoutPage
