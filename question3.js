const folders = [
  {
    id: 5,
    name: "Klasör 1",
    files: [
      { id: 16, name: "profil.jpg" },
      { id: 18, name: "manzara.jpg" },
    ],
  },
  {
    id: 6,
    name: "Klasör 2",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 22, name: "dosya.xls" },
    ],
  },
  {
    id: 7,
    name: "Klasör 3",
  },
];

//Returns the folder containing the given file id
function findFolderByFileId(fileId) {
  return folders.find((folder) => {
    return folder?.files.find((file) => file.id === fileId);
  });
}
////Returns the folder containing the given folder id
function findFolderByFolderId(folderId) {
  return folders.find((folder) => folder.id === folderId);
}

// moves file to folder
function move(fileId, folderId) {
  let currentFolder = findFolderByFileId(fileId);

  let file = currentFolder.files.find((file) => file.id === fileId);
  let fileIndex = currentFolder.files.indexOf(file);
  currentFolder.files.splice(fileIndex, 1);

  let targetFolder = findFolderByFolderId(folderId);
  if (!targetFolder.files) {
    targetFolder.files = [];
  }

  targetFolder.files.push(file);
  console.log(folders);
}
//move(16, 6);

// copies the file to the desired folder
function copy(fileId, folderId) {
  let currentFolder = findFolderByFileId(fileId);
  let file = currentFolder.files.find((file) => file.id === fileId);

  let targetFolder = findFolderByFolderId(folderId);
  if (!targetFolder.files) {
    targetFolder.files = [];
  }

  targetFolder.files.push({ ...file });
  console.log(folders);
}
//copy(18, 7);

// remove the folder
function remove(fileId) {
  let currentFolder = findFolderByFileId(fileId);
  let file = currentFolder.files.find((file) => file.id === fileId);
  let fileIndex = currentFolder.files.indexOf(file);
  currentFolder.files.splice(fileIndex, 1);
  console.log(folders);
}
//remove(17);

// deletes the folder and all the files in it
function removeFolder(folderId) {
  const currentFolder = findFolderByFolderId(folderId);
  const index = folders.indexOf(currentFolder);
  folders.splice(index, 1);
  console.log(folders);
}
//removeFolder(6);

// finds the folder of the file given the id
function parentFolderOf(fileId) {
  let currentFolder = findFolderByFileId(fileId);
  console.log(currentFolder.id);
}
//parentFolderOf(17);
