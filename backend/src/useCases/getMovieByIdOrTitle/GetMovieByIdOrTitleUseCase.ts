import { IGetMovieByIdOrTitleDTO } from "../../dtos/IGetMovieByIdOrTitleDTO";
import OMDbAPI from "../../shared/apis/OMDbAPI";


class GetMovieByIdOrTitleUseCase {
    async execute({
        id,
        title,
        type,
        year,
        plot,
    }: IGetMovieByIdOrTitleDTO): Promise<void> {
        // Verifica se um dos campos obrigatorios foi enviado
        if (!id && !title) {
            throw new Error("Campo 'title' ou 'id' nao enviado.")
        }

        // Se id não existir seta null
        if (!id) { id = null }

        // Se title não existir seta null
        if (!title) { title = null }

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

        // Verifica se o year é válido
        if (plot) {
            if (plot !== 'short' && plot !== 'full') {
                throw new Error("Campo 'plot' deve ser 'short' ou 'full'.")
            }
        } else { plot = null }

        const responseAPI = await OMDbAPI.get("/", {
            params: {
                apikey: process.env.apikey,
                i: id,
                t: title,
                type,
                y: year,
                plot,
            }
        })
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw new Error("Não foi possível buscar filme por 'title' ou 'id'. Erro: " + error)
            })

        return responseAPI
    }       
}

export { GetMovieByIdOrTitleUseCase };