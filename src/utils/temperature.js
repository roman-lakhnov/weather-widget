export const kelvinToCelsius = (kelvin) => {
	return (kelvin - 273.15).toFixed()
}
export const kelvinToFahrenheit = (kelvin) => {
	return ((kelvin - 273.15) * 1.8 + 32).toFixed(1)
}
