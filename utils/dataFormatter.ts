export const formatUserFriendlyDate = (date: string) => {
  let tempDate = new Date(date);
  const month = tempDate.toLocaleString("default", { month: "long" });
  return `${tempDate.getDay()} ${month} ${tempDate.getFullYear()}`;
};

export const formatUserFriendlyTime = (date: string) => {
  let tempDate = new Date(date);
  return tempDate.toLocaleTimeString();
};

export const formatUserFriendlyPhone = (phone: string) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
};
