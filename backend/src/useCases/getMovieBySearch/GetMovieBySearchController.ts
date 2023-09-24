import { Request, Response } from "express";

import { GetMovieBySearchUseCase } from "./GetMovieBySearchUseCase";

class GetMovieBySearchController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, type, year, page } = request.query;

        const getMovieBySearchUseCase = new GetMovieBySearchUseCase()

        const listMovies = await getMovieBySearchUseCase.execute({
            title: title as string,
            type: type as string,
            year: Number(year) as number,
            page: Number(page) as number,
        });
        
        return response.json(listMovies);
    }
}

export { GetMovieBySearchController };