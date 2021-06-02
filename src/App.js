import { useState, useCallback, useEffect, useRef } from "react";
import { Geolocation } from "@capacitor/geolocation";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewWillEnter,
} from "@ionic/react";
import { mapOutline } from "ionicons/icons";

import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";

import { Icon, LatLng, Point } from "leaflet";

export default function GeolocationPage() {
  const markerIcon = new Icon({
    iconUrl: "/marker.png",
    iconAnchor: null,
    popupAnchor: [0, -30],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new Point(30, 30),
  });

  const mapRef = useRef(null);
  const [loc, setLoc] = useState([51.505, -0.091]);

  const [marker, setMarker] = useState({
    center: loc,
    zoom: 13,
  });

  const getCurrentPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc([coordinates?.coords.latitude, coordinates?.coords.longitude]);
    setMarker({
      ...marker,
      center: [coordinates?.coords.latitude, coordinates?.coords.longitude],
    });

    mapRef.current.panTo(
      new LatLng(coordinates.coords.latitude, coordinates.coords.longitude)
    );
  }, [marker]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Get Location App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>My Location</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonIcon icon={mapOutline} slot="start" />
              <IonLabel>Latitude: {loc[0]}</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={mapOutline} slot="start" />
              <IonLabel>Longitude: {loc[1]}</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <MapContainer
            whenCreated={(map) =>
              setInterval(() => {
                map.invalidateSize();
                mapRef.current = map;
              }, 500)
            }
            center={marker.center}
            zoom={marker.zoom}
            style={{
              width: "100%",
              height: "300px",
            }}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              icon={markerIcon}
              position={marker.center}
              onClick={(e) => console.log(e)}
            >
              <Popup>Hi! I'm Here! :)</Popup>
            </Marker>
          </MapContainer>
        </IonCard>
        <IonFab vertical="bottom" horizontal="end">
          <IonFabButton onClick={getCurrentPosition}>
            <IonIcon icon={mapOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}
