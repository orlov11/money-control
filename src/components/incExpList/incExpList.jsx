import IncExpItem from '../incExpItem/incExpItem'

const IncExpList = () => {
	return (
		<>
			<IncExpItem sum={1000} remains={9000} />
			<IncExpItem sum={5000} remains={14000} />
			<IncExpItem sum={2000} remains={16000} />

			<button className="btn">К операциzv</button>
		</>
	)
}

export default IncExpList
