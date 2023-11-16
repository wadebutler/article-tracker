import { atom } from "recoil";

export const tableDataAtom = atom({
    key: "tableDataState",
    default: null,
});

export const displayModalAtom = atom({
    key: "displayModalState",
    default: false,
});

export const modalContentAtom = atom({
    key: "modalContentState",
    default: null,
});

export const reloadAtom = atom({
    key: "reloadState",
    default: false,
});
