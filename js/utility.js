export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function renderID() {
    return Math.random().toString(36).substring(2);
}

export function setCurrentUser(currentUser) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

export function setGuest(currentGuest) {
    localStorage.setItem('currentGuest', JSON.stringify(currentGuest));
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

export function getGuest() {
    return JSON.parse(localStorage.getItem('currentGuest'));
}

export function getDataFromDocs(docs) {
    let data = [];
    docs.forEach(function (doc) {
        data.push(getDataFromDoc(doc));
    });
    return data;
}

export function getDataFromDoc(doc) {
    let data = doc.data();
    data.id = doc.id;
    return data;
}