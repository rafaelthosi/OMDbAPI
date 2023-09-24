import { IGetMovieBySearchDTO } from "../../dtos/IGetMovieBySearchDTO";
import OMDbAPI from "../../shared/apis/OMDbAPI";


class GetMovieBySearchUseCase {
    async execute({
        title,
        type,
        year,
        page,
    }: IGetMovieBySearchDTO): Promise<void> {
        // Verifica se o title foi enviado
        if (!title) {
            throw new Error("Campo 'title' não enviado.")
        } else { title = title }

        // Verifica se o type é válido
        if (type) {
            if (type !== 'movie' && type !== 'series' && type !== 'episode') {
                throw new Error("Campo 'type' deve ser 'movie', 'series' ou 'episode'.")
            }
        } else { type = null }

        // Verifica se o year é válido
        if (year) {
            if (String(year).length != 4) {
                throw new Error("Campo 'year' precisa ter o formato 'yyyy' (exemplo: '2023').")
            }
        } else { year = null }

        // Verifica se o page é válido
        if (page) {
            if (1 > page || 100 < page) {
                throw new Error("Campo 'page' precisa ser um número entre 1 e 100")
            }
        } else { page = null }

        const responseAPI = await OMDbAPI.get("/", {
            params: {
                apikey: process.env.apikey,
                s: title,
                type,
                y: year,
                page,
            }
        })
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw new Error("Não foi possível buscar filmes por 'search'. Erro: " + error)
            })

        return responseAPI
    }       
}

export { GetMovieBySearchUseCase };