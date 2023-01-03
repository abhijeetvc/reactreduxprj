import React from "react"
import { connect } from "react-redux"

function Counter(props){

    return(
        <div>
            <h1>Counter</h1>
            <p>Count : {props.count}</p>
        </div>
    )
}

function mapStateToProps(state){
    return{
        count:state.counterReducer
    }
}

export default connect(mapStateToProps)(Counter) 