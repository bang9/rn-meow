import { StorageItemInterface } from "../../interfaces/interface.storage";

export function recordToArray<T extends Record<string, any>>(
    items: T
): T extends Record<string, infer U> ? U[] : any[] {
    return Object.values(items);
}

export function sortByDescStorageItem(a: StorageItemInterface, b: StorageItemInterface): number {
    return b.storedAt - a.storedAt;
}
