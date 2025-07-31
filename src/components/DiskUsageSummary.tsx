import type { FileInfo } from "../types";
import { formatSize, oldestFileDate, largestFile } from "../utils";

type Props = { files: FileInfo[] };

export default function DiskUsageSummary({ files }: Props) {
    return (
        <section className="bg-zinc-800 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Disk Usage Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-zinc-700 p-4 rounded">
                    <p className="text-sm text-zinc-400">Total Size</p>
                    <p className="text-lg font-medium">
                        {files.length === 0 ? '—' : formatSize(files.reduce((acc, f) => acc + f.size, 0))}
                    </p>
                </div>
                <div className="bg-zinc-700 p-4 rounded">
                    <p className="text-sm text-zinc-400">Largest File</p>
                    <p className="text-lg font-medium">{largestFile(files)?.path.split('/').pop() ?? '—'}</p>
                </div>
                <div className="bg-zinc-700 p-4 rounded">
                    <p className="text-sm text-zinc-400">Oldest File</p>
                    <p className="text-lg font-medium">{oldestFileDate(files)}</p>
                </div>
            </div>
        </section>
    );
}
