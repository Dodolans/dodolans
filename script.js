console.log('readt----------.');

$(document).ready(function() {
    const urlApi = "https://gist.githubusercontent.com/Rahmadjaya/4f766d046ee40fe80761116a0fc0955e/raw/a326ca23332609d7744b80efdde075c5bbd7a594/products.json";

    function appendItemMovie(data) {
        console.log(JSON.parse(data));
        
      for(var i = 0; i <= data.length;i++){
        if(data[i] != undefined){
            console.log(data[i])
          var dataHtml = `
                              <ion-col size="6">
                                <ion-card class="ion-no-margin" style="height: 100%;">
                                  <img alt="Silhouette of mountains" src="`+data[i].image+`" />
                                  <ion-card-header>
                                    <ion-card-title>`+data[i].product_name+`</ion-card-title>
                                    <ion-card-subtitle>`+data[i].price+`</ion-card-subtitle>
                                  </ion-card-header>
                                </ion-card>
                              </ion-col>
                          `;
          $('#PlaylistMovie').append(dataHtml)
        }
      }
    }

    $.get(urlApi, function(data, status){
      appendItemMovie(JSON.parse(data));
      searchProduct()
    });

    function searchProduct() {
      const searchbar = document.querySelector('ion-searchbar');
      const items = Array.from(document.getElementById('PlaylistMovie').children);
      console.log('items', items)
      searchbar.addEventListener('ionInput', handleInput);
      function handleInput(event) {
        console.log(event)
        const query = event.target.value.toLowerCase();
        requestAnimationFrame(() => {
          items.forEach(item => {
            const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
            item.style.display = shouldShow ? 'block' : 'none';
          });
        });
      }
    }

    
 
       
});
