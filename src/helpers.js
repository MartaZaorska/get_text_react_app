export const getDifferenceDate = time => {
  const now = new Date().getTime();
  const diff = now - time;
  if (diff < 60000) return "<1min";
  if (diff < 3600000) return `${parseInt(diff / 60000)}min`;
  if (diff < 86400000) return `${parseInt(diff / 3600000)}h`;
  if (diff < 2073600000) return `${parseInt(diff / 86400000)}d`;
  if (diff >= 2073600000) return `${parseInt(diff / 2073600000)}w`;
};
