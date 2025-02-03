import * as FileSystem from "expo-file-system";

export const saveFile = async (fileUri: string, folderName: any) => {
  const fileName = fileUri.split("/").pop(); // Récupère le nom du fichier
  const newPath = `${FileSystem.documentDirectory}${folderName}/${fileName}`;

  try {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}${folderName}/`,
      { intermediates: true }
    );
    await FileSystem.copyAsync({ from: fileUri, to: newPath });
    return newPath;
  } catch (error) {
    console.error("Erreur de sauvegarde :", error);
    return fileUri; // Si erreur, on garde le fichier temporaire
  }
};
