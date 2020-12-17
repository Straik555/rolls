import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './index.scss';
import {routes} from './routes';
import OrderHistory from "./OrderHistory";
import OrderBonus from "./OrderBonus";
import OrderPersonal from "./OrderPersonal";
import ChangePassword from "./ChangePassword";

const Order = (props) => {
    return (
       <Switch>
           <Route exact path="/order" render={() => (<Redirect to={routes.personal} />)} />
           <Route exact path={routes.bonus} render={(props) => <OrderBonus {...props} />} />
           <Route exact path={routes.history} render={(props) => <OrderHistory {...props} />} />
           <Route path={routes.personal} render={(props) => <OrderPersonal {...props} />} />
           <Route path={routes.changePassword} render={(props) => <ChangePassword {...props} />} />
           <Route path={routes.logout} />
       </Switch>
    )
}

export default Order;