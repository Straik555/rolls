import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import store from 'store';

import ScrollToTop from './tools/ScrollToTop';

//pages
import MobileMenu from './page/MobileMenu/MobileMenu';
import MobileOrder from './page/MobileOrder/MobileOrder';

import Main from './page/Main'
import Delivery from './page/Delivery/index';
import Sets from './page/Sets/index';
import PageWrapper from './page/PageWrapper';
import AboutUs from './page/AboutUs/index';
import Shares from './page/Shares/index';
import Order from './page/Order/index';
import ErrorBoundary from "./components/ErrorBoundary";

import {UsePositionDemo} from "./components/Navigator/UsePositionDemo";
import BlogAll from './page/BlogAll/index';
import BlogArticle from './page/BlogArticle/index';

//auth
import Auth from './page/Auth/Auth';
import LogOut from './components/Auth/LogOut/LogOut';
import ConfirmAccount from './components/Auth/ConfirmAccount/ConfirmAccount';
import RecoverPassword from './components/Auth/RecoverPassword/RecoverPassword';

//wrapper
import Wrapper from './components/Wrapper/Wrapper';
//wrapper for mobile menu
import WrapperForMobile from './components/Wrapper/WrapperForMobile/WrapperForMobile';
import CardProduct from "./page/CardProduct";

function App(props) {

    const [ isAuthorized, setAuthorized ] = useState(false);
    const [ city, setCity ] = useState(1);

    const data = store.get('24rolls');
    if ( data ) {
        if ( data.user && isAuthorized === false ) {
            setAuthorized(true);
        }
        if ( data.customOptions ) {
            switch ( data.customOptions.city ) 
            {
                case 'Dnipro': {
                    if ( city !== 1 ) {
                        setCity(1);
                    }
                    break;
                }
                case 'Zaporijja': {
                    if ( city !== 2 ) {
                        setCity(2);
                    }
                    break;
                }
                default: break;
            }
        }
    }

    useEffect(() => {
        const data = store.get('24rolls');
        if (!data) {
            store.set('24rolls', {
                customOptions : {
                    city: 'Dnipro'
                } 
            });
        }

        if (props.location.search === '?redirectpersonal=true') {
            props.history.push('/order/personal');
        } else if ( props.location.search === '?log-up-success=true' ) {
            props.history.push('/order/personal?signup=true');
        } else if ( props.location.search === '?logout' ) {
            setAuthorized(false);
            props.history.push('/24ROLLS');
        }

    }, [props]);

    //routes for big screens
    const routesBig = (
        <ErrorBoundary>
        <ScrollToTop />
        <Switch>
            <Route path="/24ROLLS" component={Main} />
            <Route path="/blog/:id" component={BlogArticle} />
            <Route path="/blog" component={BlogAll} />
            <Route path="/cart/:id" component={CardProduct} />
            <Route path="/shares" component={Shares} />
            <Route path="/sets" component={Sets} />
            <Route path="/rolls" component={() => <PageWrapper title={'title.rolls'} url={'rolls'} />} />
            <Route path="/drinks" component={() =><PageWrapper title={'title.beverages'} url={'drinks'} /> } />
            <Route path="/sushi" component={() =><PageWrapper title={'title.sushi'} url={'sushi'} /> } />
            <Route path="/wok" component={() =><PageWrapper title={'title.wok'} url={'wokAndPasta'} /> } />
            <Route path="/soups" component={() =><PageWrapper title={'title.soups'} url={'soups'} /> } />
            <Route path="/hot" component={() =><PageWrapper title={'title.hotDishes'} url={'hot'} /> } />
            <Route path="/salads" component={() =><PageWrapper title={'title.salads'} url={'salads'} /> } />
            <Route path="/sashimi" component={() =><PageWrapper title={'title.sashimi'} url={'sashimi'} /> } />
            <Route path="/sauces" component={() =><PageWrapper title={'title.sauces'} url={'sauces'} /> } />
            <Route path="/pizza" component={() =><PageWrapper title={'title.pizza'} url={'pizza'} /> } />
            <Route path="/snacks" component={() =><PageWrapper title={'title.snacks'} url={'snacks'} /> } />
            <Route path="/dessert" component={() =><PageWrapper title={'title.dessert'} url={'dessert'} /> } />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/delivery" component={Delivery} />
            { isAuthorized ? 
            ([
                <Route 
                key='3-route'
                path="/order" 
                component={Order} />,
                <Route
                key='4-route'
                path='/logout'
                component={LogOut} 
                />
            ])   
            :
            (
                <Route 
                key='1-route'
                path="/log-in"
                exact 
                render={(props) => <Auth {...props}/>} 
                />
            )}
            <Redirect to="/24ROLLS" />
        </Switch>
        </ErrorBoundary>
    );
    
    //routes for small screens
    const routesSmall = (
        <Switch>
            <Route path="/main-mobile/menu" exact component={MobileMenu} />
            <Route path="/main-mobile/order" exact component={MobileOrder} />
            <Route 
            path="/main-mobile/log-in" 
            render={(props) => <Auth {...props}/>} 
            />
            <Redirect to="/main-mobile/menu" />
        </Switch>
    );
    
    //global routes
    const routes = (
        <Switch>
            <Route path="/main-mobile" render={() => {
                return (
                    <WrapperForMobile>
                        {routesSmall}
                    </WrapperForMobile>
                );
            }} />
            <Route exact path="/signup/confirm/:token" component={ConfirmAccount} />
            <Route exact path="/reset/toUser/:token" component={RecoverPassword} />
            <Route render={() => {
                return (
                    <Wrapper
                    isAuthorized={isAuthorized}
                    city={city}
                    setCity={setCity}>
                        {routesBig}
                    </Wrapper>
                );
            }}/>
        </Switch>
    );

    return (
        <>
            <UsePositionDemo />
            {routes}
        </>
    )
}

export default withRouter(App);