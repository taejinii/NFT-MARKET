export const getTimeDiffrence = (timeDifference: number) => {
  const millisecondsPerMinute = 1000 * 60;
  const millisecondsPerHour = 1000 * 60 * 60;
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30;

  if (timeDifference >= millisecondsPerMonth) {
    const monthsAgo = Math.floor(timeDifference / millisecondsPerMonth);
    return `${monthsAgo}달 전`;
  } else if (timeDifference >= millisecondsPerDay) {
    const daysAgo = Math.floor(timeDifference / millisecondsPerDay);
    return `${daysAgo}일 전`;
  } else if (timeDifference >= millisecondsPerHour) {
    const hoursAgo = Math.floor(timeDifference / millisecondsPerHour);
    return `${hoursAgo}시간 전`;
  } else if (timeDifference >= millisecondsPerMinute) {
    const minutesAgo = Math.floor(timeDifference / millisecondsPerMinute);
    return `${minutesAgo}분 전`;
  } else {
    return "Just now";
  }
};
