import { Request, Response } from "express";

import { GetMovieByIdOrTitleUseCase } from "./GetMovieByIdOrTitleUseCase";

class GetMovieByIdOrTitleController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, title, type, year, plot } = request.query;

        const getMovieByIdOrTitleUseCase = new GetMovieByIdOrTitleUseCase()

        const movie = await getMovieByIdOrTitleUseCase.execute({
            id: id as string,
            title: title as string,
            type: type as string,
            year: Number(year) as number,
            plot: plot as string,
        });
        
        return response.json(movie);
    }
}

export { GetMovieByIdOrTitleController };