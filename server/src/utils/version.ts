import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export const APP_VERSION: string = (() => {
  if (process.env.APP_VERSION) {
    return process.env.APP_VERSION;
  }

  if (process.env.npm_package_version) {
    return process.env.npm_package_version;
  }

  try {
    const candidatePaths = [
      join(__dirname, '..', 'package.json'), // dist/src -> dist/package.json if copied
      join(__dirname, '..', '..', 'package.json'), // dist/src -> project root if dist placed differently
      join(process.cwd(), 'package.json'), // working directory root
    ];
    for (const p of candidatePaths) {
      if (existsSync(p)) {
        return JSON.parse(readFileSync(p, 'utf8')).version ?? 'unknown';
      }
    }
  }
  catch {
    return 'unknown';
  }
})();
