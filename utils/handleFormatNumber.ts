export const handleForamtNumber = (number: number|null) => {
  if(number === null){
    return "--"
  }
  if (number > 1000) {
    const formattedNumber = number / 1000;
    return `${formattedNumber.toFixed(2)}K`;
  } else {
    return number.toFixed(2);
  }
};
