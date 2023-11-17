import "./Table.css";
import { fetchData } from "../../API";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import TableRow from "../TableRow/TableRow";
import { FaArrowLeft, FaArrowRight, FaSort } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { displayModalAtom, reloadAtom, modalContentAtom } from "../../Atoms";

export default function Table() {
    const [tableData, setTableData] = useState(null);
    const [page, setPage] = useState(1);
    const [displayModal, setDisplayModal] = useRecoilState(displayModalAtom);
    const [reload, setReload] = useRecoilState(reloadAtom);
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

    useEffect(() => {
        handleFetch();
    }, [page, reload]);

    const handleFetch = () => {
        setReload(false);
        fetchData(page).then((data) => {
            if (data.data.length === 0) {
                setPage(page - 1);
            } else {
                let tempArr = [...data.data];

                if (data.data.length < 10) {
                    for (let i = tempArr.length; i < 10; i++) {
                        tempArr.push(null);
                    }
                }

                setTableData(tempArr);
            }
        });
    };

    const addModal = () => {
        setModalContent({ type: "add", item: null });
        setDisplayModal(!displayModal);
    };

    return tableData === null ? (
        <InfinitySpin width="100" color="#000" />
    ) : (
        <>
            <div className="articles-title">
                <h2>Articles</h2>

                <button onClick={() => addModal()}>+ Add</button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Title
                            <FaSort className="table-header-sort-icon" />
                        </th>
                        <th>
                            Author
                            <FaSort className="table-header-sort-icon" />
                        </th>
                        <th>
                            Created At
                            <FaSort className="table-header-sort-icon" />
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => {
                        return <TableRow key={index} data={item} />;
                    })}
                </tbody>
            </table>

            <div className="table-page-container">
                <button
                    disabled={page === 1 ? true : false}
                    onClick={() => setPage(page - 1)}
                >
                    <FaArrowLeft />
                </button>

                <p>Page {page}</p>

                <button
                    disabled={tableData.length < 10 ? true : false}
                    onClick={() => setPage(page + 1)}
                >
                    <FaArrowRight />
                </button>
            </div>
        </>
    );
}
