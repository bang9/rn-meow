import { StorageInterface, StorageItemId, StorageItemInterface } from "../../interfaces/interface.storage";
import { CatImageResponseInterface } from "../../interfaces/interface.api";
import { recordToArray, sortByDescStorageItem } from "../utils/util.function";

export type BookmarkItem = StorageItemInterface & Omit<CatImageResponseInterface, "id">;

export default class BookmarkService {
    constructor(private _storage: StorageInterface) {}
    private static _storageKey = "storage@bookmark";
    private _items: Record<StorageItemId, BookmarkItem> = {};

    public async load(): Promise<void> {
        const stringItems = await this._storage.getItem(BookmarkService._storageKey);
        if (stringItems) this._items = JSON.parse(stringItems);
    }

    public items() {
        return recordToArray(this._items).sort(sortByDescStorageItem);
    }

    public get(id: StorageItemId): BookmarkItem | null {
        return this._items[id] ?? null;
    }

    public has(id: StorageItemId) {
        return Boolean(this._items[id]);
    }

    public async remove(id: StorageItemId): Promise<void> {
        delete this._items[id];
        await this._storage.setItem(BookmarkService._storageKey, JSON.stringify(this._items));
    }

    public async add(id: StorageItemId, item: BookmarkItem): Promise<void> {
        this._items[id] = item;
        await this._storage.setItem(BookmarkService._storageKey, JSON.stringify(this._items));
    }
}
