import React from 'react';
import styled from 'styled-components';//! Modulo instalado temporalmente

//* Props otro Component            useState(15)  , useSelector(), fn()=>{}
export default function Paginado ({ videogamePerPage, all_games, paginado, }) {
  const pages_number = [];
  //*                 Redondea ^   22    /       15 = 1.46 => ceil(2)
  for (let i = 1; i <= Math.ceil(all_games/videogamePerPage); i++) {
    pages_number.push(i);
  }
  return (
    <div>
      <nav>
        <ul>
          <NumberPages>
            {
              pages_number?.map(number => {
                return (
                  <div key={number} >
                    <button onClick={() => paginado(number)} >
                      {number}
                    </button>
                  </div>
                );
              })
            }
          </NumberPages>
        </ul>
      </nav>
    </div>
  );
}

//! ESTOS SON LOS ESTILOS
const NumberPages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

`
