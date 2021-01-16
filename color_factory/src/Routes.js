import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FilteredColor from './FilteredColor';
import ColorList from './ColorList';

function Routes({rgb}) {
    return (
        <Switch>
            <Route exact path='/colors'>
                <ColorList rgb={rgb} />
            </Route>
            <Route path='/colors/:color'>
                <FilteredColor rgb={rgb} />
            </Route>
            <Redirect to='/colors' />
        </Switch>
    )
}

export default Routes;