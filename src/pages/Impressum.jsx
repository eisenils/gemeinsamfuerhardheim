import React, { Component } from "react";

class Impressum extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>
              <span className="underline">Impressum</span>
            </h1>
            <h2>
              <span className="underline">DLRG Ortsgruppe Hardheim e.V.</span>
            </h2>
            <p>
              1. Vorsitzender: Daniel Emmenecker
              <br />
              Schlesierstraße 3<br />
              74736 Hardheim
            </p>
            <h2>
              <span className="underline">DRK Ortsverein Hardheim</span>
            </h2>
            <p>
              1. Vorsitzender: Joachim Sieber
              <br />
              Querspange 6<br />
              74736 Hardheim
            </p>

            <h2>
              <span className="underline">Freiwillige Feuerwehr Hardheim</span>
            </h2>
            <p>
              Feuerwehrkommandant: Michael Seyfried
              <br />
              Postadresse: Gemeinde Hardheim, Abteilung Feuerwehr
              <br />
              Schloßplatz 6 <br />
              74736 Hardheim
              <br />
              Telefon: 06283 / 58-0
            </p>
            <h3>
              <span className="underline">Dienstanbieter i.S.v. §10 Abs. 1 MedStV</span>
            </h3>
            <p>
              Gemeinde Hardheim
              <br />
              vertr. durch Bürgermeister Volker Rohm
              <br />
              Schloßplatz 6 <br />
              74736 Hardheim
              <br />
              Telefon: 06283 / 58-0
            </p>
            <h3>
              <span className="underline">Bilder</span>
            </h3>
            <p>
              Die Verwertungsrechte (©) aller Bilder auf dieser Website - sofern nicht anders
              gekennzeichnet - liegen bei den Hilfsorganisationen der Gemeinde Hardheim
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Impressum;
