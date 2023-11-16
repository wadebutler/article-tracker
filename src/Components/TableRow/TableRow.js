import "./TableRow.css";

export default function TableRow({ data }) {
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
                <button>Delete</button>
            </td>
        </tr>
    );
}
