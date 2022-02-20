import React, { Component } from "react";

export default class ModalGioHang extends Component {
  renderGioHang = () => {
    return this.props.dataGioHang.map((item) => {
      return (
        <tr>
          <td>{item.maSP}</td>
          <td>
            <img style={{ width: "50px" }} src={item.hinhAnh} alt="" />
          </td>
          <td>{item.tenSP}</td>
          <td>{item.soLuong}</td>
          <td>{item.giaBan}</td>
          <td>{item.soLuong * item.giaBan}</td>
        </tr>
      );
    });
  };

  render() {
    console.log("dataGioHang", this.props.dataGioHang);

    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình Ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderGioHang()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
