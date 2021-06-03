import {
  IonCard,
  IonCardContent,
  IonContent,
  IonPage,
  IonTitle,
} from "@ionic/react";

export default function About() {
  return (
    <IonPage>
      <IonTitle></IonTitle>
      <IonContent>
        <IonCard>
          <IonCardContent>About</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
