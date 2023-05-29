import React from 'react'
import './Widget.css'
import { kelvinToCelsius, kelvinToFahrenheit } from '../../utils/temperature'
import { weatherType } from '../../utils/weatherType'

const Widget = (props) => {
	if (!props.weather.weather || !props.weather.sys) {
		return
	}

	return (
		<div className={`wrapper ` + weatherType(props.weather?.weather[0]?.main)}>
			<div className={`widget ` + weatherType(props.weather?.weather[0]?.main)}>
				<div>
					<p>
						{props.weather?.weather[0]?.description.charAt(0).toUpperCase()}
						{props.weather?.weather[0]?.description.slice(1)}
					</p>
					<img
						src={`../../../public/${weatherType(
							props.weather?.weather[0]?.main,
						)}.png`}
						alt=""
					/>
				</div>
				<div className="vertical-line"></div>
				<div className="info">
					<h1>
						{props.weather?.name}, {props.weather?.sys?.country}
					</h1>
					<p className="day">
						{new Date().toLocaleString('en-us', { weekday: 'long' })}
					</p>
					<p className="c">{kelvinToCelsius(props.weather.main.temp)}°</p>
					<p className="f">{kelvinToFahrenheit(props.weather.main.temp)} F</p>
				</div>
			</div>
		</div>
	)
}

export default Widget
