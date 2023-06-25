export const getTimeDifference = (timeDifference: number) => {
  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = millisecondsPerSecond * 60;
  const millisecondsPerHour = millisecondsPerMinute * 60;
  const millisecondsPerDay = millisecondsPerHour * 24;
  const millisecondsPerMonth = millisecondsPerDay * 30;
  const millisecondsPerYear = millisecondsPerDay * 365;

  const secondsAgo = Math.floor(timeDifference / millisecondsPerSecond);
  const minutesAgo = Math.floor(timeDifference / millisecondsPerMinute);
  const hoursAgo = Math.floor(timeDifference / millisecondsPerHour);
  const daysAgo = Math.floor(timeDifference / millisecondsPerDay);
  const monthsAgo = Math.floor(timeDifference / millisecondsPerMonth);
  const yearsAgo = Math.floor(timeDifference / millisecondsPerYear);

  if (timeDifference >= millisecondsPerYear) {
    return `${yearsAgo}년 전`;
  } else if (timeDifference >= millisecondsPerMonth) {
    return `${monthsAgo}달 전`;
  } else if (timeDifference >= millisecondsPerDay) {
    return `${daysAgo}일 전`;
  } else if (timeDifference >= millisecondsPerHour) {
    return `${hoursAgo}시간 전`;
  } else if (timeDifference >= millisecondsPerMinute) {
    return `${minutesAgo}분 전`;
  } else if (timeDifference >= millisecondsPerSecond) {
    return `${secondsAgo}초 전`;
  } else {
    return "Just now";
  }
};
