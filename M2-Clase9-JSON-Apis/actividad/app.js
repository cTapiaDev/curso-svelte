const agenteUnoJSON = '{"nombreClave": "Jaguar", "misiones": 27, "equipo": ["Reloj Láser", "Gafas de Visión Nocturna"], "activo": true, "identidadSecreta": {"nombre": "Juan Pérez"}}';

const agenteDosJSON = '{"nombreClave": "Cobra", "misiones": 35, "equipo": ["Dardo Venenoso", "Micro-cámara"], "activo": false, "identidadSecreta": {"nombre": "Ana Gómez"}}';

const agenteUnoObj = JSON.parse(agenteUnoJSON);
const agenteDosObj = JSON.parse(agenteDosJSON);

console.log(agenteUnoObj.nombreClave);
console.log(agenteUnoObj.equipo[1]);
console.log(agenteUnoObj.identidadSecreta.nombre);

const reporte = `Reporte del Agente ${agenteDosObj.nombreClave}: Ha completado ${agenteDosObj.misiones} misiones. Estado actual: ${agenteDosObj.activo ? 'Activo' : 'Retirado'}.`;
console.log(reporte);


