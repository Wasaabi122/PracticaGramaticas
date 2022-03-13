let parameters = []
function removeElement(event, position) {
    event.target.parentElement.remove()
    delete parameters[position]
}

const addJsonElement = json => {
    parameters.push(json)
    return parameters.length - 1
}

(function load(){
    const $form = document.getElementById("fmGramaticas")
    const $divElements = document.getElementById("divElements")
    const $btnSave = document.getElementById("btnSave")
    const $btnAdd = document.getElementById("btnAdd")
    var aux = 0;

    const templateElement = (data, position) => {
        return (`
            <button class="delete" onclick="removeElement(event, ${position})"></button>
            <strong>Regla - </strong> ${data}
        `)
    }

    $btnAdd.addEventListener("click", (event) => {
        if($form.left.value != "" && $form.right.value != ""){
            let index = addJsonElement({
                alpha: $form.left.value,
                beta: $form.right.value
            })
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.left.value} ➜ ${$form.right.value}`, index)

            $divElements.insertBefore($div, $divElements.firstChild)

            $form.reset()
        }else if($form.left.value == "" && $form.right.value != ""){
            $form.left.value = "Σ"
            let index = addJsonElement({
                alpha: $form.left.value,
                beta: $form.right.value
            })
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.left.value} ➜ ${$form.right.value}`, index)

            $divElements.insertBefore($div, $divElements.firstChild)

            $form.reset()
        }else{
            alert("Complete al menos el campo derecho")
        }
    })

    $btnSave.addEventListener("click", (event) =>{
        parameters = parameters.filter(el => el != null)
        const $jsonDiv = document.getElementById("jsonDiv")
        $jsonDiv.innerHTML = `JSON: ${JSON.stringify(parameters)}`
       /* fetch('insertarReglas.php',{
            method: 'POST',
            body: JSON.stringify(parameters)
        })
          .then(respuesta=>respuesta.json)
          .then(respuesta=>{

          }).catch(error =>console.log("error", error))*/
          for(let value of parameters){
            fetch('insertarReglas.php',{
                method: 'POST',
                headers: { 
                    'Content-type' : 'text/json' 
                 },
                body: JSON.stringify(value)
            })
              .then(respuesta => respuesta.json)
              .then(value => {
                console.log(value);
              }).catch(error => console.log("error", error));
              console.log(value);
          }
        $divElements.innerHTML = ""

       /* parameters.forEach(
            
            fetch('', {method:"POST", Element}).then(respuesta => respuesta.json).then(respuesta =>{ }).catch(error =>console.log("error", error))

        );*/
        parameters = []
    })
})()