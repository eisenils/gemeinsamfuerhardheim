import React, { Component } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

class Einkaufshelfer extends Component {
  render() {
    return (
      <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <p>
                Die Hilfsorganisationen der Gemeinde Hardheim haben für Personen der Risikogruppen
                und Senioren einen Einkaufsservice eingerichtet.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3>
                <span className="underline">Kontakt</span>
              </h3>
              <p>
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:hilfe@drk-buchen.de?subject=Anfrage Einkaufshelfer"
                  className="text-decoration-none"
                >
                  hilfe@drk-buchen.de
                </a>
                <br />
                <FaPhone className="mr-2" />
                <a href="tel:+496281522235" className="text-decoration-none">
                  06281 / 5222-35
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <h3>
                <span className="underline">Servicezeit</span>
              </h3>
              <p>
                Montag - Samstag <br />
                8:00 Uhr - 16:00 Uhr
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>
                <span className="underline">So funktioniert's</span>
              </h3>
              <ol className="listing">
                <li>
                  Sie rufen per Telefon <a href="tel:+496281522235">(06281 / 5222-35)</a> an und
                  teilen den Mitarbeiter des DRK Ihre Adresse und Einkaufsliste mit
                </li>
                <li>Wir werden informiert</li>
                <li>Der Einkaufshelfer kauft ein</li>
                <li>Der Einkaufshelfer stellt Einkäufe vor die Haustür und klingelt</li>
                <li>
                  Der Einkaufshelfer wartet mit einem Mindestabstand von 3m. Die wohnhafte Person
                  nimmt Einkäufe und legt das Geld vor die Haustür
                </li>
                <li>
                  Die Haustür wird geschlossen und danach erst wird das Geld durch den
                  Einkaufshelfer genommen.
                </li>
              </ol>
            </div>
            <div className="col-12">
              <h3>
                <span className="underline">Wer sind die Einkaufshelfer</span>
              </h3>
              <p>
                Die Einkaufshelfer sind Aktive der Rettungsorganisationen der Gemeinde Hardheim. Sie
                wollen der Bevölkerung auch in dieser schweren Zeit etwas Gutes tun und helfen. Aus
                diesem Engagement haben sich die Einkaufshelfer gebildet. Die Einkaufshelfer
                erkennen Sie an der typischen Einsatzkleidung, oder an der Vereinskleidung der
                jeweiligen Organisation!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Einkaufshelfer;
