import "./TableRow.css";
import { useRecoilState } from "recoil";
import { modalContentAtom } from "../../Atoms";

export default function TableRow({ data }) {
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

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
            <td>{new Date(data.createdAt).toDateString()}</td>
            <td>
                <div>
                    <button
                        onClick={() =>
                            setModalContent({
                                view: !modalContent.view,
                                type: "edit",
                                item: data,
                            })
                        }
                    >
                        Edit
                    </button>

                    <button
                        onClick={() =>
                            setModalContent({
                                view: !modalContent.view,
                                type: "delete",
                                item: data,
                            })
                        }
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}
