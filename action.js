async function public() {
      const response = await httpGet({'url': BASE_URL.concat(ACTIONS.home, ENDPOINTS.public)});
      alert(await response.json());
}


async function private() {
    try {
          const response = await httpGet({'url': BASE_URL.concat(ACTIONS.home, ENDPOINTS.private), 'auth':
            `bearer ${localStorage.getItem('token')}`});

          alert(await response.json());

    } catch {
        alert('Sem autorização!');
    }
}

function removeToken() {
    localStorage.removeItem('token');
    alert('Token removido!')
}