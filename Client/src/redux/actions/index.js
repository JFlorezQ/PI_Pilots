import axios from "axios"

export const GET_DRIVERS = 'GET_DRIVERS'
export const GET_BY_NAME = 'GET_BY_NAME'

export function getDrivers(){
    return async function(dispatch){
      const response = await axios ('http://localhost:1030/drivers')
    return dispatch({
        type: "GET_DRIVERS",
        payload: response.data
    })
}
    }      

    export function getbyName(name) {
        return async function (dispatch) {
          try {
            const url = `http://localhost:1030/drivers/search/name?name=${name}`;
            const response = await axios(url);
            console.log(`Solicitud GET realizada a: ${url}`);
            console.log("Respuesta del servidor:", response.data);
            dispatch({
              type: GET_BY_NAME,
              payload: response.data,
            });
          } catch (error) {
            console.error("Error en la solicitud:", error);
          }
        };
      }
          