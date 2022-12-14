
type Option =
	'ISO'; // Check date format is ISO (eg: 2020-01-01)
type Files = { [key: string]: Option[] };

/**
 * All the files in the output directory should match at least
 * one of these patterns. Tags are optional.
 *
 * All files are checked for empty lines.
 *
 * Valid tags:
 *   - ISO: Validates that the CSV file has at least one column with the format yyyy-MM-dd
 */
const FILES: Files = {
	'producto0/descargas.csv': [],
	'producto0/vistas.csv': [],
	'producto1/Covid-19.csv': ['ISO'],
	'producto1/Covid-19_std.csv': [],
	'producto1/Covid-19_T.csv': [],
	'producto2/*-CasosConfirmados.csv': [],
	'producto3/CasosTotalesCumulativo.csv': ['ISO'],
	'producto3/TotalesPorRegion.csv': ['ISO'],
	'producto3/CasosTotalesCumulativo_std.csv': [],
	'producto3/CasosTotalesCumulativo_T.csv': [],
	'producto3/TotalesPorRegion_std.csv': [],
	'producto3/TotalesPorRegion_T.csv': [],
	'producto4/*-CasosConfirmados-totalRegional.csv': [],
	'producto5/TotalesNacionales.csv': ['ISO'],
	'producto5/TotalesNacionales_std.csv': [],
	'producto5/TotalesNacionales_T.csv': [],
	'producto6/bulk/data.csv': [],
	'producto7/PCR.csv': ['ISO'],
	'producto7/PCR_std.csv': [],
	'producto7/PCR_T.csv': [],
	'producto8/UCI.csv': ['ISO'],
	'producto8/UCI_std.csv': [],
	'producto8/UCI_T.csv': [],
	'producto9/HospitalizadosUCIEtario.csv': ['ISO'],
	'producto9/HospitalizadosUCIEtario_std.csv': [],
	'producto9/HospitalizadosUCIEtario_T.csv': [],
	'producto10/FallecidosEtario.csv': ['ISO'],
	'producto10/FallecidosEtario_std.csv': [],
	'producto10/FallecidosEtario_T.csv': [],
	'producto11/bulk/producto4.csv': [],
	'producto12/bulk/producto7.csv': [],
	'producto13/CasosNuevosCumulativo.csv': ['ISO'],
	'producto13/CasosNuevosCumulativo_std.csv': [],
	'producto13/CasosNuevosCumulativo_T.csv': [],
	'producto14/FallecidosCumulativo.csv': ['ISO'],
	'producto14/FallecidosCumulativo_std.csv': [],
	'producto14/FallecidosCumulativo_T.csv': [],
	'producto15/FechaInicioSintomas.csv': [],
	'producto15/FechaInicioSintomasHistorico_2020.csv': [],
	'producto15/FechaInicioSintomasHistorico_2020_std.csv': [],
	'producto15/FechaInicioSintomasHistorico_2021.csv': [],
	'producto15/FechaInicioSintomasHistorico_2021_std.csv': [],
	'producto15/FechaInicioSintomas_std.csv': [],
	'producto15/FechaInicioSintomas_T.csv': [],
	'producto15/SemanasEpidemiologicas.csv': [],
	'producto16/CasosGeneroEtario.csv': ['ISO'],
	'producto16/CasosGeneroEtarioEtapaClinica.csv': ['ISO'],
	'producto16/CasosGeneroEtarioEtapaClinica_std.csv': ['ISO'],
	'producto16/CasosGeneroEtarioEtapaClinica_t.csv': [],
	'producto16/CasosGeneroEtario_std.csv': [],
	'producto16/CasosGeneroEtario_T.csv': [],
	'producto17/PCREstablecimiento.csv': ['ISO'],
	'producto17/PCREstablecimiento_std.csv': [],
	'producto17/PCREstablecimiento_T.csv': [],
	'producto18/TasaDeIncidencia.csv': ['ISO'],
	'producto18/TasaDeIncidencia_std.csv': [],
	'producto18/TasaDeIncidencia_T.csv': [],
	'producto19/CasosActivosPorComuna.csv': ['ISO'],
	'producto19/CasosActivosPorComuna_std.csv': [],
	'producto19/CasosActivosPorComuna_T.csv': [],
	'producto20/NumeroVentiladores.csv': ['ISO'],
	'producto20/NumeroVentiladores_std.csv': [],
	'producto20/NumeroVentiladores_T.csv': [],
	'producto21/SintomasCasosConfirmados.csv': ['ISO'],
	'producto21/Sintomas.csv': ['ISO'],
	'producto21/SintomasHospitalizados.csv': ['ISO'],
	'producto21/SintomasCasosConfirmados_std.csv': [],
	'producto21/SintomasCasosConfirmados_T.csv': [],
	'producto21/SintomasHospitalizados_std.csv': [],
	'producto21/SintomasHospitalizados_T.csv': [],
	'producto21/Sintomas_std.csv': [],
	'producto21/Sintomas_T.csv': [],
	'producto22/HospitalizadosEtario_Acumulado.csv': ['ISO'],
	'producto22/HospitalizadosUCI_Acumulado.csv': ['ISO'],
	'producto22/HospitalizadosEtario_Acumulado_std.csv': [],
	'producto22/HospitalizadosEtario_Acumulado_T.csv': [],
	'producto22/HospitalizadosUCI_Acumulado_std.csv': [],
	'producto22/HospitalizadosUCI_Acumulado_T.csv': [],
	'producto23/PacientesCriticos.csv': ['ISO'],
	'producto23/PacientesCriticos_std.csv': [],
	'producto23/PacientesCriticos_T.csv': [],
	'producto24/CamasHospital_Diario.csv': ['ISO'],
	'producto24/CamasHospital_Diario_std.csv': [],
	'producto24/CamasHospital_Diario_T.csv': [],
	'producto25/CasosActualesPorComuna.csv': ['ISO'],
	'producto25/CasosActualesPorComuna_std.csv': [],
	'producto25/CasosActualesPorComuna_T.csv': [],
	'producto26/CasosNuevosConSintomas.csv': ['ISO'],
	'producto26/CasosNuevosConSintomas_std.csv': [],
	'producto26/CasosNuevosConSintomas_T.csv': [],
	'producto27/CasosNuevosSinSintomas.csv': ['ISO'],
	'producto27/CasosNuevosSinSintomas_std.csv': [],
	'producto27/CasosNuevosSinSintomas_T.csv': [],
	'producto28/FechaInicioSintomas_reportadosSEREMI.csv': [],
	'producto28/FechaInicioSintomas_reportadosSEREMIHistorico.csv': [],
	'producto28/FechaInicioSintomas_reportadosSEREMIHistorico_std.csv': [],
	'producto28/FechaInicioSintomas_reportadosSEREMI_std.csv': [],
	'producto28/FechaInicioSintomas_reportadosSEREMI_T.csv': [],
	'producto29/Cuarentenas-Activas.csv': [],
	'producto29/Cuarentenas-Historicas.csv': [],
	'producto29/Cuarentenas-Totales.csv': [],
	'producto30/PacientesVMI.csv': ['ISO'],
	'producto30/PacientesVMI_std.csv': [],
	'producto30/PacientesVMI_T.csv': [],
	'producto31/2020-Nacimientos.csv': ['ISO'],
	'producto31/2020-Nacimientos_std.csv': [],
	'producto31/2020-Nacimientos_T.csv': [],
	'producto31/2021-Nacimientos.csv': ['ISO'],
	'producto31/2021-Nacimientos_std.csv': [],
	'producto31/2021-Nacimientos_T.csv': [],
	'producto31/Nacimientos.csv': [],
	'producto31/Nacimientos_std.csv': [],
	'producto31/Nacimientos_T.csv': [],
	'producto32/2020-Defunciones.csv': ['ISO'],
	'producto32/2020-Defunciones_std.csv': [],
	'producto32/2020-Defunciones_T.csv': [],
	'producto32/2021-Defunciones.csv': ['ISO'],
	'producto32/2021-Defunciones_std.csv': [],
	'producto32/2021-Defunciones_T.csv': [],
	'producto32/Defunciones.csv': [],
	'producto32/Defunciones_std.csv': [],
	'producto32/Defunciones_T.csv': [],
	'producto33/IndiceDeMovilidad-IM.csv': ['ISO'],
	'producto33/IndiceDeMovilidad-IM_externo.csv': ['ISO'],
	'producto33/IndiceDeMovilidad-IM_interno.csv': ['ISO'],
	'producto33/IndiceDeMovilidad.csv': [],
	'producto33/IndiceDeMovilidad-IM_externo_T.csv': [],
	'producto33/IndiceDeMovilidad-IM_interno_T.csv': [],
	'producto33/IndiceDeMovilidad-IM_T.csv': [],
	'producto33/IndiceDeMovilidad_std.csv': [],
	'producto33/Nuevo_IndiceDeMovilidad-IM.csv': ['ISO'],
	'producto33/Nuevo_IndiceDeMovilidad-IM_externo.csv': ['ISO'],
	'producto33/Nuevo_IndiceDeMovilidad-IM_interno.csv': ['ISO'],
	'producto33/Nuevo_IndiceDeMovilidad.csv': [],
	'producto33/Nuevo_IndiceDeMovilidad-IM_externo_T.csv': [],
	'producto33/Nuevo_IndiceDeMovilidad-IM_interno_T.csv': [],
	'producto33/Nuevo_IndiceDeMovilidad-IM_T.csv': [],
	'producto33/Nuevo_IndiceDeMovilidad_std.csv': [],
	'producto34/Cuarentenas_Censo17.csv': [],
	'producto35/Comorbilidad.csv': ['ISO'],
	'producto35/Comorbilidad_std.csv': [],
	'producto35/Comorbilidad_T.csv': [],
	'producto36/ResidenciasSanitarias.csv': ['ISO'],
	'producto36/ResidenciasSanitarias_std.csv': [],
	'producto36/ResidenciasSanitarias_T.csv': [],
	'producto37/Defunciones.csv': ['ISO'],
	'producto37/Defunciones_deis.csv': ['ISO'],
	'producto37/Defunciones_deis_std.csv': [],
	'producto37/Defunciones_deis_T.csv': [],
	'producto37/Defunciones_std.csv': [],
	'producto37/Defunciones_T.csv': [],
	'producto38/CasosFallecidosPorComuna.csv': ['ISO'],
	'producto38/CasosFallecidosPorComuna_std.csv': [],
	'producto38/CasosFallecidosPorComuna_T.csv': [],
	'producto39/NotificacionInicioSintomas.csv': ['ISO'],
	'producto39/NotificacionInicioSintomas_std.csv': [],
	'producto39/NotificacionInicioSintomas_T.csv': [],
	'producto40/TransporteAereo_std.csv': [],
	'producto41/BIPComuna_std.csv': [],
	'producto41/BIPTotal_std.csv': [],
	'producto42/ViajesComunas_std.csv': [],
	'producto43/CO-*_std.csv': [],
	'producto43/MP10-*_std.csv': [],
	'producto43/MP2.5-*_std.csv': [],
	'producto43/NO2-*_std.csv': [],
	'producto43/O3-*_std.csv': [],
	'producto43/SO2-*_std.csv': [],
	'producto44/EgresosHospitalarios.csv': ['ISO'],
	'producto44/EgresosHospitalarios_std.csv': [],
	'producto44/EgresosHospitalarios_T.csv': [],
	'producto45/CasosConfirmadosPorComuna.csv': [],
	'producto45/CasosConfirmadosPorComunaHistorico.csv': [],
	'producto45/CasosConfirmadosPorComunaHistorico_std.csv': [],
	'producto45/CasosConfirmadosPorComunaHistorico_2020.csv': [],
	'producto45/CasosConfirmadosPorComunaHistorico_2020_std.csv': [],
	'producto45/CasosConfirmadosPorComunaHistorico_2021.csv': [],
	'producto45/CasosConfirmadosPorComunaHistorico_2021_std.csv': [],
	'producto45/CasosConfirmadosPorComuna_std.csv': [],
	'producto45/CasosConfirmadosPorComuna_T.csv': [],
	'producto45/CasosNoNotificadosPorComuna.csv': [],
	'producto45/CasosNoNotificadosPorComunaHistorico.csv': [],
	'producto45/CasosNoNotificadosPorComunaHistorico_std.csv': [],
	'producto45/CasosNoNotificadosPorComunaHistorico_2020.csv': [],
	'producto45/CasosNoNotificadosPorComunaHistorico_2020_std.csv': [],
	'producto45/CasosNoNotificadosPorComunaHistorico_2021.csv': [],
	'producto45/CasosNoNotificadosPorComunaHistorico_2021_std.csv': [],
	'producto45/CasosNoNotificadosPorComuna_std.csv': [],
	'producto45/CasosNoNotificadosPorComuna_T.csv': [],
	'producto45/CasosProbablesPorComuna.csv': [],
	'producto45/CasosProbablesPorComunaHistorico.csv': [],
	'producto45/CasosProbablesPorComunaHistorico_std.csv': [],
	'producto45/CasosProbablesPorComunaHistorico_2020.csv': [],
	'producto45/CasosProbablesPorComunaHistorico_2020_std.csv': [],
	'producto45/CasosProbablesPorComunaHistorico_2021.csv': [],
	'producto45/CasosProbablesPorComunaHistorico_2021_std.csv': [],
	'producto45/CasosProbablesPorComuna_std.csv': [],
	'producto45/CasosProbablesPorComuna_T.csv': [],
	'producto45/SemanasEpidemiologicas.csv': [],
	'producto46/activos_vs_recuperados_t.csv': ['ISO'],
	'producto46/activos_vs_recuperados.csv': [],
	'producto46/activos_vs_recuperados_std.csv': [],
	'producto47/MediaMovil.csv': ['ISO'],
	'producto47/MediaMovil_std.csv': [],
	'producto47/MediaMovil_T.csv': [],
	'producto48/SOCHIMI.csv': ['ISO'],
	'producto48/SOCHIMI_std.csv': [],
	'producto48/SOCHIMI_T.csv': [],
	'producto49/Positividad_Diaria_Media.csv': ['ISO'],
	'producto49/Positividad_Diaria_Media_std.csv': [],
	'producto49/Positividad_Diaria_Media_T.csv': [],
	'producto49/Positividad_Diaria_Media_Ag.csv': ['ISO'],
	'producto49/Positividad_Diaria_Media_Ag_std.csv': [],
	'producto49/Positividad_Diaria_Media_Ag_T.csv': [],
	'producto50/DefuncionesDEIS_confirmadosPorComuna.csv': ['ISO'],
	'producto50/DefuncionesDEISPorComuna.csv': ['ISO'],
	'producto50/DefuncionesDEIS_sospechososPorComuna.csv': ['ISO'],
	'producto50/DefuncionesDEIS_confirmadosPorComuna_std.csv': [],
	'producto50/DefuncionesDEIS_confirmadosPorComuna_T.csv': [],
	'producto50/DefuncionesDEISPorComuna_std.csv': [],
	'producto50/DefuncionesDEISPorComuna_T.csv': [],
	'producto50/DefuncionesDEIS_sospechososPorComuna_std.csv': [],
	'producto50/DefuncionesDEIS_sospechososPorComuna_T.csv': [],
	'producto51/ISCI_std.csv': [],
	'producto52/Camas_UCI.csv': ['ISO'],
	'producto52/Camas_UCI_std.csv': [],
	'producto52/Camas_UCI_t.csv': [],
	'producto53/confirmados_nacional.csv': [],
	'producto53/confirmados_provinciales.csv': [],
	'producto53/confirmados_regionales.csv': [],
	'producto53/confirmados_ss.csv': [],
	'producto54/r.nacional.csv': [],
	'producto54/r.nacional_n.csv': [],
	'producto54/r.provincial_copy.csv': [],
	'producto54/r.provincial.csv': [],
	'producto54/r.provincial_n.csv': [],
	'producto54/r.regional.csv': [],
	'producto54/r.regional_n.csv': [],
	'producto54/r.ss.csv': [],
	'producto54/r.ss_n.csv': [],
	'producto55/Positividad_nacional.csv': [],
	'producto55/Positividad_por_comuna.csv': [],
	'producto55/Positividad_por_provincia.csv': [],
	'producto55/Positividad_por_region.csv': [],
	'producto56/prob48.nacional.csv': [],
	'producto56/prob48.provincial.csv': [],
	'producto56/prob48.regional.csv': [],
	'producto57/fallecidos_hospitalizados.csv': ['ISO'],
	'producto57/fallecidos_hospitalizados_std.csv': [],
	'producto58/Camas_UCI_diarias.csv': ['ISO'],
	'producto58/Camas_UCI_diarias_std.csv': [],
	'producto58/Camas_UCI_diarias_t.csv': [],
	'producto59/etapa_clinica_por_fecha_notificacion.csv': ['ISO'],
	'producto60/etapa_clinica_por_fis.csv': ['ISO'],
	'producto61/serie_fallecidos_comuna.csv': ['ISO'],
	'producto62/casos_nuevos_acumulados_por_fecha.csv': [],
	'producto63/NNotificacionPorComuna.csv': ['ISO'],
	'producto63/NNotificacionPorComuna_std.csv': [],
	'producto63/NNotificacionPorComuna_T.csv': [],
	'producto64/BACPorComuna.csv': ['ISO'],
	'producto64/BACPorComuna_std.csv': [],
	'producto64/BACPorComuna_T.csv': [],
	'producto65/PositividadPorComuna.csv': ['ISO'],
	'producto65/PositividadPorComuna_std.csv': [],
	'producto65/PositividadPorComuna_T.csv': [],
	'producto66/CoberturaPorComuna.csv': ['ISO'],
	'producto66/CoberturaPorComuna_std.csv': [],
	'producto66/CoberturaPorComuna_T.csv': [],
	'producto67/OportunidadPorComuna.csv': ['ISO'],
	'producto67/OportunidadPorComuna_std.csv': [],
	'producto67/OportunidadPorComuna_T.csv': [],
	'producto68/tasa_test_semanal_comunal.csv': [],
	'producto68/tasa_test_semanal_nacional.csv': [],
	'producto68/tasa_test_semanal_provincial.csv': [],
	'producto68/tasa_test_semanal_regional.csv': [],
	'producto69/carga.nacional.ajustada.csv': [],
	'producto69/carga.provincial.ajustada.csv': [],
	'producto69/carga.regional.ajustada.csv': [],
	'producto69/carga.ss.ajustada.csv': [],
	'producto70/total72.nacional.csv': [],
	'producto70/total72.provincial.csv': [],
	'producto70/total72.regional.csv': [],
	'producto71/not48.nacional.csv': [],
	'producto71/not48.provincial.csv': [],
	'producto71/not48.regional.csv': [],
	'producto72/lab24.nacional.csv': [],
	'producto72/lab24.provincial.csv': [],
	'producto72/lab24.regional.csv': [],
	'producto73/incidencia_edad_nacional.csv': [],
	'producto73/incidencia_edad_regionales.csv': [],
	'producto74/paso_a_paso.csv': ['ISO'],
	'producto74/paso_a_paso_std.csv': [],
	'producto74/paso_a_paso_T.csv': [],
	'producto75/MediaMovil_casos_activos.csv': ['ISO'],
	'producto75/MediaMovil_casos_activos_std.csv': [],
	'producto75/MediaMovil_casos_activos_T.csv': [],
	'producto75/MediaMovil_casos_nuevos.csv': ['ISO'],
	'producto75/MediaMovil_casos_nuevos_std.csv': [],
	'producto75/MediaMovil_casos_nuevos_T.csv': [],
	'producto76/vacunacion.csv': ['ISO'],
	'producto76/vacunacion_t.csv': [],
	'producto76/vacunacion_std.csv': [],
	'producto76/fabricante.csv': [],
	'producto76/fabricante_t.csv': [],
	'producto76/fabricante_std.csv': [],
	'producto76/grupo.csv': [],
	'producto76/grupo_t.csv': [],
	'producto76/grupo_std.csv': [],
	'producto76/rango_etario.csv': [],
	'producto76/rango_etario_t.csv': [],
	'producto76/rango_etario_std.csv': [],
	'producto77/total_vacunados_region_edad_std.csv': [],
	'producto77/total_vacunados_region_edad_t.csv': [],
	'producto77/total_vacunados_region_edad.csv': [],
	'producto78/total_vacunados_sexo_edad_std.csv': [],
	'producto78/total_vacunados_sexo_edad_t.csv': [],
	'producto78/total_vacunados_sexo_edad.csv': [],
	'producto78/total_vacunados_sexo_edad.json': [],
	'producto78/vacunados_edad_fecha_1eraDosis_std.csv': [],
	'producto78/vacunados_edad_fecha_1eraDosis_T.csv': [],
	'producto78/vacunados_edad_fecha_1eraDosis.csv': ['ISO'],
	'producto78/vacunados_edad_fecha_2daDosis_std.csv': [],
	'producto78/vacunados_edad_fecha_2daDosis_T.csv': [],
	'producto78/vacunados_edad_fecha_2daDosis.csv': ['ISO'],
	'producto78/vacunados_edad_fecha_total_std.csv': [],
	'producto78/vacunados_edad_fecha_total_T.csv': [],
	'producto78/vacunados_edad_fecha_total.csv': ['ISO'],
	'producto78/vacunados_edad_fecha_UnicaDosis_std.csv': [],
	'producto78/vacunados_edad_fecha_UnicaDosis_T.csv': [],
	'producto78/vacunados_edad_fecha_UnicaDosis.csv': ['ISO'],
	'producto79/total_vacunados_prioridad_std.csv': [],
	'producto79/total_vacunados_prioridad_t.csv': [],
	'producto79/total_vacunados_prioridad.csv': [],
	'producto80/vacunacion_comuna_1eraDosis_std.csv': [],
	'producto80/vacunacion_comuna_1eraDosis_T.csv': [],
	'producto80/vacunacion_comuna_1eraDosis.csv': ['ISO'],
	'producto80/vacunacion_comuna_2daDosis_std.csv': [],
	'producto80/vacunacion_comuna_2daDosis_T.csv': [],
	'producto80/vacunacion_comuna_2daDosis.csv': ['ISO'],
	'producto80/vacunacion_comuna_UnicaDosis_std.csv': [],
	'producto80/vacunacion_comuna_UnicaDosis_T.csv': [],
	'producto80/vacunacion_comuna_UnicaDosis.csv': ['ISO'],
	'producto81/poblacion_comuna_edad_std.csv': [],
	'producto81/poblacion_comuna_edad_T.csv': [],
	'producto81/poblacion_comuna_edad.csv': [],
	'producto81/vacunacion_comuna_edad_1eraDosis_std.csv': [],
	'producto81/vacunacion_comuna_edad_1eraDosis_T.csv': [],
	'producto81/vacunacion_comuna_edad_1eraDosis.csv': [],
	'producto81/vacunacion_comuna_edad_2daDosis_std.csv': [],
	'producto81/vacunacion_comuna_edad_2daDosis_T.csv': [],
	'producto81/vacunacion_comuna_edad_2daDosis.csv': [],
	'producto81/vacunacion_comuna_edad_UnicaDosis_std.csv': [],
	'producto81/vacunacion_comuna_edad_UnicaDosis_T.csv': [],
	'producto81/vacunacion_comuna_edad_UnicaDosis.csv': [],
	'producto82/ISCI_weekends.csv': [],
	'producto82/ISCI_weeks.csv': [],
	'producto83/vacunacion_establecimiento_std.csv': [],
	'producto83/vacunacion_establecimiento_t.csv': [],
	'producto83/vacunacion_establecimiento.csv': [],
	'producto83/vacunacion_fabricantes_1eraDosis_std.csv': [],
	'producto83/vacunacion_fabricantes_1eraDosis_T.csv': [],
	'producto83/vacunacion_fabricantes_1eraDosis.csv': ['ISO'],
	'producto83/vacunacion_fabricantes_2daDosis_std.csv': [],
	'producto83/vacunacion_fabricantes_2daDosis_T.csv': [],
	'producto83/vacunacion_fabricantes_2daDosis.csv': ['ISO'],
	'producto83/vacunacion_fabricantes_UnicaDosis_std.csv': [],
	'producto83/vacunacion_fabricantes_UnicaDosis_T.csv': [],
	'producto83/vacunacion_fabricantes_UnicaDosis.csv': ['ISO'],
	'producto84/fallecidos_comuna_edad_confirmadas_std.csv': [],
	'producto84/fallecidos_comuna_edad_confirmadas_T.csv': [],
	'producto84/fallecidos_comuna_edad_confirmadas.csv': ['ISO'],
	'producto84/fallecidos_comuna_edad_sospechosas_std.csv': [],
	'producto84/fallecidos_comuna_edad_sospechosas_T.csv': [],
	'producto84/fallecidos_comuna_edad_sospechosas.csv': ['ISO'],
	'producto84/fallecidos_comuna_edad_totales_std.csv': [],
	'producto84/fallecidos_comuna_edad_totales_T.csv': [],
	'producto84/fallecidos_comuna_edad_totales.csv': ['ISO'],
	'producto85/Public_Table_FuncionariosMINSAL.csv': [],
	'producto86/semaforo_por_zona.csv': [],
	'producto87/Ag_std.csv': [],
	'producto87/Ag_T.csv': [],
	'producto87/Ag.csv': ['ISO'],
	'producto88/vacunacion_fabricantes_edad_1eraDosis_std.csv': [],
	'producto88/vacunacion_fabricantes_edad_1eraDosis_T.csv': [],
	'producto88/vacunacion_fabricantes_edad_1eraDosis.csv': [],
	'producto88/vacunacion_fabricantes_edad_2daDosis_std.csv': [],
	'producto88/vacunacion_fabricantes_edad_2daDosis_T.csv': [],
	'producto88/vacunacion_fabricantes_edad_2daDosis.csv': [],
	'producto88/vacunacion_fabricantes_edad_UnicaDosis_std.csv': [],
	'producto88/vacunacion_fabricantes_edad_UnicaDosis_T.csv': [],
	'producto88/vacunacion_fabricantes_edad_UnicaDosis.csv': []
};

export default FILES;
