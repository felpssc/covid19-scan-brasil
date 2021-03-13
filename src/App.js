import { useEffect, useState } from "react";
import { Logo, CardInfo } from "./App.styles";
import Select from "react-select";
import covid from "./assets/images/covid.svg";
import axios from "axios";
import { api } from "./services/api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import geolocation from "./services/geolocation.json";

function App() {
  const selectOptions = [
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];

  const [selectedValue, setSelectedValue] = useState("");
  const [stateInfo, setStateInfo] = useState({});
  const [location, setLocation] = useState([]);

  function handleChange(e) {
    setSelectedValue(e.value);
  }

  useEffect(() => {
    axios.get(`${api}${selectedValue}`).then((response) => {
      const data = response.data;
      setStateInfo({ ...data });
    });

    geolocation.forEach((state) => {
      if (state.uf === selectedValue) {
        setLocation([state.latitude, state.longitude]);
      }
    });
  }, [selectedValue]);

  return (
    <>
      <Logo>
        <img src={covid} width="55px" alt="covid" />
        Covid-19 Scan <span>Brasil</span>
      </Logo>
      <Select
        value={selectOptions.find((obj) => obj.value === selectedValue)}
        onChange={handleChange}
        id="selector"
        placeholder="Selecione um Estado..."
        options={selectOptions}
      ></Select>
      <CardInfo>
        {selectedValue !== "" ? (
          <>
            <div>
              <h2>
                {stateInfo.state} ({stateInfo.uf})
              </h2>
              <hr></hr>
              <p>
                ✅️ <strong>{stateInfo.cases}</strong> casos confirmados
              </p>
              <p>
                ⚠️ <strong>{stateInfo.suspects}</strong> casos suspeitos
              </p>
              <p>
                ❎️ <strong>{stateInfo.refuses}</strong> casos negativos
              </p>
              <p>
                💀 <strong>{stateInfo.deaths}</strong> mortes
              </p>
            </div>
            <div>
              <MapContainer
                center={[-12.5393735, -53.1629328]}
                zoom={3}
                scrollWheelZoom={false}
                dragging={true}
                doubleClickZoom={false}
                bounds={true}
                style={{ borderRadius: "10px" }}
                id="mapid"
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={location}>
                  <Popup>{stateInfo.state}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </>
        ) : (
          <h4 align="center">Selecione um Estado para ver informações</h4>
        )}
      </CardInfo>
    </>
  );
}

export default App;
