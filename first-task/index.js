document.addEventListener("DOMContentLoaded", function () {
  // Function to update the current day of the week and UTC time
  function updateDateTime() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.getTime();

    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent =
      currentDay;
    document.querySelector("[data-testid='currentUTCTime']").textContent =
      currentUTCTime;
  }

  // Update the values immediately when the page loads
  updateDateTime();

  setInterval(updateDateTime, 1000);

  document.querySelector("[data-testid='myTrack']").textContent = "Frontend";
});
