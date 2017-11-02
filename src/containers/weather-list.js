import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-maps';

class WeatherList extends Component
{
    rendercity(citydata)
    {

        const name = citydata.city.name;
        const temps = citydata
            .list
            .map(weather => weather.main.temp);
        const press = citydata
            .list
            .map(weather => weather.main.pressure);
        const hum = citydata
            .list
            .map(weather => weather.main.humidity);

        const {lon, lat} = citydata.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                </td>

                <td>
                    <Chart data={temps} color="red"/>
                </td>
                <td>
                    <Chart data={press} color="red"/>
                </td>
                <td>
                    <Chart data={hum} color="red"/>
                </td>
            </tr>
        )
    }

    render()
    {

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>temp</th>
                        <th>pressure</th>
                        <th>humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this
                        .props
                        .weather
                        .map(this.rendercity)}
                </tbody>
            </table>

        );
    }

}

function mapStateToProps({weather}) {
    return {weather};

}

export default connect(mapStateToProps)(WeatherList);