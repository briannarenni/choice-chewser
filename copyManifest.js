import { copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = resolve(__dirname, 'manifest.json');
const destination = resolve(__dirname, 'dist/manifest.json');

copyFileSync(source, destination);
console.log('manifest.json was copied to the dist folder');
