import "./TableRow.css";
import { useRecoilState } from "recoil";
import { modalContentAtom } from "../../Atoms";

export default function TableRow({ data }) {
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

    const handleDelete = () => {
        setModalContent({
            view: !modalContent.view,
            type: "delete",
            item: data,
        });
    };

    const handleEdit = () => {
        setModalContent({ view: !modalContent.view, type: "edit", item: data });
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
                <button onClick={() => handleEdit()}>Edit</button>
                <button onClick={() => handleDelete()}>Delete</button>
            </td>
        </tr>
    );
}
