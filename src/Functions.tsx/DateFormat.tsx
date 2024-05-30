export default function DateFormat(props: any) {
  const date = props.date;

  // Define an array of month abbreviations
  const months = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
      
  // Convert the array to a Date object - adjust for 0-based month index
  const dateObj = new Date(date[0], date[1] - 1, date[2]);
  // --------------------- year --- month ------ day
  // In the following gethMoth() function, we obtain Jan as the 0th month.

  // Extract the components of the date
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const output = `${year}年${month}月${day}日`

  // Format the date as "Month Day, Year"
  return output;
}