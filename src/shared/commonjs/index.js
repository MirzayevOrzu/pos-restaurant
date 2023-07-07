import path from 'path';
import { fileURLToPath } from 'url';

export const __filename = (url) => fileURLToPath(url);
export const __dirname = (url) => path.dirname(__filename(url));
