import Dropdown from "./Dropdown";

function DropdownList() {

let dropdownTitles = [
    {
      title: "Fiabilité",
    },
    {
      title: "Respect",
    },
    {
      title: "Service",
    },
    {
      title: "Sécurité",
    }
  ]

  return (
    <div className="dropdown-list">
        {dropdownTitles.map((dropdown, index)=> {
          return  <Dropdown title={dropdown.title} key={index}/>
        })}
    </div>
  );

}

export default DropdownList;