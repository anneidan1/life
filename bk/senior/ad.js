 function redirectToMethod(baseURL) {
        const randomString = Array(150).fill(null).map(() => Math.random().toString(36).charAt(2)).join('');
        window.location.href = baseURL + '?' + randomString;
    }