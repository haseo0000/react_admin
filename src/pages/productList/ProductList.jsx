import "./ProductList-styled.css";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productList } from "../../data";
import { Link, NavLink } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function ProductList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [selectedData, setSelectedData] = useState([]);
  console.log(selectedData);

  const columns = [
    { field: "id", headerName: "ID", flex: 1, maxWidth: 50 },
    {
      field: "product",
      headerName: "Product",
      flex: 2,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
      minWidth: 80,
      maxWidth: 400,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 100,
      maxWidth: 200,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      minWidth: 100,
      maxWidth: 105,
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/quickmenu/product/${params.row.id}`} as={NavLink}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
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
      setData(productList);
      setLoading(false);
    }, 500);

    return () => {
      setData(null);
    };
  }, []);

  if (!data)
    return (
      <div className="productlist-container">
        <Loading loading={loading} />
      </div>
    );

  return (
    <div className="productlist-container">
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
    </div>
  );
}

export default ProductList;
