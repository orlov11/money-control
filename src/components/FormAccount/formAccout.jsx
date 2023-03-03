import React, { useState } from 'react'
import Input from '../form/input/input'
import Select from '../form/select/select'
import './formAccout.scss'
import account from './accountSettings'

const FormAccount = () => {
	const [data, setData] = useState({
		name: '',
		account: ''
	})

	const handleSubmit = e => {
		e.preventDefault()
		console.log(data)
		setData({ name: '', account: '' })
	}
	const handleChange = target => {
		setData(prevState => ({
			...prevState,
			[target.name]: target.value
		}))
	}
	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<Input
					label="Название счёта"
					name="name"
					value={data.name}
					onChange={handleChange}
				/>
				<Select
					label="Тип счёта"
					name="account"
					value={data.account}
					onChange={handleChange}
					option={account}
				/>

				<button className="form_btn">Завести счет</button>
			</form>
		</>
	)
}

export default FormAccount
