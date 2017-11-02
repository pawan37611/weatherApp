import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';



 class SearchBar extends Component
{

    constructor(props)
    {
        super(props);
        this.state={term:''};
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }

    onInputChange(event)
    {
      
        this.setState({term: event.target.value});
    }

onFormSubmit(event)
{
event.preventDefault();
this.props.fetchWeather(this.state.term)

}
    
    render()
    {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <input value={this.state.term} onChange={this.onInputChange}/>
                <button type="submit">submit</button>
                </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect (null,mapDispatchToProps)(SearchBar);