import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

async function folderIsCreate(): Promise<boolean> {
  await Permissions.getAsync(Permissions.CAMERA_ROLL);
  const response = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}/Bogo`);
  return response.exists;
}

async function createFolder() {
  await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}/Bogo`);
}

async function downloadBook(uri: string, name: string) {
  await FileSystem.downloadAsync(
    uri,
    `${FileSystem.documentDirectory}/Bogo/${name}`,
  );
}

async function readDownloadedBook(name: string): Promise<string> {
  const base64: string = await FileSystem.readAsStringAsync(
    `${FileSystem.documentDirectory}/Bogo/${name}`,
    {
      encoding: FileSystem.EncodingType.Base64,
    },
  );
  return base64;
}

async function deleteDownloadedBook(name: string) {
  FileSystem.deleteAsync(`${FileSystem.documentDirectory}/Bogo/${name}`, { idempotent: false });
}

async function listDownloadedBooks(): Promise<string[]> {
  const dirContent = await FileSystem.readDirectoryAsync(`${FileSystem.documentDirectory}/Bogo`);
  return dirContent;
}

export {
  folderIsCreate,
  createFolder,
  downloadBook,
  readDownloadedBook,
  deleteDownloadedBook,
  listDownloadedBooks,
};
