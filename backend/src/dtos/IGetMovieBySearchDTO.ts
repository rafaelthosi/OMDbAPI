interface IGetMovieBySearchDTO {
    title: string,
    type?: string | null,
    year?: number | null,
    page?: number | null,
  }
  
  export { IGetMovieBySearchDTO };