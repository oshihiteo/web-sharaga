function timeUntilNewYear() {
	const mskDate = new Date().toLocaleString(`en-US`, { timeZone: `Europe/Moscow` })
	const now = new Date(mskDate);
	console.log(now);
	const new_year = new Date(now.getFullYear() + 1, 0, 1);
	const difference = getDateDifference(new_year, now);
	console.log(
	 `Time to New Year: ${difference.days} days, ${difference.hours} hours, ${difference.minutes} minutes, ${difference.seconds} seconds`);
}
	
function getDateDifference(now, new_year) {
	let differenceInMilliseconds = now - new_year;

	const millisecondsInSecond = 1000;
	const millisecondsInMinute = 1000 * 60;
	const millisecondsInHour = millisecondsInMinute * 60;
	const millisecondsInDay = millisecondsInHour * 24;

	const days = Math.floor(differenceInMilliseconds / millisecondsInDay);
	differenceInMilliseconds %= millisecondsInDay;

	const hours = Math.floor(differenceInMilliseconds / millisecondsInHour);
	differenceInMilliseconds %= millisecondsInHour;

	const minutes = Math.floor(differenceInMilliseconds / millisecondsInMinute);

	const seconds = Math.floor(differenceInMilliseconds / millisecondsInSecond);

	return {days, hours, minutes, seconds};
}

timeUntilNewYear();
