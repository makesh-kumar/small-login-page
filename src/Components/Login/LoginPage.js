import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikInput from "../Formik/FormikInput";
import FormikPassword from "../Formik/FormikPassword";

import "./loginPageStyle.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ErrorText from "../Formik/ErrorText";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function LoginPage() {
  const initialValues = {
    emailId: "",
    password: "",
  };
  const validationSchema = Yup.object({
    emailId: Yup.string().required("Please enter user name"),
    password: Yup.string().required("Please enter password"),
  });

  const onFormSubmit = (values) => {
    alert(values);
  };
  const [open, setOpen] = React.useState(true);

  return (
    <div className="container">


      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        <Form>
          <div className="form-control">
            <div class="form-field">
              <MailOutlineIcon
                color="primary"
                style={{ marginRight: "10px", marginTop: "15px" }}
              />

              <FormikInput
                label="Email"
                name="emailId"
                type="email"
                placeholder="Email"
              />
            </div>
            <ErrorMessage name={"emailId"} component={ErrorText} />
          </div>

          <div className="form-control">
            <div class="form-field">
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

          <div className="btn">
            <Button variant="outlined" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginPage;
