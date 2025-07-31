import type { FileInfo } from "../types";
import { formatSize } from "../utils";

type Props = {
    files: FileInfo[];
    onTrash: (filePath: string) => void;
};

export default function CleanupSuggestions({ files, onTrash }: Props) {
    return (
        <section className="bg-zinc-800 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Cleanup Suggestions</h2>
            {files.length === 0 ? (
                <p className="text-zinc-400">No files scanned yet.</p>
            ) : (
                <ul className="space-y-3 max-h-72 overflow-auto">
                    {files.slice(0, 10).map((file) => (
                        <li
                            key={file.path}
                            className="flex justify-between items-center border border-zinc-700 p-3 rounded hover:bg-red-900/30"
                        >
                            <div>
                                <p className="font-medium">{file.path.split('/').pop()}</p>
                                <p className="text-sm text-zinc-400">
                                    Size: {formatSize(file.size)} – Last modified: {file.modified.split('T')[0]}
                                </p>
                            </div>
                            <button
                                onClick={() => onTrash(file.path)}
                                className="text-red-400 hover:text-red-300 hover:underline"
                            >
                                🗑 Move to Trash
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
