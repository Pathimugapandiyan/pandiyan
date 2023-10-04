import React, { useState } from "react";
import "../DropDown/DropDown.scss"
import { Button } from "primereact/button"
import { Image } from "primereact/image"
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";
import { data } from "./data";


interface DropDownItem {
  id: number;
  name: string;
  code: string;
}

const DropDown = () => {
  const [showDrop, setShowDrop] = useState(false)
  const [selectedData, setSelectedData] = useState("")
  const [showDropp, setShowDropp] = useState(false);
  const [selectedDataa, setSelectedDataa] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>(data.map((item: DropDownItem) => item.name));
  const [select, setSelect] = useState<boolean>(false)
  const [selectMulti, setSelectMulti] = useState<boolean>(false)

  const toggleOption = (val: string) => {
    if (selectedDataa.includes(val)) {
      setSelectedDataa(selectedDataa.filter((selected) => selected !== val));

    } else {
      setSelectedDataa([...selectedDataa, val]);
      setShowDropp(false)
    }
  };
  const isSelected = (val: string) => selectedDataa.includes(val);
  const handleToggle = () => {
    setShowDropp(!showDropp);
    setSelectMulti(true)
    if (!showDropp) {
      setOptions(data.map((item: DropDownItem) => item.name));
    }
  };

  return (
    <div className="headerr">
      <div className="conatiner">
        <h4>Single Select DropDown</h4>
        <Button
          className="buttons"
          onClick={() => {
            setShowDrop(!showDrop)
            setSelect(true)
          }}>
          <p>{select == false  ? "Select" : selectedData}</p>
          <i style={{ transform: showDrop ? 'rotate(0deg)' : 'rotate(180deg)', }} className="pi pi-chevron-up"></i>
        </Button>
        {
          showDrop &&
          <div className="drop-menu">
            <div>
              {
                data.map((val) => {
                  return (
                    <div className="btns">
                      <Button
                        className="drop-down"
                        onClick={() => {
                          setSelectedData(val.name)
                          setShowDrop(false)
                        }
                        }
                      >
                        <p>{val.name}</p>
                      </Button>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
      </div>
      {/* <div className="conatinere">
        <h4>Multiple Select DropDown</h4>
        <Button className="buttons" onClick={handleToggle}>
          <p>{selectMulti == false ? "Select" : selectedDataa.join(", ")}</p>
          <i style={{ transform: showDropp ? "rotate(0deg)" : "rotate(180deg)" }} className="pi pi-chevron-up"></i>
        </Button>
        {showDropp && (
          <div className="drop-menu">
            <div>
              {options.map((val) => (
                <div className={`btns ${isSelected(val) ? "selected" : ""}`} key={val}>
                  <Button className="drop-down" onClick={() => toggleOption(val)}>
                    {val}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div> */}
    </div>
  )
}
export default DropDown