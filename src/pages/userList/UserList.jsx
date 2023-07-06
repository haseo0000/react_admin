import { useState, useEffect } from "react";
import "./UserList-styled.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userList } from "../../data";
import { Link, NavLink } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function UserList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [selectedData, setSelectedData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", flex: 1, maxWidth: 50 },
    {
      field: "username",
      headerName: "User",
      flex: 2,
      renderCell: (param) => {
        return (
          <div className="userListUser">
            <img src={param.row.avartar} className="userListImage" />
            {param.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "status", headerName: "Status", flex: 1, minWidth: 80 },
    {
      field: "transaction",
      headerName: "Transaction",
      flex: 1,
      renderCell: (param) => {
        return <span>${param.row.transaction}</span>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 100,
      renderCell: (param) => {
        return (
          <>
            <Link
              to={`/quickmenu/user/${param.row.id}`}
              className="link-bar"
              as={NavLink}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => {
                handleDelete(param.row.id);
              }}
            />
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    alert(`deleted id ${id}`);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setData(userList);
      setLoading(false);
    }, 2000);

    return () => {
      setData(null);
    };
  }, []);

  if (!data)
    return (
      <div className="userList-container">
        <Loading loading={loading} />
      </div>
    );

  return (
    <div className="userList-container">
      <div style={{ margin: "1rem", maxWidth: "100%" }}>
        <DataGrid
          disableRowSelectionOnClick
          checkboxSelection
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 15, 20]}
          onRowSelectionModelChange={(ids) => {
            const selectedDatas = ids.map((id) => {
              //ให้หาบางสิ่งบางอย่างใน data แล้ว return ค่ากลับไป
              return data.find((item) => item.id === id);
            });
            setSelectedData(selectedDatas);
          }}
        />
      </div>
      <div>
        {selectedData.map((item, index) => (
          <label key={index}>
            {item.id + " "}
            {item.username}
          </label>
        ))}
      </div>
    </div>
  );
}

export default UserList;
