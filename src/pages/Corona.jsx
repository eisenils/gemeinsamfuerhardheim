import React, { Component } from "react";
import Faq from "../components/Faq";

class Corona extends Component {
  render() {
    return (
      <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
              <h1>
                <span className="underline">Corona Virus</span>
              </h1>
            </div>
            <div className="col-sm-6">
              <p>
                Von China in die Welt. Seit Anfang Januar diesen Jahres befindet sich das Corona
                Virus unaufhaltsam in der weltweiten Ausbreitung. <br />
                Auf dieser Seite haben wir für Sie ein paar wertvolle Informationen
                zusammengetragen, die Ihnen helfen sollen sich vor dem neuen Virus zu schützen.
                <br />
                <b>Bleiben Sie gesund!</b>
              </p>
            </div>
            <div className="col-sm-6">
              <img
                src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                alt="SARS-CoV2"
                style={{ width: "100%", height: "auto" }}
              />
              <p className="text-center">
                Foto:
                <a
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textDecoration: "none",
                    padding: "4px 6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    lineHeight: 1.2,
                    display: "inline-block",
                    borderRadius: "3px"
                  }}
                  href="https://unsplash.com/@cdc?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download free do whatever you want high-resolution photos from CDC"
                  className="ml-2"
                >
                  <span style={{ display: "inline-block", padding: "2px 3px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        height: "12px",
                        width: "auto",
                        position: "relative",
                        verticalAlign: "middle",
                        top: "-2px",
                        fill: "white"
                      }}
                      viewBox="0 0 32 32"
                    >
                      <title>unsplash-logo</title>
                      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>
                  </span>
                  <span style={{ display: "inline - block", padding: "2px 3px" }}>CDC</span>
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-2">
              <h2>
                <span className="underline">Tipps zum Schutz </span>
              </h2>
            </div>
            <div className="col-sm-3 mb-2">
              <img
                src="https://www.pgdiakonie.de/fileadmin/_processed_/e/8/csm_haendewaschen_2000x2000pix_41841353a3.jpg"
                alt="haendewaschen"
                style={{ width: "200px", height: "auto" }}
              />
            </div>
            <div className="col-sm-9 mb-2">
              <h3>Hände waschen</h3>
              <p>
                Gründliches Waschen mit Seife oder Waschlotion tötet Coronaviren zuverlässig ab. Um
                die Haut zu schonen, verwenden die Mitarbeiter*innen im Krankenhaus und in
                Ambulanzen stattdessen Händedesinfektionsmittel. Die Wirkung ist bei sachgemäßer
                Anwendung vergleichbar. Besonders bevor Augen, Nase oder Mund berührt werden,
                sollten Hände gewaschen oder desinfiziert werden.
                <br />
                <b>Händewaschen: Mindestens 20 Sekunden bis zum Handgelenk einseifen</b>
              </p>
            </div>
            <div className="col-sm-3 mb-2">
              <img
                src="https://www.pgdiakonie.de/fileadmin/_processed_/7/c/csm_husten_2000x2000pix_3d0d8d46fc.jpg"
                alt="husten"
                style={{ width: "200px", height: "auto" }}
              />
            </div>
            <div className="col-sm-9 mb-2">
              <h3>Richtig husten und niesen</h3>
              <p>
                Das neue Coronavirus wird vor allem durch Tröpfchen übertragen (direkt oder über die
                Hände).
                <br />
                <b>
                  Um andere zu schützen: beim Husten oder Niesen Abstand halten, abwenden und in die
                  Ellenbeuge (nicht in die Hände) niesen.
                </b>
              </p>
            </div>
            <div className="col-sm-3 mb-2">
              <img
                src="https://www.pgdiakonie.de/fileadmin/_processed_/3/1/csm_klinke_2000x2000pix_f5de092427.jpg"
                alt="anfassen"
                style={{ width: "200px", height: "auto" }}
              />
            </div>
            <div className="col-sm-9 mb-2">
              <h3>Aufpassen beim Anfassen</h3>
              <p>
                Viren können an Oberflächen haften, die von vielen Menschen angefasst werden. Zur
                Sicherheit können Fahrstuhlknöpfe mit einem Stift gedrückt oder Türklinken mit dem
                Ellenbogen betätigt werden.
                <br />
                <b>
                  War der Hautkontakt nicht zu vermeiden, empfiehlt es sich, gleich die Hände zu
                  waschen oder zu desinfizieren.
                </b>
              </p>
            </div>
            <div className="col-sm-3 mb-2">
              <img
                src="https://www.pgdiakonie.de/fileadmin/_processed_/e/0/csm_corona-abstand_halten_d603d6d1e9.jpg"
                alt="anfassen"
                style={{ width: "200px", height: "auto" }}
              />
            </div>
            <div className="col-sm-9 mb-2">
              <h3>Auf Abstand gehen</h3>
              <p>
                Auch Infizierte, die sich noch gesund fühlen, können ansteckend sein.
                <br />
                <b>
                  Deshalb heißt es: Abstand halten, 1,5 Meter mindestens. Auf Händeschütteln und
                  Umarmen besser verzichten.
                </b>
              </p>
            </div>
          </div>
          <div className="row mt-4 mb-4">
            <div className="col-12">
              <h2>
                <span className="underline">FAQ</span>
              </h2>
              <p>Hier finden Sie die häufigsten Fragen rund um das Thema</p>
              <Faq />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Corona;
