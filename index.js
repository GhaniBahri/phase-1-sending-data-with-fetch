// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",

    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle",
      }),
  };
  function submitData(name, email){
    const user= {name, email}
    const headers= {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(user)
    }
    return fetch('http://localhost:3000/users', headers).then(res=>res.json()).then(data=>document.body.append(data.id))
            .catch(err=>document.body.append( err.message))
  }
