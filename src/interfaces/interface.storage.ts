export interface StorageInterface {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
}

export type StorageItemId = string;
export interface StorageItemInterface {
    id: StorageItemId;
    storedAt: number;
}

export interface ItemStorageInterface<T = StorageItemInterface> {
    storageKey: string;
    items: Record<StorageItemId, T>;
    load(): Promise<Record<StorageItemId, T>>;
    get(id: StorageItemId): T | null;
    set(id: StorageItemId, item: T): Promise<void>;
    remove(id: StorageItemId): Promise<void>;
}

export abstract class ItemStorageImpl<T extends StorageItemInterface> implements ItemStorageInterface<T> {
    constructor(protected storage: StorageInterface) {}
    async load(): Promise<Record<StorageItemId, T>> {
        const stringItems = await this.storage.getItem(this.storageKey);
        if (stringItems) this.items = JSON.parse(stringItems);
        return this.items;
    }

    abstract storageKey: string;
    abstract items: Record<StorageItemId, T>;
    abstract get(id: StorageItemId): T | null;
    abstract remove(id: StorageItemId): Promise<void>;
    abstract set(id: StorageItemId, item: T): Promise<void>;
}
