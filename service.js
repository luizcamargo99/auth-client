async function httpPost(request) {
    return await fetch(request.url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': request.auth
        },
        body: request.user
      });
}

async function httpGet(request) {
    return await fetch(request.url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': request.auth
        }
      });
}
