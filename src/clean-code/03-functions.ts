(() => {

  function getMovieById( movieId: string ) {
      console.log({ movieId });
  }

  function getActorsByMovieId( movieId: string ) {
      console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById( ActorId: string ) {
      console.log({ ActorId });
  }
  
  interface CreateMovieOptions {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({ title, description, rating, cast }: CreateMovieOptions) {
      console.log({ title, description, rating, cast });
  }

  function createActor( fullName: string, birthdate: Date ): boolean {
      
      // tarea asincrona para verificar nombre
      // ..
      // ..
      if ( fullName === 'fernando' ) return false;

      console.log('Crear actor');
      return true;        

  }

  // Continuar
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    
    if ( isDead ) return 1500;
    
    if ( isSeparated ) return 2500;

    return isRetired ? 3000 : 4000;
    
}  


})();

