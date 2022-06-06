import FormularioColaborador from "./pages/FormularioColaborador";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from '../../utils/Loader';
import Alerta from "../../components/Alerta";
import useView from "../../hooks/UseView";
const NuevoColaborador = () => {
  const { obtenerComanda, comanda, cargando, colaborador, agregarColaborador, alerta } = useView();
  const params = useParams();

  useEffect(() => {
    obtenerComanda(params.id);
  }, []);
  

  const {msg} = alerta;

  return (
    cargando ? <Loader /> : (
      <>
        <h1 className="text-4xl font-black">Añadir Colaborador(a) la comanda: {comanda.nombre} </h1>
        {msg && <Alerta alerta={alerta} />}
        <div className="mt-10 flex justify-center">
          <FormularioColaborador />
        </div>
        {cargando? <Loader /> : colaborador?._id && (
          <div className="flex justify-center mt-10">
            <div className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
                <h2 className="text-center mb-10 text-2xl font-bold">Resultado:</h2>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold p-2">{colaborador.nombre}</p>
                  <button
                  onClick={()=> agregarColaborador({email: colaborador.email})}
                    className="bg-red-600 px-3 py-2 text-center uppercase font-bold text-white rounded-lg cursor-pointer hover:bg-red-800 transition-colors"
                  >Agregar
                  </button>
                </div>
            </div>
          </div>
        )}
      </>

    )
  )
}

export default NuevoColaborador;