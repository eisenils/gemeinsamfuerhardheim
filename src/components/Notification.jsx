import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Notification() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading className="text-center">Einkaufshelfer</Alert.Heading>
        <p>
          Die Hilfsorganisationen der Gemeinde Hardheim haben für Personen der Risikogruppen und
          Senioren einen Einkaufsservice eingerichtet. Alle Informationen zu diesem Dienst fiden Sie
          unter{" "}
          <a href="/einkaufshelfer" className="text-decoration-none">
            Einkaufshelfer
          </a>
          .
        </p>
        <hr />
        <p className="mb-0">
          Nützliche Informationen zur Corona Pandemie finden Sie unter{" "}
          <a href="/corona" className="text-decoration-none">
            Corona Virus
          </a>
          .
        </p>
      </Alert>
    );
  }
  return null;
}

export default Notification;
