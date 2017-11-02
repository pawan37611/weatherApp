import axios from 'axios';
const APIkey='2c6d3375bbf34c6fddb414f8cf92f806';
export const Fetch_Weather='Fetch_Weather';
export const Root_Url=`http://api.openweathermap.org/data/2.5/forecast?appid=${APIkey}`;

export function fetchWeather(city)
{
const url=`${Root_Url}&q=${city},us`
const request=axios.get(url);

    return (
        {
            type:Fetch_Weather,
            payload:request
            
        }
    )
}