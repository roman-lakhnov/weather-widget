export const weatherType = (main) => {
	const mainType = {
		Thunderstorm: 'Thunderstorm',
		Drizzle: 'Drizzle',
		Rain: 'Rain',
		Clear: 'Clear',
		Clouds: 'Clouds	',
	}

	const widgetType = {
		rainy: 'rainy',
		sunny: 'sunny',
		cloudy: 'cloudy',
		partlyCloudy: 'partlyCloudy',
	}
	if (main == mainType.Clear) {
		return widgetType.sunny
	} else if (main == mainType.Clouds) {
		return widgetType.partlyCloudy
	} else if (
		main == mainType.Rain ||
		mainType.Drizzle ||
		mainType.Thunderstorm
	) {
		return widgetType.rainy
	} else {
		return widgetType.cloudy
	}
}
