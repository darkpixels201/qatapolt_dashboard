import {
  CButton,
  CCardImage,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModalHeader,
} from "@coreui/react";
import React from "react";
import { Image } from "react-bootstrap";
// import pratice from "../../assets/images/pratice";
import avatar6 from "../../assets/images/avatars/6.jpg";
// import avatar6 from "../../assets/images/avatars/6.jpg";

function ViewModal({ setEyeVisible, item }) {
  return (
    <div>
      <CModalBody>
        <CModalHeader>
          <CModalTitle>View Product</CModalTitle>
        </CModalHeader>
        <div
          className=" shadow  bg-body rounded "
          style={{ width: "100%", padding: 10, marginTop: 15 }}
        >
          <CForm className="row g-3" style={{ width: "100%", padding: 10 }}>
            <CCol md={2}>
              <img
                className="rounded"
                style={{ height: 100, width: 100 }}
                size="xl"
                src={item.avatar.src}
              />
            </CCol>
            <CCol md={4}>
              <CFormInput
                disabled
                type="text"
                id="productName"
                label="Name"
                placeholder={item.user.name}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                disabled
                type="text"
                id="PurchasePrice"
                label="Purchase Price"
                placeholder={item.user.purchasePrice}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                disabled
                type="text"
                id="SalePrice"
                label="Sale Price"
                placeholder={item.user.salePrice}
              />
            </CCol>
            <CCol md={6}>
              <CFormInput
                disabled
                type="number"
                id="Stock"
                label="Stock"
                placeholder={item.user.stock}
              />
            </CCol>
            <CCol xs={12}>
              <CFormInput
                disabled
                id="Description"
                label="Description"
                placeholder={item.user.description}
              />
            </CCol>
            {/* <CCol xs={12}>
              <CFormInput
                disabled
                id="ChooseImage"
                label="Choose Image"
                type="file"
                placeholder={item.user.name} 
              />
            </CCol> */}
            <CCol md={4}>
              <CFormInput
                disabled
                id="ChooseColor"
                label="Color"
                placeholder={item.user.name}
              />
            </CCol>
            <CCol md={8}>
              <CFormSelect id="inputState" label="Status" disabled>
                <option>Active</option>
                <option>InActive</option>
              </CFormSelect>
            </CCol>
            <CCol md={4} style={{ width: 200 }}></CCol>
          </CForm>
        </div>
      </CModalBody>
      <CModalFooter>
        <button
          onClick={() => setEyeVisible(false)}
          className="theme-btn-one btn-black-overlay btn_sm rounded"
          type="submit"
        >
          Close
        </button>
      </CModalFooter>

      {/* <CModalBody className="d-flex flex-wrap">
        <div className=" img-fluid col-sm-6 align-self-center mx-auto d-block  ">
        <Image className="img-fluid" src={avatar6} rounded />
        </div>

        <div className="d-flex flex-wrap col-sm-6 align-items-left flex-column ">
          <CModalBody>nfjdlvafdnv djkfnkjdsbkjdbskb kdsbfbdsjkkdv bfkhbasdbfck asbkfasbkb  mavsfjhbsk,dskhj</CModalBody>
          <CModalTitle>Purchase Price</CModalTitle>
          <CModalTitle>Stock</CModalTitle>
          <CModalTitle>Status</CModalTitle>
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setEyeVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter> */}
    </div>
  );
}

export default ViewModal;
