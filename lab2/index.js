import { DateTime } from "luxon"

function timeUntilNewYear() {
	const now = DateTime.now().setZone("Europe/Moscow")
	const newYear = DateTime.fromObject({ year: now.year + 1, month: 1, day: 1 }, { zone: "Europe/Moscow" })

	const diff = newYear.diff(now, ["days", "hours", "minutes", "seconds"]).toObject()

	console.log(`Time to New Year: ${diff.days} days, ${diff.hours} hours, ${diff.minutes} minuts, ${diff.seconds} seconds`)
}

timeUntilNewYear()