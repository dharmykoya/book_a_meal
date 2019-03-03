const Todaydate = {
  getDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const today = `${day}-${month}-${year}`;
    return today;
  },
};
export default Todaydate;
