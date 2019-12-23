export const getDifferenceDate = time => {
  const now = new Date().getTime();
  const diff = now - time;
  if (diff < 60000) return "<1min";
  if (diff < 3600000) return `${parseInt(diff / 60000)}min`;
  if (diff < 86400000) return `${parseInt(diff / 3600000)}h`;
  if (diff < 2073600000) return `${parseInt(diff / 86400000)}d`;
  if (diff >= 2073600000) return `${parseInt(diff / 2073600000)}w`;
};

export const getDateString = time => {
  const date = new Date(parseInt(time));
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth()}`;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  return `${date.getFullYear()}-${month}-${day}`;
};
