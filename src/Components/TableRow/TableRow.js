import "./TableRow.css";
import { useRecoilState } from "recoil";
import { displayModalAtom, modalContentAtom } from "../../Atoms";

export default function TableRow({ data }) {
    const [displayModal, setDisplayModal] = useRecoilState(displayModalAtom);
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

    const handleDelete = () => {
        setDisplayModal(!displayModal);
        setModalContent({ type: "delete", item: data });
    };

    return data === null ? (
        <tr className="table-row-empty-row">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    ) : (
        <tr>
            <td>{data.title}</td>
            <td>{data.author}</td>
            <td>{data.createdAt}</td>
            <td>
                <button>Edit</button>
                <button onClick={() => handleDelete()}>Delete</button>
            </td>
        </tr>
    );
}
