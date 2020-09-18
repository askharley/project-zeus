import useAxios from '../hooks/useAxios';

/**
 * This is a service for the character slice of our application. This contains all methods that relate to getting data from the API.
 * However, this service does not care how we store the data i.e. if we use Redux, if we use local state. It it has to do is fetch the data.
 */
export default function useCharacterService() {
  const { isLoading, getRequest } = useAxios();

  const getCharacters = () => {
    return getRequest('/people/')
      .then((res) => res);
  };

  const getCharacter = (id) => {
    return getRequest(`/people/${id}`)
      .then((res) => res);
  };

  return { isLoading, getCharacters, getCharacter };
}
