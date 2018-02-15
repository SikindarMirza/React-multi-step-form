import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAppLevelStateForC} from '../actions/index';
import App from './app';

export  class StepC extends Component{
    render(){
        return(
          <div className="form">
            <App placeholders={[{index:0,key:"details"},{key:"details",index:1},{key:"details",index:2}]}
                 values={this.props.stepCData}
                 setStateForThisComp={this.props.setAppLevelStateForC}
                 shouldUsePassword={false}
                 />
            <Link to="/stepb">
              <button className="button">Previous</button>
            </Link>
            <button className="button">Submit</button>    
          </div>
        ) 

    }
}
function mapStateToProps(state){
  return {
       stepCData:state.stepCData
  }
}
export default connect(mapStateToProps,{setAppLevelStateForC})(StepC);