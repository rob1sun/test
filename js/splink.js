	//Läs in IdP EntityID från json
                fetch('https://robertsundin.se/json/idpentityid.json')
            .then(function (idpResponse) {
                return idpResponse.json();
            })
            .then(function (idpData) {
                appendIdpData(idpData);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

//Append json och nästla efterföljande script
function appendIdpData(idpData) {
			const idp = idpData.idpEntityId;
			
		//Läs in SP-array från json
		fetch('https://robertsundin.se/json/splink.json')
            .then(function (spResponse) {
                return spResponse.json();
            })
            .then(function (spData) {
                appendSpData(spData);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
			//Append json och nästla efterföljande script
        function appendSpData(spData) {
			
            for (let x = 0; x < spData.length; x++) {
				let concLink = spData[x].spLink + idp + spData[x].spTarget;
				let spDisplayName = spData[x].spDisplayName
				


const dFrag = document.createDocumentFragment();
//for (let x in concLink) {				
const li = document.createElement('li');
  li.className = "flex-item";
  li.textContent = spDisplayName;
  const a = document.createElement('a');
  a.className = "flex-item-link";
  //a.textContent = spDisplayName;
  a.setAttribute('href', concLink);
  const img = document.createElement('img');
  img.className = "flex-item-img";
  img.textContent = concLink;
  //Just nu hårdkodad till en bild
  img.setAttribute('src', "./img/skolfed.jpg");
  
  dFrag.appendChild(li);
  li.appendChild(a);
  a.appendChild(img);
  
  document.getElementById('spList').appendChild(dFrag);

//
				var mainContainer = document.getElementById("myData");
                var div = document.createElement("div");
                div.innerHTML = concLink;
                mainContainer.appendChild(div);
}}}