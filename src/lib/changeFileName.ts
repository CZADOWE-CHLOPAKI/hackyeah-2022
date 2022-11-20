export const changeFileName = (file: File, newName: string): File => {
  const blob = file.slice(0, file.size, file.type);

  const newFile = new File([blob], newName, { type: file.type });
  return newFile;
};
