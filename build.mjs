import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('.', import.meta.url));
const dist = join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js']) {
  await cp(join(root, file), join(dist, file));
}
await cp(join(root, 'assets'), join(dist, 'assets'), { recursive: true });

console.log('Static site prepared in dist/');
