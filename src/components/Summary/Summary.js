import React from 'react'

class Summary extends React.Component {
    componentDidMount(){
        this.props.history.push("/summary-order");
    }

    render(){
        return(
            <h1>Summary</h1>
        )
    }
}

export default Summary