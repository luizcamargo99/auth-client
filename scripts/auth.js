
async function login() {
    const user = {
        'name': document.getElementById('name').value,
        'password': document.getElementById('password').value
    };
    
    const response = await httpPost({'url': BASE_URL.concat(ACTIONS.auth), 'user': JSON.stringify(user) });
    handleResponse(response);          
}

async function handleResponse(response) {
    const content = await response.json();
    if (response.status == HTTP_STATUS.ok) {
        localStorage.setItem('token', content.token);
        alert('Login Realizado!')
    }
    else {
        alert(content);
    }        
}