import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from "primereact/button";
import "./index.scss";
import "primeicons/primeicons.css";

// const Index = () => {
//   const [loading, setLoading] = useState<boolean>(false);

//   const load = () => {
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   };
//   return (
//     <div className="maincontainer">
//       {/* <div className="card flex justify-content-center gap-3"> */}
//         <Button label="Submit" raised severity="success" />
//         {/* <Button label="Submit" link />
//         <Button label="Disable" disabled />
//         <Button label="Danger" raised severity="danger" /> */}
//       {/* </div> */}
//       {/* <div
//         className="card flex flex-wrap align-items-center justify-content-center gap-3 mb-4"
//         style={{ marginTop: "20px" }}
//       >
//         <Button label="Warning" raised severity="warning" />

//         <Button
//           label="Submit"
//           icon="pi pi-heart"
//           loading={loading}
//           onClick={load}
//         />
//       </div> */}
//       {/* <div className="card flex flex-wrap justify-content-center gap-3">
//         <Button label="Delete" icon="pi pi-trash" raised severity="danger" />
//         <Button
//           type="button"
//           label="Emails"
//           raised
//           severity="secondary"
//           badge="8"
//         />
//         <Button
//           type="button"
//           label="Messages"
//           icon="pi pi-users"
//           outlined
//           badge="2"
//           badgeClassName="p-badge-danger"
//         />
//       </div> */}
//     </div>
//   );
// };

// export default Index;
interface ButtonProps {
  label: string;
  className: string;
  type: any;
  disabled:any;
}

const Buttons: React.FC<ButtonProps> = ({ className, label, type,disabled }) => {

  return (
    <div>
      <Button
        type={type}
        label={label}
        className={className}
        disabled={disabled}
      >
      </Button>
    </div>
  )
}
export default Buttons