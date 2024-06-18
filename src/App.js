import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './modules/common/utils/PrivateRoute'
import { AuthProvider } from './modules/auth/context/AuthContext'
import HomePage from './modules/common/pages/HomePage'
import SemanticRouter from './modules/semantic/router/SemanticRouter'
import SchoolRouter from './modules/schools/router/SchoolRouter'
import LoginPage from '../src/modules/auth/pages/LoginPage'
import Header from './modules/common/components/Header'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Grid>
            <GridRow>
              <GridColumn>
                <Header />
              </GridColumn>
            </GridRow>
            <GridRow columns={2} centered>
              <GridColumn mobile={16} tablet={14} computer={10}>
                <PrivateRoute exact component={HomePage} path='/' />
                <PrivateRoute component={SchoolRouter} path='/schools' />
                <PrivateRoute component={SemanticRouter} path='/semantic' />
                <Route component={LoginPage} path='/login' />
              </GridColumn>
            </GridRow>
          </Grid>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
