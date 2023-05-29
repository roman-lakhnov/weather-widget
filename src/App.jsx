import React, { useEffect, useState } from 'react'
import Widget from './components/widget/Widget'

const App = () => {
	const [weather, setWeather] = useState({})

	async function fetchWeather() {
		const response = await fetch(
			'https://api.openweathermap.org/data/2.5/weather?lat=50.4333&lon=30.5167&appid=83acca1db5e1c15bc419fa893118b78f',
		)
		const jsonData = await response.json()
		setWeather(jsonData)
	}
	useEffect(() => {
		fetchWeather()
	}, [])

	return (
		weather && (
			<div>
				<Widget weather={weather} />
			</div>
		)
	)
}

export default App
