// const screen = {
//     userProfile: document.querySelector('.profile-data'),
//     renderUser(user) {
//         this.userProfile.innerHTML = `<div class="info">
//                 <img src="${user.avatarUrl}" alt="foto do perfil do usuario"/>  
//                  <div class="data">
//                    <h1>${user.name ?? 'nao tem nome cadastrado'}</h1>
                   
//                    <p>${user.bio ?? 'nao tem bio cadastrada'}</p>
//                     <p>${user.followers ?? 'nao possue seguidores '}</p>
//                     <p>${user.following ?? 'nao esta seguindo '}</p>
//                   </div>
//                    </div>`


//         let repositoriesItens = ""
//       user.repositories.forEach(repo => repositoriesItens += 
//         ` <li class="repo-item">
//         <a href="${repo.url}"target="_blank">
//         ${repo.name}
//         <ul>
//         <li>${repo.forks}
//  </li>
//         <li>${repo.stars}
//  </li>
//         <li>${repo.watchers}
// </li>
//         <li>${repo.language}
// </li>
//         </ul>
//         </a>
//         </li>
//         `)
//         console.log(repositoriesItens)
     

//         if (user.repositories.length >0) {
//             this.userProfile.innerHTML += 
//             `<div class="repositories section">
//           <h3>repositorios</h3>
//           <ul>${repositoriesItens}</ul>

//           </div>`
//         }
//         let eventsList= '';
//         user.events.forEach( e => eventsList += `<ul>

//           <li> ${e.name} - ${e.message}</li>

//           </ul>`);

//           if (user.events.length > 0) {
//             this.userProfile.innerHTML += `<div class="events">
//             <h2>Eventos</h2>
//             <ul>${eventsList}</ul>

//             </div>`
//           }
         
        
//     },
//     renderNotFound(){
//        this.userProfile.innerHTML = "<h3>usuario nao encontrado</h3>"
//     }
// };

// export { screen }

const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user) {
      this.userProfile.innerHTML =
          `<div class="info">
              <img src="${user.avatarUrl} alt="foto de perfil do usuário"</img>
              <div class="data"
                  <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                  <p>${user.bio ?? 'Não possui bio cadastrado'}</p>
                  <p>Seguidores ${user.followers}</p>
                  <p>Seguindo ${user.following}</p>
                  <p></p>
               </div>
          </div>`
      let repositoriesItens = '';

      user.repositories.forEach(repository => repositoriesItens +=
          `<li class = "repo-item">
                <a href = "${repository.url}" target = "_blank">${repository.name}
                  <ul>
                      <li>🍴 ${repository.forks}</li>
                      <li>⭐️ ${repository.stars}</li>
                      <li>👀 ${repository.watchers}</li>
                      <li>#️⃣ ${repository.language}</li>
                  </ul>
                 </a>
           </li>`);
      if (user.repositories.length > 0) {
          this.userProfile.innerHTML += `<div class="repositories section">
                                              <h2>Repositórios</h2>
                                              <ul>${repositoriesItens}</ul>
                                          </div>`
      };


      let eventsList = '';
      user.events.forEach(e => eventsList += `<ul>
                                              <li>${e.name} - ${e.message}</li>
                                              
                                              </ul>`);
      if (user.events.length > 0) {
          this.userProfile.innerHTML += `<div class="events">
                                              <h2>Eventos</h2>
                                              <ul>${eventsList}</ul>
                                        </div>`
      }
  },
  renderNotFound() {
      this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
  }
};

export { screen }