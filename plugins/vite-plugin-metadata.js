import fs from 'fs';
import path from 'path';

export default function fileMetadataPlugin(options = {}) {
	const {
		targetFiles = [], // Array of files to track
		metadataFile = 'fileMetadata.js' // The file that will contain the metadata
	} = options;

	return {
		name: 'file-metadata',
		transform(code, id) {
			// Check if this is the metadata file
			if (id.endsWith(metadataFile)) {
				const metadata = {};

				// Process each target file
				targetFiles.forEach(file => {
					const filePath = path.resolve(file);
					try {
						const stats = fs.statSync(filePath);
						metadata[file] = {
							lastModified: stats.mtime.toISOString()
						};
					} catch (error) {
						console.error(`Error reading file stats for ${file}:`, error);
						metadata[file] = { lastModified: 'unknown' };
					}
				});

				// Create the export code
				return `export const FILE_METADATA = ${JSON.stringify(metadata, null, 2)};`;
			}
			return code;
		}
	};
}