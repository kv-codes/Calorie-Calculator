import React, { Component } from 'react'
import Result from './Result';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            gender: "",
            activity: "",
            weight: 0,
            height: 0,
            age: 0,
            bmi: 0,
            bmr:0,
            calDaily: 0,
            calLoss: 0
        }
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleActivityChange = this.handleActivityChange.bind(this);
        this.getBMI = this.getBMI.bind(this);
        this.getBMR = this.getBMR.bind(this);
        this.getCALDAILY = this.getCALDAILY.bind(this);
        this.getCALLOSS = this.getCALLOSS.bind(this);
    }

    handleWeightChange(event){
        this.setState({weight: event.target.value})
    }

    handleHeightChange(event){
        this.setState({height: event.target.value})
    }

    handleAgeChange(event){
        this.setState({age: event.target.value})
        console.log(event.target.value)

    }

    handleGenderChange(event){
        this.setState({gender: event.target.value})
        console.log(event.target.value)
    }
    
    handleActivityChange(event){
        this.setState({activity: event.target.value})
    }

    getBMI(){
        var squaredHeight = this.state.height * this.state.height;
        this.setState({bmi: (this.state.weight / squaredHeight)*(703)});

    }

    getBMR(){
        let age = this.state.age;
        let gender = this.state.gender;
        let height = this.state.height;
        let weight = this.state.weight;

        // if (
        //     age === 0 ||
        //     gender === "" ||
        //     height === 0 ||
        //     weight === 0 
        // ) {
        //     this.setState({error: "All Fields are Required"});
        //     return;
        // }

        let bmrCalc=0;
        console.log(gender)
        if (gender === "1") {
            bmrCalc = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
            console.log(`Gender is male ${bmrCalc}`)
        } else {
            bmrCalc = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
            console.log(`Gender is female ${bmrCalc}`)
        }
        this.setState({bmr: bmrCalc});
        console.log(bmrCalc);
    }

    getCALDAILY() {
        let activity = this.state.activity;
        let bmrCalc = this.state.bmr;
        let calCalc = "";
        if (activity === "Sendentary(Little or no exercise)") {
            calCalc = bmrCalc * 1.2;
        }
        else if (activity === "Lightly active (light exercise/sports 1-3 days/week)") {
            calCalc = bmrCalc * 1.375;
        }
        else if (activity === "Moderately active (moderate exercise/sports 3-5 days/week)") {
            calCalc = bmrCalc * 1.55;
        }
        else if (activity === "Very active (hard exercise/sports 6-7 days a week)") {
            calCalc = bmrCalc * 1.725;
        }
        
        this.setState({calDaily: calCalc});       
    }

    getCALLOSS() {
        let calCalc = this.state.calDaily;
        let calcLoss;
        // if (calCalc===this.state.calDaily) {
            calcLoss = calCalc - 500;
        // }
        this.setState({calLoss:calcLoss })
    }


    render() {
        return (
            <div>
                <hr/>
                <h1>Welcome to the health calculator! </h1>
                <h2>Here we provide you the daily caloric information you'll need to either healthily lose weight or maintain your current weight</h2>

                <p><b>1) Calculate BMI. Please enter your height and weight:</b></p>
              
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label text-right">Weight(lb's)</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="weight" name="weight" onChange={this.handleWeightChange} placeholder="Enter Your Weight"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label text-right">Height(inches)</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="height" name="height" onChange={this.handleHeightChange} placeholder="Enter Your Height "/>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-sm" onClick={this.getBMI} style={{float: 'left', marginLeft: '93px'}}>Get BMI</button>
                            <div className="col-lg-6">
                             {this.state.bmi !== 0 ? (<Result result={this.state.bmi} bmi={this.state.bmi} label="BMI"/>) : null}
                            </div>

                            <p><b>2) Calculate your BMR. Please enter your age, gender and active level:</b></p>


                            <div className="form-group row">
                                <label classname="col-sm-2 col-form-label text-right">Age</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="age" name="age"
                                    onChange={this.handleAgeChange} placeholder="Enter your Age" />
                                </div>
                            </div>
                            <br></br>
                            <br></br>

                            
                            <div className="inputwrap">
                                <label className="label">Gender</label>
                                <label>
                                    <input
                                    type="radio"
                                    checked={this.state.gender === "1"}
                                    onChange={this.handleGenderChange}
                                    className="genderM"
                                    name= "gender"
                                    value="1"
                                    />
                                    Male
                                </label>
                                <label>
                                    <input
                                    type="radio"
                                    checked={this.state.gender === "2"}
                                    onChange={this.handleGenderChange}
                                    className="genderF"
                                    name= "gender"
                                    value="2"
                                    />
                                    Female
                                </label>
                                
                            </div>
                            <br></br>
                            <br></br>
                            <div className="inputwrap">
                                <label className="label">Active Level:</label>
                                <br></br>
                                <label>
                                    <input
                                    type="radio"
                                    checked={this.state.activity === "Sendentary(Little or no exercise)"}
                                    onChange={this.handleActivityChange}
                                    className="Sendentary"
                                    name="activity"
                                    value="Sendentary(Little or no exercise)"
                                    />
                                    Sendentary(Little or no exercise)
                                </label>
                                <br></br>
                                <label>
                                    <input
                                    type="radio"
                                    checked={this.state.activity === "Lightly active (light exercise/sports 1-3 days/week)"}
                                    onChange={this.handleActivityChange}
                                    className="Light"
                                    name="activity"
                                    value="Lightly active (light exercise/sports 1-3 days/week)"
                                    />
                                    Lightly active (light exercise/sports 1-3 days/week)
                                </label>
                                <br></br>
                                <label>
                                    <input
                                    type="radio"
                                    checked={this.state.activity === "Moderately active (moderate exercise/sports 3-5 days/week)"}
                                    onChange={this.handleActivityChange}
                                    className="Moderate"
                                    name="activity"
                                    value="Moderately active (moderate exercise/sports 3-5 days/week)"
                                    />
                                    Moderately active (moderate exercise/sports 3-5 days/week)
                                </label>
                                <br></br>
                                <label>
                                    <input
                                    type="radio"
                                    checked={this.state.activity === "Very active (hard exercise/sports 6-7 days a week)"}
                                    onChange={this.handleActivityChange}
                                    className="Very"
                                    name="activity"
                                    value="Very active (hard exercise/sports 6-7 days a week)"
                                    />
                                    Very active (hard exercise/sports 6-7 days a week)
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm" onClick={this.getBMR} style={{float: 'left', marginLeft: '93px'}}>Get BMR</button>
                            <div className="col-lg-6">
                             {this.state.bmr !== 0 ? (<Result result={this.state.bmr} bmr={this.state.bmr} label="BMR"/>) : null}
                            </div>
                            <br></br>
                            <br></br>
                            <p><b>3) Calories to maintain weight:</b></p>
 
                            <button type="submit" className="btn btn-primary btn-sm" onClick={this.getCALDAILY} style={{float: 'left', marginLeft: '93px'}}>Get Daily Calories Recommended</button>
                            <div className="col-lg-6">
                             {this.state.calDaily !== 0 ? (<Result result={this.state.calDaily} calDaily={this.state.calDaily} label="Recommended daily caloric intake"/>) : null}
                            </div>
                            <br></br>
                            <br></br>

                            <p><b>Calories for weight loss:</b></p>

                            <button type="submit" className="btn btn-primary btn-sm" onClick={this.getCALLOSS} style={{float: 'left', marginLeft: '93px'}}>Get Calories for healthy weight loss</button>

                            <div className="col-lg-6">
                             {this.state.calLoss !== 0 ? (<Result result={this.state.calLoss} calLoss={this.state.calLoss} label="Recommended daily caloric intake for healthy weight loss"/>) : null}
                            </div>                            

                        </div>
                        <br/><br/>                      
                        <div className="col-lg-3"></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Form;