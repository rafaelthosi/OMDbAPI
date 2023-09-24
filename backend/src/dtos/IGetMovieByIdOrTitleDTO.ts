interface IGetMovieByIdOrTitleDTO {
    id?: string | null,
    title?: string | null,
    type?: string | null,
    year?: number | null,
    plot?: string | null,
  }
  
  export { IGetMovieByIdOrTitleDTO };