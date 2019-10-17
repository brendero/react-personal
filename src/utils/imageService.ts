export const base64Encoding = (file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise<String>((resolve, reject) => {
    reader.onload = () => {
      if(reader.result !== null) {
        const base64String = reader.result.toString();
        resolve(base64String);
      }
    };
    reader.onerror = (err) => {
      reject(err)
    }
  })
}