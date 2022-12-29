
import { VacanteModalProps } from "../../interfaces"
import { FormWithCv } from "../FormWithCV";
import Flor2 from "../svg/flor2";
import Flor4 from "../svg/flor4";



export const VacanteModal = ({setShowModal, modalContent}:VacanteModalProps) => {

   
    console.log(modalContent);
        
    return (
      <>      
        <div className="justify-center items-center flex overflow-x-hidden  overflow-y-auto fixed inset-0 z-[999999] outline-none shadow-lg focus:outline-none backdrop-blur-sm bg-black bg-opacity-20 overflow-hidden lg:p-0 p-4"
            onClick={() => setShowModal(false)}
        >
            <div className="w-full mx-auto max-w-screen-lg relative bg-white overflow-y-scroll overflow-x-hidden h-5/6 py-8" onClick={e => e.stopPropagation()}>
                <div className='absolute left-0 top-44 bottom-0'>
                    <Flor4 className='fill-devarana-hazelnut w-full opacity-30 rotate-[25deg] -translate-x-28 scale-150' />
                </div>
                <div className='absolute right-0 bottom-0'>
                    <Flor2 className='fill-devarana-hazelnut w-full opacity-30 -rotate-[25deg] translate-y-[150%] translate-x-1/2 scale-150' />
                </div>
                <button className="absolute right-4 top-2" onClick={() => setShowModal(false)}>
                    Cerrar
                </button>
                <div className="bg-white h-full p-10">
                    <p className="text-devarana-pink font-bold text-1xl pb-3 uppercase">{ modalContent?.area }</p>
                    <p className="text-devarana-graph font-light text-4xl pb-9">{ modalContent?.titulo }</p>
                    <p className="text-devarana-graph font-light text-lg"> { modalContent?.descripcion } </p>
                    <p className="text-devarana-graph font-light text-lg py-5"> Áreas de experiencia: </p>
                    <ul className="text-devarana-graph font-light text-lg">
                        {
                            modalContent?.requisitos.map((actividad, index) => (
                                <li key={index}>- {actividad}</li>
                            ))
                        }
                    </ul>
                    <p className="text-devarana-graph font-light text-lg py-5"> Responsabilidades del puesto:  </p>
                    <ul className="text-devarana-graph font-light text-lg">
                        {
                                modalContent?.responsabilidades.map((responsabilidad, index) => (
                                <li key={index}>- {responsabilidad}</li>
                            ))
                        }
                    </ul>
                    <p className="text-devarana-graph font-light text-lg py-5">Prestaciones y beneficios adicionales: </p>
                    <ul className="text-devarana-graph font-light text-lg">
                        {
                                modalContent?.prestaciones.map((prestacion, index) => (
                                <li key={index}>- {prestacion}</li>
                            ))
                        }
                    </ul>
                <FormWithCv />
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-30 bg-black" />
        </>
    )
}
