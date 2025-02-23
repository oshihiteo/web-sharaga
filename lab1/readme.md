## Lab 2

# JavaScript Code: Time Until New Year

This JavaScript code calculates the time remaining until the next New Year's Day in Moscow time and logs the result to the console.

## Functions

### `timeUntilNewYear()`

This function calculates the time remaining until the next New Year's Day.

1. **Get Current Time in Moscow:**
   - The current date and time in Moscow is fetched using `new Date().toLocaleString()` with the `Europe/Moscow` time zone.
   - The result is converted back into a `Date` object (`now`).

2. **Set New Year's Date:**
   - The date for the next New Year's Day is set to January 1st of the following year (`new_year`).

3. **Calculate Difference:**
   - The `getDateDifference` function is called to calculate the difference between `new_year` and `now`.

4. **Log Result:**
   - The time remaining until New Year's Day is logged in the format:  
     `Time to New Year: X days, Y hours, Z minutes, W seconds`.

---

### `getDateDifference(now, new_year)`

This helper function calculates the difference between two dates (`now` and `new_year`) and returns the result in days, hours, minutes, and seconds.

1. **Calculate Difference in Milliseconds:**
   - The difference between the two dates is calculated in milliseconds.

2. **Convert Milliseconds to Days, Hours, Minutes, and Seconds:**
   - The total milliseconds are converted into days, hours, minutes, and seconds using modular arithmetic and division.

3. **Return Result:**
   - The function returns an object containing the calculated values:  
     `{ days, hours, minutes, seconds }`.

---

## Execution

- The `timeUntilNewYear()` function is called at the end of the script to execute the logic and log the result.

---
