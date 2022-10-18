import Dropdown from "./Dropdown";

function DropdownList() {

let dropdownTitles = [
    {
      title: "Fiabilité",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id rhoncus velit, eget dictum velit. Praesent porttitor quam a ipsum convallis, et dignissim est vulputate. "
    },
    {
      title: "Respect",
      description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      description: "Vivamus at augue et purus viverra commodo varius ut diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vel augue risus."
    },
    {
      title: "Sécurité",
      description: "Donec et luctus ligula, et fermentum lectus. Phasellus orci urna, scelerisque a ipsum at, porttitor dignissim ipsum. Cras sit amet dui nisi. Donec mauris lacus, gravida et finibus eget, egestas eu elit."
    }
  ]

  return (
    <div className="dropdown-list">
        {dropdownTitles.map((dropdown, index)=> {
          return  <Dropdown title={dropdown.title} key={index} description={dropdown.description} id={index} />
        })}
    </div>
  );

}

export default DropdownList;