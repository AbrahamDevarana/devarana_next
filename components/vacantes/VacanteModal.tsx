
import { VacanteModalProps } from "../../interfaces"
import { FormWithCv } from "../FormWithCV";



export const VacanteModal = ({setShowModal, showModal, modalContent}:VacanteModalProps) => {
    
    return (
      <>      
        <div className="justify-center items-center flex overflow-x-hidden  overflow-y-auto fixed inset-0 z-[999999] outline-none shadow-lg focus:outline-none backdrop-blur-sm bg-black bg-opacity-20 overflow-hidden lg:p-0 p-4"
            onClick={() => setShowModal(false)}
        >
            <div className="w-full mx-auto max-w-screen-lg relative bg-white overflow-y-scroll h-5/6 py-8" onClick={e => e.stopPropagation()}>
                <button className="absolute right-4 top-2" onClick={() => setShowModal(false)}>
                    Cerrar
                </button>
                <div className="bg-white h-full p-10">
                    <p className="text-devarana-pink font-bold text-1xl pb-3">ARQUITECTURA E INGENIERÍA</p>
                    <p className="text-devarana-graph font-light text-4xl pb-9">Analista de Costos y Presupuestos</p>
                    <p className="text-devarana-graph font-light text-lg"> ¡Buscamos un <span className="text-devarana-pink">Analista de Costos y Presupuestos</span> con pasión por su trabajo y excelencia en su desempeño diario! </p>
                    <p className="text-devarana-graph font-light text-lg pb-5"> Entre tus actividades estarás involucrado en: </p>
                    <ul className="text-devarana-graph font-light text-lg">
                        <li>- Elaboración de presupuesto conceptual, ante presupuestos y presupuestos ejecutivos.</li>
                        <li>- Elaboración y/o revisión de generadores de obra.</li>
                        <li>- Elaboración de comparativa de precios de insumos generales de obra. (Ingenierías de valor)</li>
                        <li>- Contribuir con el objetivo financiero de los convenios en cada partida del presupuesto.</li>
                    </ul>
                    <p className="text-devarana-graph font-light text-lg py-5"> Áreas de experiencia: </p>
                        <ul className="text-devarana-graph font-light text-lg">
                            <li>- 2 años mínimo en el área de costos y presupuestos.</li>
                            <li>- Experiencia comprobable en obra privada.</li>
                            <li>- Experiencia en el análisis de rendimiento en mano de obra y materiales.</li>
                            <li>- Experiencia en generadores de proyecto en gabinete.</li>
                        </ul>
                <FormWithCv />
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-30 bg-black" />
        </>
    )
}
