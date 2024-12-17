export const getAccount = async (setChange) => {
  const data = await JSON.parse(localStorage.getItem("Account"));

  if (!data) {
    setChange({ AccountName: "Default", AccountID: "0x3f46bg423j43h4j35b87d" });
    return 0;
  }
  setChange(data);
};
export const setAccount = async ({ data }) => {
  localStorage.setItem("Account", JSON.stringify(data));
};
