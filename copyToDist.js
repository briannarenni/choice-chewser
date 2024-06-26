import { copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function copyFileToDist (filePath) {
  const source = resolve(__dirname, filePath);
  const destination = resolve(__dirname, 'dist', filePath);

  copyFileSync(source, destination);
  console.log(`${filePath} was copied to the dist folder`);
}

copyFileToDist('manifest.json');
