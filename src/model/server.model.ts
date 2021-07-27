const client = require('../database/db.config.ts');

const PrivacyPolicy = function(userID){
    this.userID = userID;
}

// Finding an existing dse based on the userID
PrivacyPolicy.find = async (req, res) => {
    try{
        const dseCollection = client.db("full_dse").collection("dse");
        const findResult = await dseCollection.find({
            id: req.params.id
        })
        var html = "";
        findResult.forEach(element => {
            html = generateHTML(element.data);
            res.send(html);
        });
        //logger.info(`Result for ${req.params.controllerID}: ${findResult}`);
       // fluentLogger.emit("Finding data", findResult);
        
    }
    catch(error){
        //logger.error(`Error in finding data: ${error.status || 500} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        //fluentLogger.emit("Error in inserting data: ", error);
        res.send(error);
    }
}

// Inserting a new DSE
PrivacyPolicy.insert = async (req, res) => {
    try{
        const dseCollection = client.db("full_dse").collection("dse");
        const insertResult = await dseCollection.insertOne(DSE);

        res.send(insertResult);
    }
    catch(error){
        
        res.send(error);
    }

}

const DSE = {
    "id": "test",
    "data": [
        {
            "name": "static_text",
            "headline": [
                "Informationen zum umgang mit personenbezogenen Daten"
            ],
            "text": [
                "Über Ihr Interesse an unserer Webseite – und damit an unserem Unternehmen – freuen wir uns sehr. Der Schutz Ihrer privaten Rechte und Freiheiten liegt uns am Herzen; wir nutzen Ihre Daten nur für die dafür vorgesehenen Zwecke. Da uns wichtig ist, dass Sie jederzeit wissen, inwiefern wir Ihre Daten erheben, nutzen und ggfs. an Dritte übermitteln, informieren wir Sie nachfolgend umfänglich zur Verarbeitung Ihrer durch uns erhobenen bzw. bei uns gespeicherten personenbezogenen Daten.",
                
                "Sie können unsere Seiten grundsätzlich ohne Angabe von Daten nutzen; sofern es ggfs. für ausgewählte Services Ausnahmen dazu gibt, werden wir diese in den folgenden Kapiteln erläutern. Datenverarbeitungen ohne Rechtsgrundlage nehmen wir ausschließlich nicht ohne Ihre informierte Einwilligung vor. Wir halten uns bei der Verarbeitung personenbezogener Daten strikt an die Vorgaben der EU-Datenschutzgrundverordnung (DSGVO) und ggfs. weiterer Datenschutz-relevanter Bestimmungen."
            ]
        },
        {
            "name": "contact",
            "headline": "Name Und Anschrift Des Für Die Verarbeitung Verantwortlichen",
            "items": [
                { "company": "Cortina Consult GmbH" },
                { "name": "Jörg ter Beek" },
                { "address": "Hafenweg 24" },
                { "city": "48155 Münster" },
                { "telephone": "(0251)29794740" },
                { "email": "post@cortina-consult.de" },
                { "website": "www.cortina-consult.com" }
            ]
        },
        {
            "name": "accordion_text",
            "headline": "Rechte betroffener Personen",
            "description": [
                "Die EU-Datenschutzgrundverordnung (DSGVO) sieht in Kapitel III umfangreiche Rechte für betroffene Personen vor, die wir Ihnen in Bezug auf die Verarbeitung Ihrer personenbezogenen Daten nachfolgend entsprechend erläutern:"
            ],
            "endnote": [
                "Diese Daten werden anonym erhoben und gespeichert; ein Rückschluss auf die betroffene Person wird von uns weder beabsichtigt noch vorgenommen."
            ],
            "items" : [
                {
                    "name": "list",
                    "title": "Recht auf Auskunft",
                    "headline": "Diese Vorgabe betrifft insbesondere Angaben zu den folgenden Details der Datenverarbeitung:",
                    "list_items": [
                        "Zwecke der Verarbeitung",
                        "Kategorien der Daten",
                        "Ggfs. Empfänger oder Kategorien von Empfängern",
                        "Ggfs. die geplante Speicher-Dauer bzw. die Kriterien für die Festlegung dieser Dauer",
                        "Hinweis zum jeweiligen Recht auf Berichtigung, Löschung, Einschränkung oder Widerspruch",
                        "Bestehen des Beschwerderechts bei einer Aufsichtsbehörde",
                        "Ggfs. Herkunft der Daten (falls nicht bei Ihnen erhoben)",
                        "Ggfs. Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling inkl. aussagekräftiger Informationen über die involvierte Logik, die Tragweite und die zu erwartenden Auswirkungen",
                        "Ggfs. (geplante) Übermittlung an ein Drittland oder internationale Organisation"
                    ]
                },
                {
                    "name": "static_text",
                    "title": "Recht auf Berichtigung",
                    "text": [
                        "Ggfs. fehlerhafte Datenbestände werden wir umgehend berichtigen, sofern Sie uns über den Umstand entsprechend informieren."
                    ]
                },
                {
                    "name": "table",
                    "title": "Rechtsgrundlage der Verarbeitung",
                    "description": "Wir verarbeiten personenbezogene Daten nach den Vorgaben der DSGVO, je nach Art und Zweck der Verarbeitung wie folgt:",
                    "headers": [
                        "Erlaubnistatbestand",
                        "Vorgabe der DSGVO"
                    ],
                    "body": [
                       [ "Informierte Einwiligung", "Art. 6 Abs. 1 a" ],
                       [ "Erfüllung eines Vertrags", "Art. 6 Abs. 1 b" ],
                       [ "Durchführung vorvertraglicher Maßnahmen", "Art. 6 Abs. 1 b" ],
                       [ "Erfüllung rechtlicher Verpflichtungen", "Art. 6 Abs. 1 c" ],
                       [ "Schutz lebenswichtiger Interessen", "Art. 6 Abs. 1 d" ],
                       [ "Wahrung unseres berechtigten Interesses", "Art. 6 Abs. 1 f" ]
                    ]
                }
            ]
        },
        {
            "name": "accordion_text",
            "headline": "Informationen über spezifische Datenverarbeitungen auf der Website",
            "description": [
                "Ggfs. abweichend von bzw. ergänzend zu den oben genannten allgemeinen Informationen, finden Sie nachfolgend Details zu den individuellen Datenvearbeitungen auf unserer Website."
            ],
            "endnote": [
                "Diese Daten werden anonym erhoben und gespeichert; ein Rückschluss auf die betroffene Person wird von uns weder beabsichtigt noch vorgenommen."
            ],
            "items" : [
                {
                    "name": "data_processing",
                    "title": "Bewerbungen und Bewerbungsverfahren",
                    "items": [
                        {
                            "summary": "Zweck der Verarbeitung",
                            "text": [
                                "Verarbeitung und ggfs. Beantwortung der Anfrage des Formular-Absenders."
                            ]
                        },
                        {
                            "summary": "Rechtsgrundlage (nach Art. 6 / 9 DSGVO)",
                            "text": [
                                "Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 b)."
                            ]
                        },
                        {
                            "summary": "Ggfs. Empfänger (bei Weitergabe)",
                            "text": [
                                "Mailchimp; Betreiber: The Rocket Science Group, LLC, 675 Ponce de Leon Ave NE, Suite 5000, Atlanta, GA 30308 USA; https://mailchimp.com/legal/"
                            ]
                        }
                    ]
                },
                {
                    "name": "data_processing",
                    "title": "Typeform-Formulare",
                    "items": [
                        {
                            "summary": "Zweck der Verarbeitung allgemeiner Daten",
                            "text": [
                                {
                                    "headers": [ "Datentyp", "Zweck der Erhebung"],
                                    "body": [ 
                                        [
                                            "Alle Daten, die in den jeweiligen Formularen erhoben werden", "Verarbeitung der jeweiligen Formular-Anfrage"]
                                        ]
                                }
                            ]
                        },
                        {
                            "summary": "Rechtsgrundlage (nach Art. 6 / 9 DSGVO)",
                            "text": [
                                "Erfüllung eines Vertrages (Erfüllung vorvertraglicher Maßnahmen), gemäß Art. 6 Abs. 1 b) DSGVO",
                                "Wahrung berechtigter Interessen des Verantwortlichen oder eines Dritten, gemäß Art. 6 Abs. 1 f) DSGVO"
                            ]
                        }
                    ]
                }
            ]
        }
    ]
  }
  
  function generateHTML(dse){
      var result = "";
      dse.forEach(content => {
          if(content.name === "static_text") result += generateStaticText(content);
          else if(content.name === "contact") result += generateContact(content);
          else if(content.name === "accordion_text") result += generateAccordionText (content);
      })
      return result;
  }

  function generateText(text){
    var result = "";
    // adding the static text
    text.text.forEach(content => {
        result += `${content} <br/>`;
    });
    return result;
}
  
  function generateTable(table){
      var result = "";
      if(table.description !== undefined){
        result = `${table.description} <br/>`;
      }
      result += '<table> <thead> <tr>';
      // adding header of the table to the result
      table.headers.forEach(header => {
          result += `<th> ${header} </th>`;
      });
  
      result += '<tbody>';
      
      table.body.forEach(rows => {
          result += `<tr>`
          rows.forEach(cell => {
              result += `<td> ${cell} </td>`;
          });
          result += `</tr>`
      });
  
      result += '</tbody> </table>';
      if(table.endNote !== undefined && table.endNote.length > 0){
        table.endNote.forEach(outro => {
            result += `<br/> ${outro} <br/>`;
        });
      }
      return result;
  }
  
  function generateList(list){
      var result =  `${list.headline} <br/> <ul>`;
      list.list_items.forEach(item => {
          result += `<li> ${item} </li>`;
      });
      result += "</ul>"
      if(list.endNote !== undefined && list.endNote.length > 0){
        list.endNote.forEach(outro => {
            result += `<br/> ${outro} <br/>`;
        });
      }
      return result;
  }
  
  function generateStaticText(staticText){
      var result = `<h2> ${staticText.headline} </h2>`;
  
      // adding the static text
      staticText.text.forEach(content => {
          result += `${content} <br/>`;
      });
      return result;
  }
  
  function generateContact(contact){
      var result = `<h2> ${contact.headline} </h2>`;
  
      // adding each content of the contact to the result
      contact.items.forEach(element => {
          const key = Object.keys(element);
          result += `${element[key[0]]} <br/>`;
      });
      return result;
  }
  
  function generateDataProcessing(dataProcessing){
      var result = "<table> <tbody>";
      const items = dataProcessing.items;
      items.forEach(item => {
          result += `<tr> <td> ${item.summary} </td>`;
          result += '<td> ';
          
          item.text.forEach(content => {
              const keys = Object.keys(content);
              if(keys.some(e => e === "headers")){
                  result += generateTable(content);
              }
              else{
                  result += `${content} <br/>`;
              }
          });
  
          result += '</td>';
      });
  
      result += "</tbody> </table>";
      return result;
  }
  
  function generateAccordionText(accordionText){
      var result = `<h2> ${accordionText.headline} </h2>`;
      result += `${accordionText.description} <br/>`;
      const items = accordionText.items;
      items.forEach(item => {
          result += `<h3> ${item.title} </h3>`
          if(item.name === "static_text"){
              result += generateText(item);
          }
          else if(item.name === "table"){
              result += generateTable(item);
          }
          else if(item.name === "list"){
              result += generateList(item);
          }
          else if(item.name === "data_processing"){
              result += generateDataProcessing(item);
          }
      });
  
      return result;
  }

module.exports = PrivacyPolicy;
  
