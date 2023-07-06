import { ImagePreview } from "../../utils/ImagePreview";
import "./NewProduct-styled.css";

function NewProduct() {
  const { readerFile, fileDataURL } = ImagePreview();

  return (
    <div className="newproduct-container">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <img src={fileDataURL} className="productImage" />
          <input type="file" id="file" onChange={(e) => readerFile(e)} />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}

export default NewProduct;
