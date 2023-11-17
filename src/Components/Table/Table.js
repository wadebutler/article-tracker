import "./Table.css";
import { fetchData } from "../../API";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import TableRow from "../TableRow/TableRow";
import { FaArrowLeft, FaArrowRight, FaSort } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { reloadAtom, modalContentAtom } from "../../Atoms";

export default function Table() {
    const [tableData, setTableData] = useState(null);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState({ value: null, direction: null });
    const [reload, setReload] = useRecoilState(reloadAtom);
    const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

    useEffect(() => {
        handleFetch();
    }, [page, reload, sort]);

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

                if (sort.value) {
                    tempArr.sort((a, b) => {
                        if (sort.direction === "asc") {
                            if (a[sort.value] < b[sort.value]) return -1;
                            if (a[sort.value] > b[sort.value]) return 1;
                            return 0;
                        } else if (sort.direction === "des") {
                            if (a[sort.value] < b[sort.value]) return 1;
                            if (a[sort.value] > b[sort.value]) return -1;
                            return 0;
                        }
                    });
                }

                setTableData(tempArr);
            }
        });
    };

    const addModal = () => {
        setModalContent({ view: !modalContent.view, type: "add", item: null });
    };

    const handleSort = (value) => {
        if (sort.value === value && sort.direction === "asc") {
            setSort({ value: value, direction: "des" });
        } else if (sort.value === value && sort.direction === "des") {
            setSort({ value: null, direction: null });
        } else {
            setSort({ value: value, direction: "asc" });
        }
    };

    return tableData === null ? (
        <InfinitySpin width="100" color="#000" />
    ) : (
        <>
            <div className="articles-title">
                <h1>Articles</h1>

                <button onClick={() => addModal()}>+ Add</button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => handleSort("title")}>
                            Title
                            <FaSort className="table-header-sort-icon" />
                        </th>

                        <th onClick={() => handleSort("author")}>
                            Author
                            <FaSort className="table-header-sort-icon" />
                        </th>

                        <th onClick={() => handleSort("createdAt")}>
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
