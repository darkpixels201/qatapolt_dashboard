import React from 'react'

const FormValidation = (setSubmitError, submitError, name, purchasePrice, salePrice, stock) => {


    // if (!state.name) {
    //     setSubmitError({
    //       ...submitError,
    //       nameError: 'First Name is required',
    //     });
    //     return;
    //   }

      if (!name) {
    
        return setSubmitError({ ...submitError, nameError: "Name is Required" });
      }

      if (!purchasePrice) {
    
        return setSubmitError({ ...submitError, purchasePriceError: "Purchase Price is Required" });
      }

      if (!salePrice) {
    
        return setSubmitError({ ...submitError, salePriceError: "Sale Price is Required" });
      }

      if (!stock) {
    
        return setSubmitError({ ...submitError, stockError: "Stock is Required" });
      }

      return true
}

export default FormValidation