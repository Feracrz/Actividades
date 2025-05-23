import React , { Component } from 'react'
import './estadisticas.css'
import firebase from  '../../Firebase'
import MaterialTable from 'material-table';


export  default class  Estadistica extends Component {
  constructor (props) {
    super(props)
    this.ref = firebase.firestore().collection('actividades')
    this.unsubscribe = null
    this.state = {
      actividades: []
    }

  }
  onCollectionUpdate = (querySnapshot) => {
    const actividades = []
    querySnapshot.forEach((doc) => {
      const { actividad, convoca, lugar, fechai, horai, estados, estatus, responsable, fecha, virpre, dependencia, direccion, tipoActividad, municipios, organismoi, plibro, capacitacion, dInvitada} = doc.data()
      actividades.push({
        key: doc.id,
        doc,
        actividad,
        convoca,
        lugar,
        fechai,
        horai,
        estados,
        estatus,
        responsable,
        fecha,
        virpre,
        dependencia,
        direccion,
        tipoActividad,
        municipios,
        lugar,
        organismoi,
        plibro,
        capacitacion,
        dInvitada

      })
    })
    this.setState({
      actividades
   })
   console.log(this.state.actividades)
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }


  render () {
    console.log(this.state.actividades.length)
    const columnas = [
          {
            title: 'ACTIVIDADES TOTALES',
            field: '1025'
          },
          {
            title: 'Realizadas Por PGJEH',
            field: 'fechai'
          },
          {
            title: 'OTRAS INSTITUCIONES',
            field: 'fechai',
          }
        ];

        const tabla = this.state.actividades.map(actividades => actividades)

        const sang = [
          {
            title: 'NOM ACTIVIDAD',
            field: 'actividad',
          },
              {
                title: 'VIRTUAL PRESENCIAL',
                field: 'virpre'
              },
              {
                title: 'DEPENDENCIA',
                field: 'dependencia'
              },

              {
                title: 'DIRECCION',
                field: 'convoca'
              },
              {
                title: 'T. ACTIVIDAD',
                field: 'tipoActividad',

              },
              {
                title: 'SUB. ACTIVIDAD',
                field: 'organismoi'

              },
              {
                title: 'EDO',
                field: 'estados',
              },
              {
                title: 'MUNICIPIO',
                field: 'municipios',
              },
              {
                title: 'LUGAR',
                field: 'lugar',
              },
              {
                title: 'FECHA',
                field: 'fechai',
              },
              {
                title: 'HORA',
                field: 'horai',
              }

            ];

            const sangs = [
              {
                title: 'NOMBRE DE LA ACTIVIDAD',
                field: 'actividad',
              },
                  {
                    title: 'VIRTUAL/PRESENCIAL',
                    field: 'actividad'
                  },
                  {
                    title: 'INSTITUCION FORANEA',
                    field: 'fechai'
                  },
                  {
                    title: 'T. ACTIVIDAD',
                    field: 'fechai',

                  },
                  {
                    title: 'EDO',
                    field: 'fechai',
                  },
                  {
                    title: 'MUNICIPIO',
                    field: 'fechai',
                  },
                  {
                    title: 'LUGAR',
                    field: 'fechai',
                  },
                  {
                    title: 'FECHA',
                    field: 'fechai',
                  },
                  {
                    title: 'HORA',
                    field: 'fechai',
                  }


                ];

                const sangso = [
                      {
                        title: 'NOMBRE DE LA ACTIVIDAD',
                        field: 'actividad',
                      },
                      {
                        title: 'VIRTUAL/PRESENCIAL',
                        field: 'actividad'
                      },
                      {
                        title: 'INSTITUCION FORANEA',
                        field: 'fechai'
                      },
                      {
                        title: 'DIRECCION INVITADA',
                        field: 'dInvitada'
                      },
                      {
                        title: 'T. ACTIVIDAD',
                        field: 'fechai',

                      },
                      {
                        title: 'EDO',
                        field: 'fechai',
                      },
                      {
                        title: 'MUNICIPIO',
                        field: 'fechai',
                      },
                      {
                        title: 'LUGAR',
                        field: 'fechai',
                      },
                      {
                        title: 'FECHA',
                        field: 'fechai',
                      },
                      {
                        title: 'HORA',
                        field: 'fechai',
                      }


                    ];


    return (
        <div className='fa-esta'>
          <div>
            <h1>Estadisticas </h1>
          </div>
          <div>
            <div>
              <h2>sirve para algo</h2>
            </div>
            <div className='est-totales'>
              <MaterialTable
              columns={columnas}
              data = {tabla}
              title = "Actividades Totales"



              options={{
                actionsColumnIndex: -1,
                exportButton: true,

              }}

              localization = {{
                header : {
                  actions : 'OPCIONES'
                }
              }}


              />
            </div>
            <div className='est-totales'>
            <MaterialTable
            columns={sang}
            data = {tabla}
            title = "Actividades PGJEH"



            options={{
              actionsColumnIndex: -1,
              exportButton: true,
              filtering: true
            }}


            />
            </div>

            <div className='est-totales'>
            <MaterialTable
            columns={sangs}
            data = {tabla}
            title = "Actividades FORANEAS"



            options={{
              actionsColumnIndex: -1,
              exportButton: true
            }}

            localization = {{
              header : {
                actions : 'OPCIONES'
              }
            }}


            />
            </div>

            <div className='est-totales'>
            <MaterialTable
            columns={sangso}
            data = {tabla}
            title = "Actividades FORANEAS"



            options={{
              actionsColumnIndex: -1,
              exportButton: true
            }}

            localization = {{
              header : {
                actions : 'OPCIONES'
              }
            }}


            />
            </div>
          </div>


        </div>

    )
  }
}
