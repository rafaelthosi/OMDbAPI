import { Router } from "express";

import { GetMovieByIdOrTitleController } from "../../../useCases/getMovieByIdOrTitle/GetMovieByIdOrTitleController";
import { GetMovieBySearchController } from "../../../useCases/getMovieBySearch/GetMovieBySearchController";

const moviesRoutes = Router();

const getMovieByIdOrTitleController = new GetMovieByIdOrTitleController();
const getMovieBySearchController = new GetMovieBySearchController();

moviesRoutes.get("/ByIdOrTitle", getMovieByIdOrTitleController.handle);

moviesRoutes.get("/BySearch", getMovieBySearchController.handle);

export { moviesRoutes };