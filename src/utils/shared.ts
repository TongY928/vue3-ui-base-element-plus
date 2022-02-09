// name: toDoList => to-do-list
export const humpToLine = (str: string): string => {
  return str.replace(/(A-Z)/g, '-$1').toLocaleLowerCase()
}
