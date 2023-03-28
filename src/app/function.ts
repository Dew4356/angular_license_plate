export function getBase64(
  file: File
): Promise<FileReader['result'] | ProgressEvent<FileReader>> {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res(reader.result);
    reader.onerror = (error) => rej(error);
  });
}
