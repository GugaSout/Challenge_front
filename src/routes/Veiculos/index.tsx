import React, { useState } from 'react';

interface Vehicle {
  model: string;
  year: number;
  plate: string;
  mileage: number;
  type: string;
}

export default function Veiculos(){

    const [vehicle, setVehicle] = useState<Vehicle>({
        model: '',
        year: 0,
        plate: '',
        mileage: 0,
        type: '',
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVehicle({ ...vehicle, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Vehicle   data:', vehicle);
        // Aqui você implementaria a lógica para salvar os dados, por exemplo, enviando para uma API
      };
    
      return (
        <div>
            <h1>Veículos</h1>
            <form onSubmit={handleSubmit}>
                <label>Modelo:</label>
                <input type="text" name="model" value={vehicle.model} onChange={handleChange} />
                <br/>
                <label>Ano:</label>
                <input type="number" name="year" value={vehicle.year} onChange={handleChange}/>
                <br/>
                <label>Placa:</label>
                <input type="text" name="plate" value={vehicle.plate} onChange={handleChange}/>
                <br/>
                <label>Quilometragem:</label>
                <input type="number" name="mileage" value={vehicle.mileage} onChange
                = {handleChange} />
                <br/>
                <label>Tipo:</label>
                
                <br/>
                <button type="submit">Salvar</button>

            </form>
        </div>
                
        // <form onSubmit={handleSubmit}>
        //   <div>
        //     <label htmlFor="model">Modelo:</label>
        //     <input type="text" id="model" name="model" value={vehicle.model} onChange={handleChange} />
        //   </div>
        //   {/* ... outros campos ... */}
        //   {/* <button type="submit">Salvar</button>
        // </form> */} 
        )
    }