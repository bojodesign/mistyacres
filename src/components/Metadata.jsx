import { FILE_METADATA } from '../fileMetadata';

function FileMetadata({ filePath }) {
    const fileInfo = FILE_METADATA[filePath];
    const lastModified = new Date(fileInfo?.lastModified || new Date());

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[lastModified.getMonth()];

    return monthName;
}


export default FileMetadata;