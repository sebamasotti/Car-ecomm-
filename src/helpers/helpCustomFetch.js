let listado = true;

const customFetch = (timeout, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (listado) {
                resolve(data)
            } else {
                reject("No se pudo")
            }
        }, timeout);
    },)
}

export default customFetch;