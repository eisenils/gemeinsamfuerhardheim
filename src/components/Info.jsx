import React, { Component } from "react";
import logo from "../img/logo.jpg";

class Info extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-8">
            <p>
              Gemeinsam für Hardheim ist ein Zusammenschluss der drei Rettungsorganisationen der
              Gemeinde Hardheim. Dies sind die DLRG OG Hardheim e.V., DRK Ortverein Hardheim und die
              freiwillige Feuerwehr Hardheim.
            </p>
          </div>
          <div className="col-sm-4">
            <img
              src={logo}
              style={{ width: "100%", height: "auto" }}
              alt="Logo GemeinsamFürHardheim"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-4">
            <h2>
              <span className="underline">
                <a href="https://hardheim.dlrg.de/" className="nounderline heading-link">
                  DLRG Hardheim e.V.
                </a>
              </span>
            </h2>
            <p>
              Die DLRG Hardheim e.V. bietet für jede Altersklasse das richtige Betätigungsfeld. Als
              Gliederung nimmt unsere Ortsgruppe die satzungsgemäßen Aufgaben der DLRG in unserer
              Gemeinde als auch im Bezirk Frankenland wahr.
              <br />
              Die DLRG hat es sich zudem auf die Fahnen geschrieben, dem Ertrinkungstod vorzubeugen
              und wird diesem Anspruch durch ein umfangreiches Ausbildungsangebot gerecht. So
              bringen wir regelmäßig an unseren Trainingsabenden, donnerstags im Familienbad
              Höpfingen, zahlreichen Schwimmschülern/innen das Schwimmen bei, um sie dann weiter zu
              trainieren.
            </p>
          </div>
          <div className="col-sm-4">
            <h2>
              <span className="underline">
                <a href="https://www.drk-hardheim.de/" className="nounderline heading-link">
                  DRK Hardheim
                </a>
              </span>
            </h2>
            <p>
              Der DRK Ortsverein hat im Moment 10 aktive Helferinnen und Helfer im Einsatz. Aufgrund
              unserer Werbung im letzten Jahr konnten wir zwei weitere Sanitäter in den
              Einsatzdienst übernehmen.
              <br />
              Unsere ehrenamtlichen Sanitäter bilden sich regelmäßig in ihrer Freizeit weiter und
              können rund um die Uhr über Funkmeldeempfänger von der Rettungsleitstelle Mosbach
              alarmiert werden.
              <br />
              Wir kommen bei
              <ul>
                <li>Verkehrsunfällen</li>
                <li>zur Unterstützung des Rettungsdienstes</li>
                <li>bei Brandeinsätzen der Freiwilligen Feuerwehr</li>
              </ul>
              zum Einsatz.
            </p>
          </div>
          <div className="col-sm-4">
            <h2>
              <span className="underline">
                <a href="http://www.feuerwehr-hardheim.de/" className="nounderline heading-link">
                  Feuerwehr Hardheim
                </a>
              </span>
            </h2>
            <p>
              Die Feuerwehr Hardheim besteht aus fünf Einsatzabteilungen, einer Jugendabteilung mit
              vier Jugendgruppen, sowie einer Altersabteilung.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
