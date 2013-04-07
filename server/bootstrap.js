
 
// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Lists.find().count() === 0) {
    var data = [
      {name: "Rilanciata",
       contents: [
//campo 1 rilanciata
 ["Calton Gialla-Foglizzese Rossa ","1° turno","Campo 1"],
 ["Montalto Rosso-Caluso Arancio ","2° turno","Campo 1"],
 ["Calton Gialla-Caluso Ocra ","3° turno","Campo 1"],
 ["Foglizzese Rossa-Montalto Rosso ","4° turno","Campo 1"],
 ["Caluso Arancio-Caluso Ocra ","5° turno","Campo 1"],
 ["Calton Gialla-Montalto Rosso ","6° turno","Campo 1"],
 ["Foglizzese Rossa-Caluso Arancio ","7° turno","Campo 1"],
 ["Montalto Rosso-Caluso Ocra ","8° turno","Campo 1"],
 ["Calton Gialla-Caluso Arancio ","9° turno","Campo 1"],
 ["Foglizzese Rossa-Caluso Ocra ","10° turno","Campo 1"],
//campo 2 rilanciata
 ["Calton Verde-Foglizzese Fucsia ","1° turno","Campo 2"],
 ["Rivarolo Bianca-Caluso Mandarino ","2° turno","Campo 2"],
 ["Calton Verde-Fortitudo Turchese ","3° turno","Campo 2"],
 ["Foglizzese Fucsia-Rivarolo Bianca ","4° turno","Campo 2"],
 ["Caluso Mandarino-Fortitudo Turchese ","5° turno","Campo 2"],
 ["Calton Verde-Rivarolo Bianca ","6° turno","Campo 2"],
 ["Foglizzese Fucsia-Caluso Mandarino ","7° turno","Campo 2"],
 ["Rivarolo Bianca-Fortitudo Turchese ","8° turno","Campo 2"],
 ["Calton Verde-Caluso Mandarino ","9° turno","Campo 2"],
 ["Foglizzese Fucsia-Fortitudo Turchese ","10° turno","Campo 2"],
 

       
//campo 3 rilanciata
 ["Calton Lilla-Montalto Blu ","1° turno","Campo 3"],
 ["Rivarolo Azzurra-Caluso Grigio ","2° turno","Campo 3"],
 ["Calton Lilla-Rivarolo Azzurra ","3° turno","Campo 3"],
 ["Montalto Blu-Caluso Grigio ","4° turno","Campo 3"],
 ["Calton Lilla-Caluso Grigio ","5° turno","Campo 3"],
 ["Montalto Blu-Rivarolo Azzurra ","6° turno","Campo 3"],
 ]
      },
      {name: "1° livello",
       contents: [
       
       
//campo 4 - 1° livello
 ["Calton 1-Caluso 1 ","1° turno","Campo 4"],
 ["Foglizzese-Montalto 1 ","2° turno","Campo 4"],
 ["Calton 1-Rivarolo 1 ","3° turno","Campo 4"],
 ["Caluso 1-Foglizzese ","4° turno","Campo 4"],
 ["Montalto 1-Rivarolo 1 ","5° turno","Campo 4"],
 ["Calton 1-Foglizzese ","6° turno","Campo 4"],
 ["Caluso 1-Montalto 1 ","7° turno","Campo 4"],
 ["Foglizzese-Rivarolo 1 ","8° turno","Campo 4"],
 ["Calton 1-Montalto 1 ","9° turno","Campo 4"],
 ["Caluso 1-Rivarolo 1 ","10° turno","Campo 4"],

//campo 5 - 1° livello
 ["Calton 3-Caluso 2 ","1° turno","Campo 5"],
 ["Montalto 2-Rivarolo 2 ","2° turno","Campo 5"],
 ["Calton 3-Fortitudo 2 ","3° turno","Campo 5"],
 ["Caluso 2-Montalto 2 ","4° turno","Campo 5"],
 ["Rivarolo 2-Fortitudo 2 ","5° turno","Campo 5"],
 ["Calton 3-Montalto 2 ","6° turno","Campo 5"],
 ["Caluso 2-Rivarolo 2 ","7° turno","Campo 5"],
 ["Montalto 2-Fortitudo 2 ","8° turno","Campo 5"],
 ["Calton 3-Rivarolo 2 ","9° turno","Campo 5"],
 ["Caluso 2-Fortitudo 2 ","10° turno","Campo 5"],
//campo 6 - 1° livello
 ["Calton 5-Rivarolo 3 ","1° turno","Campo 6"],
 ["Calton 4-Caluso 3 ","2° turno","Campo 6"],
 ["Calton 5-Fortitudo 3 ","3° turno","Campo 6"],
 ["Rivarolo 3-Calton 4 ","4° turno","Campo 6"],
 ["Caluso 3-Fortitudo 3 ","5° turno","Campo 6"],
 ["Calton 5-Calton 4 ","6° turno","Campo 6"],
 ["Rivarolo 3-Caluso 3 ","7° turno","Campo 6"],
 ["Calton 4-Fortitudo 3 ","8° turno","Campo 6"],
 ["Calton 5-Caluso 3 ","9° turno","Campo 6"],
 ["Rivarolo 3-Fortitudo 3 ","10° turno","Campo 6"],
 //campo 7  - 1° livello
  ["Calton 6-Rivarolo 4 ","1° turno","Campo 7"],
 ["Calton 2-Caluso 4 ","2° turno","Campo 7"],
 ["Calton 6-Fortitudo 1 ","3° turno","Campo 7"],
 ["Rivarolo 4-Calton 2 ","4° turno","Campo 7"],
 ["Caluso 4-Fortitudo 1 ","5° turno","Campo 7"],
 ["Calton 6-Calton 2 ","6° turno","Campo 7"],
 ["Rivarolo 4-Caluso 4 ","7° turno","Campo 7"],
 ["Calton 2-Fortitudo 1 ","8° turno","Campo 7"],
 ["Calton 6-Caluso 4 ","9° turno","Campo 7"],
 ["Rivarolo 4-Fortitudo 1 ","10° turno","Campo 7"],
 ]
      },
      {name: "2° livello",
       contents: [
       
//campo 8 ' 2° livello
 ["Calton-Foglizzese ","1° turno","Campo 8"],
 ["Fortitudo A-Fortitudo B ","2° turno","Campo 8"],
 ["Calton-Fortitudo A ","3° turno","Campo 8"],
 ["Foglizzese-Fortitudo B ","4° turno","Campo 8"],
 ["Calton-Fortitudo B ","5° turno","Campo 8"],
 ["Foglizzese-Fortitudo A ","6° turno","Campo 8"],
 ]
      }
    ];

    var timestamp = (new Date()).getTime();
    for (var i = 0; i < data.length; i++) {
      var list_id = Lists.insert({name: data[i].name});
      for (var j = 0; j < data[i].contents.length; j++) {
        var info = data[i].contents[j];
        Todos.insert({list_id: list_id,
                      text: info[0],
                      timestamp: timestamp,
                      tags: info.slice(1)});
        timestamp += 1; // ensure unique timestamp.
      }
    }
  }
});

// hand made add
// Todos.insert({list_id: Lists.findOne({name: "Mini B"})._id, text: "AA-BB", tags:["Campo 1", "Round 1"]})
//Todos.insert({list_id: Lists.findOne({name: "Rilanciata"})._id, text: "Gattini-Pettirossi", tags:["Campo 1", "4° turno"]})
//Todos.insert({list_id: Lists.findOne({name: "Rilanciata"})._id, text: "Rivarolo Azzurra-Caluso Grigio ", tags:["7° turno", "Campo 3"]})
//cancellare   Rilanciata Calton-Foglizzese campo 8
//Todos.findOne({list_id: Lists.findOne({name: "Rilanciata"})._id})  FUNZIONA MA

