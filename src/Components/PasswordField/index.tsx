import React, { useState } from "react";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import "../styles/index.scss";

interface Passwordprops {
  feedbackstatus: boolean;
  toggleMaskstatus: boolean;
  label: string;
  headerstatus: boolean;
  footerstatus: boolean;
  name:string
}

const PasswordField: React.FC<Passwordprops> = ({
  feedbackstatus,
  toggleMaskstatus,
  label,
  footerstatus,
  headerstatus,name
}) => {
  const [value1, setValue1] = useState("");
  let header: JSX.Element | null = null;
  let footer: JSX.Element | null = null;
  let status = "";

  if (
    !feedbackstatus &&
    !toggleMaskstatus &&
    label === "Strength Password Input"
  ) {
    status = "disable";
  } else if (!feedbackstatus) {
    status = "enable";
  } else if (!toggleMaskstatus) {
    status = "enable";
  } else {
    status = "enable";
  }

  switch (footerstatus) {
    case true:
      header = <h6>Pick a password</h6>;
      break;
    case false:
      header = null;
      break;
    default:
      header = null;
  }

  switch (headerstatus) {
    case true:
      footer = (
        <React.Fragment>
          <Divider />
          <p className="mt-2">Suggestions</p>
          <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
          </ul>
        </React.Fragment>
      );
      break;
    case false:
      footer = null;
      break;
    default:
      footer = null;
  }

  return (
    <div>
      <div className="card">
        <h5>{label}</h5>
        {status === "enable" ? (
          <Password
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            feedback={feedbackstatus}
            toggleMask={toggleMaskstatus}
            name={name}
          />
        ) : (
          <Password
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            header={header}
            footer={footer}
            name={name}
          />
        )}
      </div>
    </div>
  );
};
export default PasswordField;
