// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { VacanteProps } from '../../interfaces'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const vacantes:VacanteProps[] = [
        {
            id: 1,
            area: 'Arquitectura e Ingeniería',
            titulo: 'Arquitecto Gestor de Trámites',
            descripcion: '¡Estamos en búsqueda de un Arquitecto Gestor de Trámites con pasión por su trabajo y excelencia en su desempeño diario!',
            requisitos: [
                'Licenciatura en Arquitectura o Ingeniería Civil.',
                'Experiencia en gestión de trámites ante dependencias.',
                'Uso intermedio-avanzado de Autocad.',
                'Experiencia en la elaboración de planos ejecutivos.',
            ],
            responsabilidades: [
                'Elaboración de expedientes y carpetas técnicas.',
                'Gestión de trámites inmobiliarios ante dependencias de gobierno y empresas prestadoras de servicios.',
                'Llevar a cabo las actividades pertinentes para obtener los permisos o autorizaciones municipales necesarias para proyectos habitacionales, plazas comerciales y/o naves industriales.',
                'Establecer relación con las áreas de trámites de los distintos organismos de gobierno.',
                'Elaboración de planos para Municipio y dependencias externas.',
                'Participación en la elaboración del proyecto ejecutivo.',
            ],
            prestaciones: [
                'Salario base de acuerdo a experiencia comprobable',
                'Prestaciones de Ley',
                'Seguro de Gastos Médicos Mayores.',
                'Bono trimestral por cumplimiento de objetivos.',
                '15 días adicionales de aguinaldo'
            ],
        },
        {
            id: 2,
            area: 'Arquitectura e Ingeniería',
            titulo: 'Arquitecto Dibujante Proyectista-Proyecto Ejecutivo',
            descripcion: '¡Estamos en búsqueda de un Arquitecto Dibujante Proyectista - Proyecto Ejecutivo, con pasión por su trabajo y excelencia en su desempeño diario!',
            requisitos: [
                'Licenciatura en Arquitectura o Ingeniería Civil( Recién egresados o personas con 1 a 3 años de experiencia laboral)',
                'Uso intermedio-avanzado de Software de modelado 3D (REVIT /Archicad)',
                'Uso avanzado de Autocad',
                'Deseable conocimientos en metodologías BIM.',
                'Experiencia en la elaboración de planos ejecutivos',
                'Conocimiento básico deseable en procesos constructivos',
                'Experiencia en elaboración de planos as built.',
            ],
            responsabilidades: [
                'Elaboración de Plantas Arquitectónicas, Cortes y fachadas.',
                'Elaboración de Planos de albañilería.',
                'Elaboración de Planos de Acabados muros, pisos y plafones.',
                'Elaboración de Planos de iluminación y contactos.',
                'Elaboración de Planos de carpinterías.',
                'Elaboración de Planos de cancelerías y herrerías.',
                'Elaboración de Renders de trabajo.',
                'Elaboración de planos para Municipio y dependencias externas.',
                'Entrega de planos al equipo de construcción.',
                'Revisiones de proyecto en Obra.',
                'Gestionar el proceso de optimización de planos provenientes de la construcción.',
                'Elaboración de planos As-built del proyecto.',
                'Gestión de trámites ante dependencias externas.',
            ],
            prestaciones: [
                'Salario base de acuerdo a experiencia comprobable',
                'Prestaciones de Ley',
                'Seguro de Gastos Médicos Mayores.',
                'Bono trimestral por cumplimiento de objetivos.',
                '15 días adicionales de aguinaldo'
            ]
        },
        {
            id: 3,
            area: 'Arquitectura e Ingeniería',
            titulo: 'Analista de Costos y Presupuestos',
            descripcion: '¡Buscamos un Analista de Costos y Presupuestos con pasión por su trabajo y excelencia en su desempeño diario!',
            requisitos: [
                'Elaboración de presupuesto conceptual, ante presupuestos y presupuestos ejecutivos.',
                'Elaboración y/o revisión de generadores de obra.',
                'Elaboración de comparativa de precios de insumos generales de obra.(Ingenierías de valor) ',
                'Contribuir con el objetivo financiero de los convenios en cada partida del presupuesto.',
                'Revisión de rendimientos de mano de obra, así como conciliación de materiales con el equipo de construcción.',
                'Generación de matrices y precios unitarios.',
                'Revisión de propuestas económicas con contratistas.',
                'Alta de insumos de obra en Software ERP. ',
            ],
            responsabilidades: [
                '2 años mínimo en el área de Costos y  presupuestos. ',
                'Experiencia comprobable en obra privada. ',
                'Experiencia en el análisis de rendimiento en mano de obra y materiales. ',
                'Experiencia en generadores de proyecto en gabinete. ',
                'Experiencia en la generación de catálogos de precios unitarios.',
                'Haber desarrollado comparativas de costos (Ingeniería de valor) .',
                '1 año de experiencia indispensable en el manejo del software OPUS',
                'Manejo intermedio-avanzado de Autocad',
                'Conocimiento deseable en metodologías BIM',
                'Uso deseable del Software ERP ENKONTROL',
            ],
            prestaciones: [
                'Salario base de acuerdo a experiencia comprobable',
                'Prestaciones de Ley',
                'Seguro de Gastos Médicos Mayores.',
                'Bono trimestral por cumplimiento de objetivos.',
                '15 días adicionales de aguinaldo'
            ]
        },
        {
            id: 4,
            area: 'Comercial',
            titulo: 'Asesor Comercial Sr.',
            descripcion: '¡Buscamos un Asesor Comercial Sr. con pasión por su trabajo y excelencia en su desempeño diario!',
            requisitos: [
                'Licenciatura terminada en Comercio, administración, mercadotecnia o afín.',
                '2 años mínimo de experiencia en el ramo inmobiliario o Atención a cliente en sectores premium',
                'Conocimiento de uso de CRM',
                'Perfilamiento de cliente, Manejo de objeciones.',
                'Inglés Intermedio',
            ],
            responsabilidades: [
                'Prospección de clientes sector premium',
                'Asesoramiento y atención a los clientes',
                'Seguimiento de cartera en CRM',
                'Cierre de ventas de acuerdo a las metas Comerciales',
            ],
            prestaciones: [
                'Salario base enfocado en cumplimiento de objetivos',
                'Esquema de comisiones',
                'Seguro de Gastos Médicos Mayores y seguro de vida',
                'Excelente ambiente de trabajo - somos GPTW y ESR.',
            ]
        
        }
    ]
    res.status(200).json({ vacantes })
}
