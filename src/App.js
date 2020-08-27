import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import Login from './components/common/login/Login'
import Generacionm from './components/generaciondem/Generacionm'
import Mgenerales from './components/mgenerales/Mgenerales'
import Editarm from './components/editarm/Editarm'
import Showm from './components/editarm/Showm'
import Aregistradas from './components/aregistradas/Aregistradas'
import Eactividad from './components/aregistradas/Eactividad'
import Aactividad from './components/aactividad/Aactividad'
import Sactividad from './components/sactividad/Sactividad'
import Reportes from './components/reportes/Reportes'

function App (props) {
  const { isAuthenticated, isVerifying } = props
  return (
    <Switch>
      <Route path='/Login' component={Login} />
      <ProtectedRoute
        exact
        path='/'
        component={Mgenerales}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Generaciondemensajes'
        component={Generacionm}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Listademensajes'
        component={Showm}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Editarmensaje/:id'
        component={Editarm}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/ActividadesRegistradas'
        component={Aregistradas}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/AgregarActividad'
        component={Aactividad}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/EditarActividad/:id'
        component={Eactividad}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Actividades'
        component={Aactividad}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Sactividad'
        component={Sactividad}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path='/Reportes'
        component={Reportes}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
    </Switch>
  )
}
function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  }
}

export default connect(mapStateToProps, {})(App)
