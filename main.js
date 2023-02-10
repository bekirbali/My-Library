const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("tr-TR", {
    weekday: "long",
    month: "long",
  }).format(date);
}
console.log(formatDate(today));
