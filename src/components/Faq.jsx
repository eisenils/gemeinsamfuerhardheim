import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

class Faq extends Component {
  render() {
    return (
      <>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Corona-Virus, SARS-CoV-2 oder COVID-19?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Corona-Viren können bei Menschen zu unterschiedlichen Atemwegserkrankungen führen –
                von einer leichten Erkältung bis hin zu schweren Erkrankungen, wie SARS (Severe
                Acute Respiratory Syndrome). Aufgrund der nahen Verwandtschaft zu SARS wurde das
                neue Corona-Virus Sars-CoV-2 genannt. Die durch das Virus ausgelöste Erkrankung
                trägt hingegen den Namen COVID-19.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Was sind die Symptome?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                An COVID-19 Erkrankte zeigen typische Symptome eines Atemwegsinfektes. Dazu gehören
                Fieber, trockener Husten, Schwindel und Muskelschmerzen. Zudem können Kopfschmerzen,
                Halsschmerzen, Bauchschmerzen und Durchfall auftreten.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Wie lange halten sich die neuartigen Coronaviren auf Oberflächen?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Die Stabilität in der Umwelt hängt von vielen Faktoren wie Temperatur,
                Luftfeuchtigkeit und Beschaffenheit der Oberfläche ab. Nach derzeitigen
                Erkenntnissen kann SARS-CoV-2 bis zu 3 Stunden in der Luft, bis zu 4 Stunden auf
                Kupferoberflächen, bis zu 24 Stunden auf Karton und bis zu 2-3 Tagen auf Edelstahl
                und Plastik ansteckend bleiben. Weitere Informationen können Sie{" "}
                <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Steckbrief.html#doc13776792bodyText20">
                  hier
                </a>{" "}
                finden.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Darf ich meine Großeltern oder Eltern (60+) noch besuchen?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Von Besuchen bei älteren Menschen und Menschen mit Vorerkrankungen wird derzeit
                abgeraten, da diese Personen ein hohes Risiko für einen schweren Verlauf einer
                Infektion mit dem neuartigen Coronavirus aufweisen. Alten- und Pflegeheime verfolgen
                zum Schutz ihrer Bewohner eine oft sehr strenge Besuchsregel. Aus eigener
                Rücksichtnahme sollte der Kontakt mit der älteren Generation auf Telefonate
                beschränkt sein. Auch die Kinderbetreuung etwa bei Schul- und Kitaschließung sollte
                nicht durch die Großeltern übernommen werden.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Kann ich mich noch mit Bekannten oder Freunden treffen?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                Gruppen feiernder Menschen in Wohnungen sowie privaten Einrichtungen oder auf
                öffentlichen Plätzen sind nicht gestattet. Der Aufenthalt im öffentlichen Raum ist
                nur alleine, mit einer weiteren nicht im Haushalt lebenden Person oder im Kreis der
                Angehörigen des eigenen Hausstands erlaubt.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  }
}

export default Faq;
