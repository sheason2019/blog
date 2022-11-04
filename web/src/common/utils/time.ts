export const createTimeString = (timeStamp: number) => {
  const time = new Date(timeStamp * 1000);

  const year = time.getFullYear();
  const month = (time.getMonth() + 1).toString().padStart(2, "0");
  const date = time.getDate().toString().padStart(2, "0");

  const hour = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${date} ${hour}:${minutes}`;
};
