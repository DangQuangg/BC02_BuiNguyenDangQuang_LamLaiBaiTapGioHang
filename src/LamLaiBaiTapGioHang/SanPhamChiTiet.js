import React, { Component } from "react";

export default class SanPhamChiTiet extends Component {
  render() {
    let {
      hinhAnh,
      heDieuHanh,
      tenSP,
      giaBan,
      manHinh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
    } = this.props.data;
    return (
      <div className="row">
        <h3>Tên điện thoại: {tenSP}</h3>
        <div className="col-5">
          <img
            style={{
              width: "300xp",
              height: "400px",
              objectFit: "cover",
            }}
            src={hinhAnh}
          />
        </div>
        <div className="col-7 p-5">
          <p>Màn hình: {manHinh}</p>
          <p>Hệ điều hành: {heDieuHanh}</p>
          <p>Camera trước: {cameraTruoc}</p>
          <p>Camera sau: {cameraSau}</p>
          <p>RAM: {ram}</p>
          <p>ROM: {rom}</p>
          <p>Giá bán: {giaBan}</p>
        </div>
      </div>
    );
  }
}
