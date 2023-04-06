import "./style.css";
import React, { useState } from "react";
//import {Route, NavLink, HashRouter from "react-router-dom";, useEffect
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
//import * as parksData from "./data/skateboard-parks.json";
import * as otoparkData from "./data/otopark.json";

function Map() {
  //seçilen parkı görebilmek için useState ile bos veri tanımladık
  const [selectedPark, setSelectedPark] = useState(null);
  return (
    /*MAP fonksiyonunda googlemap ı hangi konumda ve ne kadar yakın açacagımızı belirttik */
    <GoogleMap
      zoom={10}
      center={{ lat: 39.896519, lng: 32.861969 }}
      //options={{style:"map-container"}}
    >
      {/*json dosyasındaki verileri kullanarak parkların yerini marker ile belirttik */}
      {otoparkData.features.map((park) => (
        <Marker
          key={park.properties.carId}
          position={{
            lat: park.geometry.coordinates[0],
            lng: park.geometry.coordinates[1],
          }}
          //listelenen parka tıklandıgında küçük bir bilgi göstermesi için
          onClick={() => {
            setSelectedPark(park);
          }}
        />
      ))}

      {/* bir park seçilince infowindow yani bilgi kutusu açılacak */}
      {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0],
          }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
        >
          <div>
            <h2>{selectedPark.properties.name}</h2>
            {/*<p>{selectedPark.properties.DESCRIPTIO}</p>*/}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function HomeContact() {
  return (
    <div style={{ width: "69vw", height: "100vh" }}>
     
      {/* burada url imizi kullanarak google mapin ana sayfada yüklenmesini saglıyoruz */}
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `90%` }} />}
      />
    </div>
  );
}
