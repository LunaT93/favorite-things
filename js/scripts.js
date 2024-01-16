window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {

      const favThingsArray = [];
        
      // in this section we get the value for each form input
      const Thing1 = document.getElementById("fav1").value;
      const Thing2 = document.getElementById("fav2").value;
      const Thing3 = document.getElementById("fav3").value;

      //const value1 = fav1.value;
     // const value2 = fav2.value;
      //const value3 = fav3.value;
 
      favThingsArray.push(Thing1, Thing2, Thing3);
      const favThingsFinal = favThingsArray;

      // then we set the story variables to the values we got from the form
      document.querySelector("span#favTot").innerText = favThingsFinal;
      
      //document.querySelector("div#story").removeAttribute("class");
  
      event.preventDefault();
    };
  };