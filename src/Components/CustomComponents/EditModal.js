import {
  CButton,
  CModalBody,
  CModalFooter,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";
import CustomHeader from "./CustomHeader";

function EditModal({ setEyeVisible }) {
  return (
    <div>
      <CModalBody>
        <CModalHeader >
          <CModalTitle>
          Edit Product
          </CModalTitle>
        </CModalHeader>
        <div
          className=" shadow  bg-body rounded "
          style={{ width: "100%", padding: 10, marginTop:15 }}
        >
          <CForm className="row g-3" style={{ width: "100%", padding: 10 }}>
            <CCol md={6}>
              <CFormInput type="text" id="productName" label="Name" />
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="text"
                id="PurchasePrice"
                label="Purchase Price"
              />
            </CCol>
            <CCol md={6}>
              <CFormInput type="text" id="SalePrice" label="Sale Price" />
            </CCol>
            <CCol md={6}>
              <CFormInput type="number" id="Stock" label="Stock" />
            </CCol>
            <CCol xs={12}>
              <CFormInput
                id="Description"
                label="Description"
                placeholder="Product Description"
              />
            </CCol>
            <CCol xs={12}>
              <CFormInput
                id="ChooseImage"
                label="Choose Image"
                type="file"
                placeholder="Apartment, studio, or floor"
              />
            </CCol>
            <CCol md={4}>
              <CFormInput
                id="ChooseColor"
                label="Color"
                placeholder="Enter Product Color"
              />
            </CCol>
            <CCol md={8}>
              <CFormSelect id="inputState" label="Status">
                <option>Active</option>
                <option>InActive</option>
              </CFormSelect>
            </CCol>
          </CForm>
        </div>
      </CModalBody>
      <CModalFooter>
         <button
          onClick={() => setEyeVisible(false)}
          className="theme-btn-one btn-black-overlay btn_sm rounded"
          type="submit"
        >
          Save Changes
        </button>
      </CModalFooter>
    </div>
  );
}

export default EditModal;
