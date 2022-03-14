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
    const $formG = document.getElementById("fNg")
    const $divElements = document.getElementById("divElements")
    const $btnSave = document.getElementById("btnSaveR")
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
            $form.left.value = "epsilon"
            let index = addJsonElement({
                alpha: $form.left.value,
                beta: $form.right.value
            })
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`Σ ➜ ${$form.right.value}`, index)

            $divElements.insertBefore($div, $divElements.firstChild)

            $form.reset()
        }else if($form.left.value == "" && $form.right.value == ""){
            $form.left.value = "epsilon"
            $form.right.value = "lamba"
            let index = addJsonElement({
                alpha: $form.left.value,
                beta: $form.right.value
            })
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`Σ ➜ λ`, index)

            $divElements.insertBefore($div, $divElements.firstChild)

            $form.reset() 
        }else{
            alert("No se puede ingresar solamente el campo izquierdo!!")
        }
    })

    $btnSave.addEventListener("click", (event) =>{
        parameters = parameters.filter(el => el != null)
        const $jsonDiv = document.getElementById("jsonDiv")
        $jsonDiv.innerHTML = `JSON: ${JSON.stringify(parameters)}`
        $.ajax({
            url:'insertGrama.php',
            type: 'POST',
            dataType: 'json',
            data: {
                nombre: $formG.nombre.value,
            }
        }).done();
          for(let value of parameters){
              $.ajax({
                  url:'insertarReglas.php',
                  type: 'POST',
                  dataType: 'json',
                  data: {
                      alpha: value.alpha,
                      beta: value.beta,
                      gramatica: $formG.nombre.value
                  }
              }).done();
          }
        $divElements.innerHTML = ""
        parameters = []
        alert("Gramatica creada B), se te mandara al menu principal c:")
        location.href="index.html"
    })
})()
const $btnReg = document.getElementById("btnReg");
$btnReg.addEventListener("click", (event) => {
    alert("Se regresera al menu principal B)")
    location.href="index.html"
})