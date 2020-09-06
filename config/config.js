/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "", "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			disabled: true,
			position: "top_bar",
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: "12",
				showPeriod: "true",
			},
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url:
              "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
					},
				],
			},
		},
		{
			module: "compliments",
			position: "lower_third",
		},
		{
			disabled: true,
			module: "MMM-beers",
			position: "bottom_left",
			config: {
				title: "On Tap!",
				leftTap: {
					name: "Seltzer",
					description: "A bubbly water",
					abv: "0%",
					ibu: "0",
				},
				rightTap: {
					name: "Seltzer",
					description: "A bubbly water",
					abv: "0%",
					ibu: "0",
				},
			},
		},
		{
			disabled: false,
			module: "MMM-DarkSkyForecast",
			header: "Rosenberg Weather",
			position: "top_right",
			classes: "default everyone",
			config: {
				apikey: "1dfafb7f3289a0468ff567ec2a70efcb",
				latitude: "29.558250",
				longitude: "-95.808830",
				iconset: "3c",
				concise: true,
				forecastLayout: "table",
				units: "us",
			},
		},

		{
			disabled: true,
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Rosenberg",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "",
				units: "imperial",
				timeFormat: "12",
				showPeriod: "true",
			},
		},
		{
			disabled: true,
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: false,
				locationID: "4544349", //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "69d003aac1b030ead60b9f65cf49c8d7",
				units: "imperial",
				colored: true,
			},
		},
		{
			disabled: true,
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml",
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
			},
		},
		// {
		// 	disable: true,
		// 	module: "MMM-uber",
		// 	position: "bottom_right",
		// 	header: "Uber (Rosenberg)",
		// 	config: {
		// 		lat: 29.558250, // use your exact pickup loaction
		// 		lng: -95.808830, // use your exact pickup loaction
		// 		uberServerToken: "w9z_lGHo02Fd3E75c7JVAi8IbpcfA7tklCm3iMZt",
		// 	},
		// },
		// {
		// 	disable: true,
		// 	module: "MMM-lyft",
		// 	position: "bottom_right",
		// 	header: "Lyft (Rosenberg)",
		// 	config: {
		// 		lat: 29.558250, // use your exact pickup loaction
		// 		lng: -95.808830, // use your exact pickup loaction
		// 		clientId: "CeGwNKdQkTrt",
		// 		clientSecret: "CsBrB_Ok31SbR5B7z3OY1h2y0m2tjQHv",
		// 	},
		// },
		{
			disabled: true,
			module: "MMM-AVStock",
			position: "bottom_bar", //"bottom_bar" is better for `mode:ticker`
			config: {
				apiKey: "YXFV8AOAL8XOT4FW", // https://www.alphavantage.co/
				timeFormat: "YYYY-MM-DD HH:mm:ss",
				symbols: ["SLB", "HAL", "CHK", "GOOGL", "AAPL", "DOW", "SPX"],
				//alias: ["Schlumberger"], //Easy name of each symbol. When you use `alias`, the number of symbols and alias should be the same. If value is null or "", symbol string will be used by default.
				tickerDuration: 90, // Ticker will be cycled once per this second.
				chartDays: 7, //For `mode:series`, how much daily data will be taken. (max. 90)
				poolInterval: 1000 * 15, // If your AV account is free, at least 13 sec is needed.
				mode: "ticker", // "table", "ticker", "series"
			},
		},
	],
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
