import { atom } from "recoil";

export const tableDataAtom = atom({
    key: "tableDataState",
    default: null,
});

export const modalContentAtom = atom({
    key: "modalContentState",
    default: { view: null, type: null, item: null },
});

export const reloadAtom = atom({
    key: "reloadState",
    default: false,
});
