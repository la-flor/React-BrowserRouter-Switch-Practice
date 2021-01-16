import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FilteredColor from './FilteredColor';
import NewColorForm from './NewColorForm';
import ColorList from './ColorList';

function Routes() {
    const [rgb, setRGB] = useState(['red','green','blue']);

    function addColor(color) {
      setRGB([...rgb, color])
    }

    return (
        <Switch>
            <Route exact path='/colors'>
                <ColorList rgb={rgb} />
            </Route>
            <Route exact path='/colors/new' >
                <NewColorForm addColor={addColor} />
            </Route>
            <Route path='/colors/:color'>
                <FilteredColor rgb={rgb} />
            </Route>
            <Redirect to='/colors' />
        </Switch>
    )
}

export default Routes;