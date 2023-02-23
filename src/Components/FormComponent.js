import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { colors } from '../utils/Colors'
import CustomText from './CustomComponents/CustomText'
import Spacer from './CustomComponents/Spacer'

const FormComponent = ({placeholder, Icon, name, fontSize, email}) => {
  return (
    <div style={{ width: "auto", paddingLeft:50, paddingRight:50, paddingTop:30 }}>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <CustomText title={name} fontSize={12} marginLeft={5} />
              </div>
              <Spacer height={5} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "solid",
                  borderWidth: 0.2,
                  borderColor: colors.grey3,
                  borderRadius: 2,
                  height: 35,
                  borderRadius: 10,
                  padding: 3,
                  paddingLeft: 11,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon color={colors.grey1} size={fontSize || 20} />
                </div>
                <Spacer width={10} />
                <input
                required
                type='text'
                // value={email}
                name={email}
                  placeholder={placeholder}
                  style={{
                    // border: "none",
                    // borderColor: "none",
                    width: "100%",
                    outline: "none",
                    border: "none",
                    backgroundColor: colors.white,
                    fontSize: 13,
                    // fontSize: 15,
                  }}
                />
              </div>
              
            </div>
  )
}

export default FormComponent