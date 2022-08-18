export const dateStringToDate = (dateString: string): Date => {
  //28/10/2020
  const dateParts = dateString.split("/").map((value) => +value); //[28,10,2020]

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
