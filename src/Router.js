import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import Manager from './components/Manager';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth" direction="leftToRight">
          <Scene key="login" component={LoginForm} title="Please Login" initial/>
        </Scene>
        <Scene key="main">
          <Scene
            leftTitle="Me"
            onLeft={()=> Actions.manager()}
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />

          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />

          <Scene
            key="manager"
            component={Manager}
            title="Me"
          />

          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

// <Scene key="employeeDetail" component={EmployeeDetail} title="Employee" />

export default RouterComponent;
