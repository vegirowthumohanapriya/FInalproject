import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Homepage from "./Components/Homepage/Homepage";
import Propertydetail from "./Components/Forms/Propertydetail";
import Basicinfo from "./Components/Forms/Basicinfo";
import Generalinfo from "./Components/Forms/Generalinfo";
import Locationinfo from "./Components/Forms/Locationinfo";
import { createContext, useState } from "react";
/////////////////////////////////////////////////////
export const BasicInfoStore = createContext();
export const PropertyDetailstore = createContext();
export const GeneralInfostore = createContext();
export const Locationinfostore = createContext();
///////////////////////////////////////////////////

export const fileStorage = createContext();

function App() {
  const [file1, Setfile] = useState(null);
  const [BasicInfoStorage, SetBasicInfoStorage] = useState({
    propertyType: "",
    Negotable: "",
    Price: "",
    OwnerShip: "",
    PropertyAge: "",
    PropertyApproved: "",
    Propertydescription: "",
    BankLoan: "",
  });
  const [PropertyDetailStorage, SetPropertyDetailStorage] = useState({
    length: "",
    Breadth: "",
    TotalArea: "",
    AreaUnit: "",
    NoofBHK: "",
    NoofFloor: "",
    Attached: "",
    WesternToilet: "",
    Furnished: "",
    CarParking: "",
    Lift: "",
    Electricity: "",
    Facing: "",
  });
  const [GeneralInfoStorage, SetGeneralInfoStorage] = useState({
    Name: "",
    Mobile: "",
    Postedby: "",
    SelectType: "",
    Featuredpackage: "",
    PPDPackage: "",
  });
  const [LocationInfoStorage, SetLocationInfoStorage] = useState({
    Email: "",
    City: "",
    Area: "",
    Pincode: "",
    Adresss: "",
    Landmark: "",
    Latitude: "",
    Longitude: "",
  });
  return (
    <div className="App">
      <Locationinfostore.Provider
        value={[LocationInfoStorage, SetLocationInfoStorage]}
      >
        <GeneralInfostore.Provider
          value={[GeneralInfoStorage, SetGeneralInfoStorage]}
        >
          <PropertyDetailstore.Provider
            value={[PropertyDetailStorage, SetPropertyDetailStorage]}
          >
            <BasicInfoStore.Provider
              value={[BasicInfoStorage, SetBasicInfoStorage]}
            >
              <fileStorage.Provider value={[file1, Setfile]}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="Register" element={<Register />} />
                    <Route path="/Homepage" element={<Homepage />} />
                    <Route path="Basicinfo" element={<Basicinfo />} />
                    <Route path="Propertydetail" element={<Propertydetail />} />
                    <Route path="Generalinfo" element={<Generalinfo />} />
                    <Route path="Locationinfo" element={<Locationinfo />} />

                    {/* 
          <Route path="contact" element={<h1></h1>} />
          <Route path="*" element={<h1></h1>} /> */}
                  </Routes>
                </BrowserRouter>
              </fileStorage.Provider>
            </BasicInfoStore.Provider>
          </PropertyDetailstore.Provider>
        </GeneralInfostore.Provider>
      </Locationinfostore.Provider>
    </div>
  );
}

export default App;
