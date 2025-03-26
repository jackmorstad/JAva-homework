const xhttpr = new XMLHttpRequest(); 
xhttpr.open('GET', ' https://v2.jokeapi.dev/joke/Any?safe-mode', true);  
xhttpr.send();
xhttpr.onload = ()=> {
    if (xhttpr.status === 200) {
        const response = JSON.parse(xhttpr.response);
        // Process the response data here
    } else {
        // Handle error
    }
  }; 