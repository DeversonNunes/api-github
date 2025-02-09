import { getUser } from "/src/scripts/services/user.js"
import { getRepositories} from "/src/scripts/services/repositories.js"

import { user } from "/src/scripts/objects/user.js"
import { screen } from "/src/scripts/objects/screen.js"
import { userEvents } from "/src/scripts/services/events.js"

// faser a chamada do elemento do input tapy butoon 
document.getElementById('btn-search').addEventListener('click',()=>{
    // chamar o elemento do input e o valor
    const userName= document.getElementById('input-search').value
    // chamar a funcao
    if(validationInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e)=>{
    // aq eu ja estou dentro input 
    const userName= e.target.value
    const key= e.which || e.keyCode
    const isEnterKeyPressed= key === 13

    if (isEnterKeyPressed) {
        if(validationInput(userName)) return 
        getUserData(userName)
    }
})

function validationInput(userName) {
    if (userName.length ===0) {
        alert( 'prencha o campo com o nome do usuario do gitHub')
        return true
    }
}




async  function getUserData(userName) {

    const userResponse= await getUser(userName)
    if (userResponse.message === "Not found") {
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse= await userEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEventsUser(eventsResponse)
    screen.renderUser(user)
}



