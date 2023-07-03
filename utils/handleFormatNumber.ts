export const handleForamtNumber = (number: number) => {
  if (number > 1000) {
    const formattedNumber = number / 1000;
    return `${formattedNumber.toFixed(2)}K`;
  } else {
    return number.toFixed(2);
  }
};
