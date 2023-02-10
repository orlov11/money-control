const MainBtn = ({ name, onChange, activeClass, numClass }) => {
	return (
		<>
			<button
				onClick={() => onChange(numClass)}
				className={`main__btn  ${
					activeClass === numClass ? 'main__btn-active' : ''
				}`}>
				{name}
			</button>
		</>
	)
}

export default MainBtn
