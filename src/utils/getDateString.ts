const getDateString = (dateString: string) => {
  const originalDate = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(originalDate);

  return formattedDate;
};

export default getDateString;
