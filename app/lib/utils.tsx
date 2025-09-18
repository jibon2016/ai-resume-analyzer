import  { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn (...inputs: ClassValue[]){
    return twMerge( clsx(inputs) );
}

export function formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed()} KB`;
    const mb = kb / 1024;
    if (mb < 1024) return `${mb.toFixed()} MB`;
    const gb = mb / 1024;
    return `${gb.toFixed()} GB`;
}

export const generateUUID = () => crypto.randomUUID();