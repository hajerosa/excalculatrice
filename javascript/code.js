function myFunction(id) {
    document.calc.result.value+=id;// cette fonction permet de donner au champ texte une valeur cad dans le champ il y'aura une valeur visible 
  }
  
  // Clears calculator input screen
  function clearScreen() {
    document.calc.result.value=""; // les valeurs seront écrasés par le vide 
  }
  
  // Calculates input values
  function calculate() {
    try {
      var input = eval(document.calc.result.value); // la fonction eval evalue l'expression cad elle va calculé toute l'expression écrite par user 
      document.calc.result.value=input; // la valeur retournée par eval sera affiché dans le screen
    } catch(err){ // gestion des exceptions (prise sur internet) en cas ou il y'a une erreur le msg error sera affiché 
        document.calc.result.value="Error";// l'erreur sera donnée pas eval qui ne reconnait pas l'expression pour l'évaluer 
      }
  }