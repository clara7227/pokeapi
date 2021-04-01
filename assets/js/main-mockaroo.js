window.onload = function(){
 
    
    fetch('assets/data/MOCK_DATA.json')
      .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
      .then(data => {
        let caja = document.getElementById("usuarios");
        
        /*data.forEach( user => {
          user.first_name.sort()
        })*/
        //data.sort((a, b) =>a.first_name.localeCompare(b.first_name));
        //mirar si el nombre tiene una letra
        
        //console.log(data.sort(a => a.first_name.slice(0, 1)))
        let userPrev ="";
        let GroupTit = "";

        data.forEach(function(user, index) {
          if (userPrev)
          let item = GroupTit + `<li>
                        <div class="user">
                          
                          <span> <img src="${user.thumbnail}"></span>
                          <div class="username">
                            <span>${user.first_name}</span>
                            <span>${user.last_name}</span>
                          </div class="additional-info">
                            <div>${user.email} </div>
                            <div>${user.number} </div>
                          </div>
                      </li>`;
          caja.innerHTML += item;
        });

        //buscador - evento de teclado
      });

   
      
}


