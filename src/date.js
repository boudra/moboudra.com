export function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
