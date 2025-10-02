export const useFormateDateShort = (date:Date) => {

  date = date.toLocaleDateString("en-US");
  return date;
}

