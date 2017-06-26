export interface NoteStorageInterface {
    all(): Array<object>;
    find(id: number): object;
}
