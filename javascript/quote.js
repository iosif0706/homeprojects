
let json = () => {
    let colorChange = 0
    let container =     document.getElementById("container");
    let btnPress = document.getElementById("new-quote")
    let tweetQuote = document.getElementById("tweet")
    let newText = document.getElementById("text")
    let auth = document.getElementById("author")
    
    let colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857"
    ];
  var getJSON = function(url, callback) {
    var xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open('GET', url, true);
    xmlhttprequest.responseType = 'json';
  
    xmlhttprequest.onload = function() {
      var status = xmlhttprequest.status;
  
      if (status == 200) {
        callback(null, xmlhttprequest.response);
      } else {
        callback(status, xmlhttprequest.response);
      }
    };
  
    xmlhttprequest.send();
  };
  
  getJSON('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', function(err, data) {
    if (err != null) {
      console.error(err);
    } else {
      
      let author = ''
      let quote = ''
      let count = 0 
      
          
        btnPress.onclick = () => {
          if(colorChange == colors.length){
        colorChange = 0
      }
          count++
          colorChange++
          author = data.quotes[count].author
          quote = data.quotes[count].quote
          newText.innerHTML = quote
    auth.innerHTML = author
  
          container.style.background = colors[colorChange]
          btnPress.style.background = colors[colorChange]
          tweetQuote.style.background = colors[colorChange]
         
        };
        
     
      }
  } 
  )};