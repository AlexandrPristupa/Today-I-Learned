export const findEmailDomain = (address) => {
  return address.substring(address.lastIndexOf("@") +1);
};
