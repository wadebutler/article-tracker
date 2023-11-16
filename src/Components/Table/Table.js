import "./Table.css";
import { fetchData } from "../../API";
import { useEffect, useState } from "react";

export default function Table() {
    const [tableData, setTableData] = useState(null);

    useEffect(() => {
        fetchData().then((data) => {
            setTableData(data);
        });
    }, []);

    return (
        <table className="table">
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Created At</th>
                <th>Actions</th>
            </tr>
        </table>
    );
}
