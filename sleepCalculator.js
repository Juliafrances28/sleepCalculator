// the goal is to get the number of hours sleep each night. One opition is using an else/if statement.
const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesdsay") {
    return 7;
  } else if (day === "wednesday") {
    return 7;
  } else if (day === "thursday") {
    return 7;
  } else if (day === "friday") {
    return 8;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 7;
  } else {
    return "Input is not a valid day";
  }
};

// console.log(getsleepHours('tuesday'));
// console.log(getsleepHours('wednesday'));
// console.log(getsleepHours('friday'));

// the goal is to get the number of hours sleep each night. a second opition is using an switch statement.

switch (day) {
  case "Monday":
    return 8;
    break;
  case "Tuesday":
    return 7;
    break;
  case "Wednesday":
    return 7;
    break;
  case "Thursday":
    return 7;
    break;
  case "Friday":
    return 7;
    break;
  case "Saturday":
    return 8;
    break;
  case "Sunday":
    return 8;
    break;
  default:
    return "no sleep";
}
