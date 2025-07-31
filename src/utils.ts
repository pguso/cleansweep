import type { FileInfo } from "./types";

export function formatSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let i = 0;
  while (size >= 1024 && i < units.length - 1) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(1)} ${units[i]}`;
}

export function oldestFileDate(files: FileInfo[]): string {
  if (files.length === 0) return '—';
  const dates = files.map(f => new Date(f.modified));
  const oldest = new Date(Math.min(...dates.map(d => d.getTime())));
  return oldest.toISOString().split('T')[0];
}

export function largestFile(files: FileInfo[]): FileInfo | null {
  if (files.length === 0) return null;
  return files.reduce((max, f) => (f.size > max.size ? f : max), files[0]);
}
