export function formatNumber(value: number) {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
  }).format(value);

  return formattedNumber;
}

export function convertToCompactNumber(value: number) {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

  return formattedNumber;
}
