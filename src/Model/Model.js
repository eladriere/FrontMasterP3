import Api from "../Controller/Api";

export default class Model {
    constructor() {
        this.api = new Api()
    }

     connexion = async(mail, motDePasse) => {
        try {
            return await this.api.connexion(mail, motDePasse)
        } catch(error) {
            return error
        }
    }

     getUtilisateurDataByMail = async (mail) => {
        try {
            return await this.api.getUtilisateurDataByMail(mail, localStorage.getItem("token"))
        } catch (error) {
            return error
        }
    }

    getAllUtilisateur = async () => {
        try {
            return await this.api.getAllUtilisateur(localStorage.getItem("token"))
        } catch (error) {
            return error
        }
    }

    creerPiece = async (data) => {
        try {
            return await this.api.creerPiece(data, localStorage.getItem("token"))
        } catch (error) {
            return error
        }
    }

     getAllPieceWithRange = async(offset, limit) => {
        try {
            return await this.api.getAllPieceWithRange(offset, limit, localStorage.getItem("token"))
        } catch (error) {
           return error
        }
    }
}