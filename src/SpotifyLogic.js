const endpoint = process.env.REACT_APP_ENDPOINT;
const clientID = process.env.REACT_APP_CLIENTID;
const redirectURI = process.env.REACT_APP_REDIRECTURI;


const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scopes=${scopes.join(
  "%20"
)}`;

export const getTokenFromURL = () => {
  return (
    window.location.hash
      //retorna la parte de la url despues del #
      .substring(1)
      //el substring(1) extrae el primer caracter e imprime el resto de la cadena hasta el final
      .split("&")
      //divide un string en un array de cadenas mediante el separador indicado
      .reduce((initial, item) => {
        //ejecuta una funcion reductora sobre cada elemento del array, y da como resultado un solo valor
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {})
  );
};
