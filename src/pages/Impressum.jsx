import React, { Component } from "react";
import Header from "../components/Header";

class Impressum extends Component {
  render() {
    return (
      <>
        <Header title="Impressum" />
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
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
                Die Verwertungsrechte (&copy;) aller Bilder auf dieser Website - sofern nicht anders
                gekennzeichnet - liegen bei den Hilfsorganisationen der Gemeinde Hardheim
              </p>
              <h3>
                <span className="underline">Texte</span>
              </h3>
              <p>
                Teilweise stammen verwendete Texte von dem{" "}
                <a href="https://www.zusammengegencorona.de/informieren/" className="nounderline">
                  Bundesministerium für Gesundheit
                </a>{" "}
                und der{" "}
                <a
                  href="https://www.pgdiakonie.de/coronavirus-tipps-zum-schutz/"
                  className="nounderline"
                >
                  Johannesstift Diakonie
                </a>
                .
              </p>
              <p>
                Gestaltung:{" "}
                <a href="http://ne-dsgn.de" className="nounderline">
                  NE Design
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Impressum;
