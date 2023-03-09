import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import CustomPrimaryButton from "../../components/CustomPrimaryButton";
import RedirectInfo from "../../components/RedirectInfo";

const getFromNotValidMessage = () => {
  return "User name should contains between 3 and 12 characters abd password should contains between 6 and 20 characters. Also correct e-mail address should provided";
};

const getFromValidMessage = () => {
  return "Press to register!";
};

const RegisterPageFooter = ({ handleRegister, isFromValid }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <Tooltip
        title={!isFromValid ? getFromNotValidMessage() : getFromValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFromValid}
            onClick={handleRegister}
          />
          <RedirectInfo
            text="Need an account?  "
            redirectText=" Already have account ?"
            redirectHandle={handlePushToLoginPage}
            additionalStyles={{ marginTop: "5px" }}
          />
        </div>
      </Tooltip>
    </>
  );
};

export default RegisterPageFooter;
