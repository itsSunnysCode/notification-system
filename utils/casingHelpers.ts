//replace underscore with space
export const replaceUWS = (str:string, isLowerCase?:boolean) => {
  if(!str) return "";
  if(isLowerCase) return str.replace(/_/g, ' ')?.toLowerCase();
  return str.replace(/_/g, ' ')
}
