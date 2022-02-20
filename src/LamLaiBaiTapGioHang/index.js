import React, { Component } from "react";
import DanhSachDienThoai from "./DanhSachDienThoai";
import { danhSachDienThoai } from "./data";
import ModalGioHang from "./ModalGioHang";
import SanPhamChiTiet from "./SanPhamChiTiet";

export default class BaiTapGioHang extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: "27,000,000 VNĐ",
      hinhAnh: "./img/applephone.jpg",
    },
    gioHang: [],
  };

  handleSanPhamChiTiet = (sanPham) => {
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };
  handleThemSanPham = (sanPham) => {
    let cloneGioHang = [...this.state.gioHang];
    let indexSanPham = this.state.gioHang.findIndex((item) => {
      return item.maSP == sanPham.maSP;
    });
    console.log(cloneGioHang, indexSanPham);
    if (indexSanPham == -1) {
      sanPham.soLuong = 1;
      cloneGioHang.push(sanPham);
    } else {
      cloneGioHang[indexSanPham].soLuong++;
    }
    this.setState({
      gioHang: cloneGioHang,
    });
  };
  render() {
    return (
      <div className=" container">
        <div className="text-right">
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "20px", fontWeight: "bold" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng (0)
          </span>
        </div>
        <div className="py-5">
          <ModalGioHang
            dataGioHang={this.state.gioHang}
            // handleThayDoiSoLuong={this.handleThayDoiSoLuong}
          />
          <DanhSachDienThoai
            dsdt={danhSachDienThoai}
            handleSanPhamChiTiet={this.handleSanPhamChiTiet}
            handleThemGioHang={this.handleThemSanPham}
          />
          <SanPhamChiTiet data={this.state.sanPhamChiTiet} />
        </div>
      </div>
    );
  }
}
