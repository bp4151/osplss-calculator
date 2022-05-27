import React from 'react';

class Calculator extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            'downloads':0,
            'release':0,
            'pull_request':0,
            'sca':0,
            'sast':0,
            'vulns':0,
            'risk':'unknown'
        }
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(e) {
        const { target: { name, value} } = e
        this.setState({[name]: value})
    }

    handleSubmit(e) {
        const results = this.state
        var sum = 0
        for(var result in results){
            if (results.hasOwnProperty(result) && result !== 'risk'){
                sum += parseFloat(results[result])
            }
        }
        console.log(sum)

        var risk = 'unknown'
        switch (true) {
            case (sum <= 9):
                risk = 'low'
                break
            case (sum <= 19):
                risk = 'medium'
                break
            case (sum <= 24):
                risk = 'high'
                break        
            case (sum >= 25):
                risk = 'critical'
                break
            default:
                risk = 'unknown'
                break
        }
        this.setState({'risk': risk})
    }

    handleReset() {
        this.setState({'downloads': 0})
        this.setState({'release': 0})
        this.setState({'pull_request': 0})
        this.setState({'sca': 0})
        this.setState({'sast': 0})
        this.setState({'vulns': 0})
        this.setState({'risk': 'unknown'})

    }

    render() {
    
        return (
            <div>
                <h1>Open Source Package/Library Security Score Calculator</h1>
                <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col col-xs-6'>
                                <label>How many downloads does this library have?</label>    
                            </div>
                            <div className='col col-xs-6'>
                            <select className='form-select' name='downloads' onChange={this.handleChange} value={this.state['downloads']}>
                                <option value={0}>[SELECT]</option>
                                <option value={5}>1-1000</option>
                                <option value={3}>1001-100000</option>
                                <option value={1}>100001+</option>

                            </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-xs-6'>
                                <label>How recent is the last release?</label>    
                            </div>
                            <div className='col col-xs-6'>
                            <select className='form-select' name='release' onChange={this.handleChange} value={this.state['release']}>
                                <option value={0}>[SELECT]</option>
                                <option value={5}>more than 12 months ago</option>
                                <option value={3}>within the last 6-12 months</option>
                                <option value={1}>less than 6 months ago</option>

                            </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-xs-6'>
                                <label>How recent is the last pull request merge?</label>    
                            </div>
                            <div className='col col-xs-6'>
                            <select className='form-select' name='pull_request' onChange={this.handleChange} value={this.state['pull_request']}>
                                <option value={0}>[SELECT]</option>
                                <option value={5}>more than 12 months ago</option>
                                <option value={3}>within the last 6-12 months</option>
                                <option value={1}>less than 6 months ago</option>

                            </select>
                            </div>
                        </div>       
                        <div className='row'>
                            <div className='col col-xs-6'>
                                <label>Does the repository use any SCA scanning action?</label>    
                            </div>
                            <div className='col col-xs-6'>
                            <select className='form-select' name='sca' onChange={this.handleChange} value={this.state['sca']}>
                                <option value={0}>[SELECT]</option>
                                <option value={5}>No/Unknown</option>
                                <option value={1}>Yes</option>
                            </select>
                            </div>
                        </div>      
                        <div className='row'>
                            <div className='col col-xs-6'>
                                <label>Does the repository use any static scanning action?</label>    
                            </div>
                            <div className='col col-xs-6'>
                            <select className='form-select' name='sast' onChange={this.handleChange} value={this.state['sast']}>
                                <option value={0}>[SELECT]</option>
                                <option value={5}>No/Unknown</option>
                                <option value={1}>Yes</option>
                            </select>
                            </div>
                        </div>      
                        <div className='row'>
                            <div className='col col-xs-6'>
                                <label>Does the current release contain any known vulnerabilities?</label>    
                            </div>
                            <div className='col col-xs-6'>
                            <select className='form-select' name='vulns' onChange={this.handleChange} value={this.state['vulns']}>
                                <option value={0}>[SELECT]</option>
                                <option value={5}>Yes</option>
                                <option value={1}>No</option>
                            </select>
                            </div>
                        </div>                                                                                                                 
                        <div className='row'>
                            <div className='col col-xs-12 col-buttons'>
                                <button className='btn btn-primary' type='submit' onClick={this.handleSubmit}>Calculate</button>&nbsp;
                                <button className='btn btn-outline-danger' type='reset' onClick={this.handleReset}>Clear</button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-xs-6'>
                                Result:
                            </div>
                            <div className='col col-xs-6'>
                                The calculation returned a risk severity of {this.state.risk} for the evaluated package or library
                            </div>
                        </div>                            
                        
                    </div>
                    

                </div>
            </div>
            
        )
    }
}

export default Calculator