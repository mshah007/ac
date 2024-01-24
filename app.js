const btnElement = document.querySelector("#btn");
const birthdayEl = document.querySelector("#birthday");
const yearEl = document.querySelector("#years");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter Birthday!");
  } else {
    const age1 = getAge(birthdayValue);
    yearEl.textContent = age1;
  }
}
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}
btnElement.addEventListener("click", calculateAge);
