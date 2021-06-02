import { useState, useCallback } from "react";
import { Geolocation } from "@capacitor/geolocation";
import {
  IonButton,
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

export default function GeolocationPage() {
  const [loc, setLoc] = useState(null);

  const getCurrentPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, []);

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
              <IonLabel>Latitude: {loc?.coords.latitude}</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={mapOutline} slot="start" />
              <IonLabel>Longitude: {loc?.coords.longitude}</IonLabel>
            </IonItem>
          </IonCardContent>
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
