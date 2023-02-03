const result = document.querySelector(".result");

// console.log(result);

fetch('https://geo.api.gouv.fr/communes?nom=Strasbourg&fields=region,nom,code,codesPostaux,siren,codeEpci,codeDepartement,codeRegion,population&format=json&geometry=centre')

.then((response) => response.json())

.then((data) => {
    console.log(data)
    result.innerHTML = data[0].nom + " ( " + data[0].region.nom + " )" + "<br>"
    + data[0].population + " habitants."
    + "<br> Les Codes Postaux Sont : <br>"

    data[0].codesPostaux.forEach(codePostal => {
        result.innerHTML += codePostal + "<br>"
        
    });


});