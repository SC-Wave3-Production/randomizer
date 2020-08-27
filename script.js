function sendRequest(string) {
  const postUrl = 'https://silenthunt.space:3000/randomizer/randomize'
  return fetch(postUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'name' : string
  })
})
.then(response => response.json())
}

function getRequest() {
  const url = 'https://silenthunt.space:3000/randomizer/get-data'
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(data => data.json())
}


sendRequest('Max').then(data => console.log(data))