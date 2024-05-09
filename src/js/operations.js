export function listWithInnerHtml(coders, tbody) {
    tbody.innerHTML = ""
    coders.forEach((coder) => {     
        tbody.innerHTML += `
          <tr>
            <th scope="row">${coder.id}</th>
            <td contenteditable="true">${coder.name}</td>
            <td>${coder.lastName}</td>
            <td>${coder.email}</td>
          </tr>
    `
    });
    
}

// export function listWithBasicElements(coders, tbody) {
//     coders.forEach(coder => {
//         const tr = document.createElement("tr")
//         for (let i = 0; i < 4; i++) {
//             const td = document.createElement("td")
//             tr.appendChild(td)
//         }
//         tr.firstChild.textContent=coder.id
//         tr.firstChild.nextSibling.textContent=coder.name
//         tr.firstChild.nextSibling.nextSibling.textContent=coder.lastName
//         tr.lastChild.textContent=coder.email
        
//         tbody.appendChild(tr)
//     });
// }

 export function create(coders,name,email,lastName){
            const tempCoder = {
                id: Date.now(),
                name: name.value,
                lastName: lastName.value,
                email: email.value
            }
            coders.push(tempCoder)
    
}



