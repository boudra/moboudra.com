export function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" }).slice(0, 3);
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}
