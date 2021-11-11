import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikInput from "../Formik/FormikInput";
import FormikDate from "../Formik/FormikDate";

// import "./loginPageStyle.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ErrorText from "../Formik/ErrorText";
import FormikCheckbox from "../Formik/FormikCheckbox";
import WcIcon from "@mui/icons-material/Wc";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import FormikPassword from "../Formik/FormikPassword";

function Register() {
  const initialValues = {
    fullName: "",
    emailId: "",
    gender: "",
    mobileNum: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .trim()
      .max(12, "Name cannot exceed 12 charatcers")
      .matches(/^[a-zA-Z ]*$/, "Name should contain only letters")
      .required("Please enter name"),

    emailId: Yup.string().email("Invalid email").required("Please enter email"),
    dob: Yup.string().required("Please select dob"),
    gender: Yup.string().required("Please choose gender"),
    mobileNum: Yup.string()
      .trim()
      .max(12, "Mobile num cannot exceed 12 digits")
      .matches(/^[0-9]*$/, "Mobile num should contain only numbers")
      .required("Please enter mobile num"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Please enter password"),
    confirmPassword: Yup.string()
      .required("Please enter confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const onFormSubmit = (values) => {
    alert(values);
  };
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        <Form style={{ height: "100vh" }}>
          <div className="form-control">
            <div className="form-field">
              <PersonOutlinedIcon
                color="primary"
                style={{ marginRight: "10px", marginTop: "15px" }}
              />
              <FormikInput label="Full Name" name="fullName" type="text" />
            </div>
            <ErrorMessage name={"fullName"} component={ErrorText} />
          </div>

          <div className="form-control">
            <div className="form-field">
              <MailOutlineIcon
                color="primary"
                style={{ marginRight: "10px", marginTop: "15px" }}
              />
              <FormikInput label="Email" name="emailId" type="text" />
            </div>
            <ErrorMessage name={"emailId"} component={ErrorText} />
          </div>

          <div className="form-control">
            <div className="form-field">
              <WcIcon
                color="primary"
                style={{ marginRight: "10px", marginTop: "8px" }}
              />
              <FormikCheckbox label="Gender" name="gender" type="radio" />
            </div>
            <ErrorMessage name={"gender"} component={ErrorText} />
          </div>

          <div className="form-control">
            <div className="form-field">
              <PhoneAndroidOutlinedIcon
                color="primary"
                style={{ marginRight: "10px", marginTop: "15px" }}
              />
              <FormikInput label="Mobile" name="mobileNum" type="text" />
            </div>
            <ErrorMessage name={"mobileNum"} component={ErrorText} />
          </div>

          <div className="form-control">
            <div className="form-field">
              <VpnKeyOutlinedIcon
                color="primary"
                style={{ marginRight: "10px", marginTop: "15px" }}
              />
              <FormikPassword
                label="Password"
                name="password"
                type="password"
              />
            </div>
            <ErrorMessage name={"password"} component={ErrorText} />
          </div>

          <div className="form-control">
            <div className="form-field">
              <VpnKeyOutlinedIcon
                color="primary"
                style={{ marginRight: "10px", marginTop: "15px" }}
              />
              <FormikPassword
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
            </div>
            <ErrorMessage name={"confirmPassword"} component={ErrorText} />
          </div>

          {/* <div className="form-control">
            <VpnKeyOutlinedIcon
              color="primary"
              style={{ marginRight: "10px", marginTop: "15px" }}
            />
            <FormikInput type="date" label="Dob" name="dob" />
          </div> */}

          {/* <div className="form-control">
            <DateRangeIcon
              color="primary"
              style={{ marginRight: "10px", marginTop: "15px" }}
            />
            <FormikDate />
          </div> */}

          <div className="btn">
            <Button variant="outlined" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
