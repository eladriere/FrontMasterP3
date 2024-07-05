export default class Api {
    constructor() {
        this.baseUrl = "https://www.main-bvxea6i-zvfhmn7qyg7qu.fr-4.platformsh.site/"
    }

    myFetch = (url, init) => {
        return new Promise(((resolve, reject) => {
            fetch(`${this.baseUrl}/${url}`, init)
                .then(response => {
                    if (response.status === 200) {
                        resolve(response.json())
                    } else {
                        if (response.status === 401) {
                            localStorage.clear()
                            window.location.href = "/"
                        }
                        reject(response.status)
                    }
                })
                .catch(err => reject(err))
        }))
    }

    connexion = (mail, motDePasse) => {
        return this.myFetch('auth/login', {
            method: "POST",
            body: JSON.stringify({
                mail: mail,
                motDePasse: motDePasse
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }

    getUtilisateurDataByMail = (mail, token) => {
        return this.myFetch(`utilisateurs/${mail}`, {
            method: "GET",
            headers: {
                'Authorization' : `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    getAllUtilisateur = (token) => {
        return this.myFetch(`utilisateurs`, {
            method: "GET",
            headers: {
                'Authorization' : `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    getAllPieceWithRange = (offset, limit, token) => {
        return this.myFetch(`pieces/${offset}/${limit}`, {
            method: "GET",
            headers: {
                'Authorization' : `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    creerPiece = (data, token) => {
        return this.myFetch(`pieces/`, {
            method: "POST",
            body: JSON.stringify({
                data
            }),
            headers: {
                'Authorization' : `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
}