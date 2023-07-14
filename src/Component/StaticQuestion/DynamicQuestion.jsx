import React, { createContext, useState } from 'react'
import Input from '../input/Input'
import Questions from '../Question/Questions'
import Label from '../Label/Label'
import Dropdown from '../../Dropdown/Dropdown'

const DynamicQuestion = () => {
    //generate the Dynamic questions
    const [numOfQuestions, setnumOfQuestions] = useState(0)
    //totoal question in Dynamic Questions

    //dynamic created in Select box
    //generate the mcqQuestions in Dynamic
    const [mcqQestions, setmcqQestions] = useState([])
    const [selectedTech, setSelectedTech] = useState([])
    //graterThan the equtions in 
    let options = ["React", "MongoDB", "Express", "Node", "Java"]
    const [render, setrender] = useState(false)
    const [selectedValue, setSelectedValue] = useState([[...options]])
    // console.log(selectedValue)
    //selective question
    // let selectQuestion = ["Choose Mode", "MCQ", "Programming", "Descriptive"]
    // let totalquestionsSum=store.discreptive+store.mcq+store.programing;
    const [store, setStore] = useState({
        total: 0,
        mcq: 0,
        programing: 0,
        discreptive: 0
    })

    const Addquestion = () => {
        let mcqQestionsBaseStructure = {
            questions: '',
            options: [],
            answer: ''
        }
        setmcqQestions([...mcqQestions, mcqQestionsBaseStructure])
        if ([...mcqQestions, mcqQestionsBaseStructure].length > numOfQuestions - 1)
            setrender(true)
    }
    const handleChange = (e) => {
        setSelectedTech([...selectedTech, e.target.value]);
    }
    //all select mode
    const handleData = (e) => {
        if(e.target.name=='mcq')
            setnumOfQuestions(e.target.value)
        setStore((prev) => {
            return { ...prev, [e.target.name]: parseInt(e.target.value) }

        })
    }
    const addTechnology = () => {
        setSelectedValue([...selectedValue, options.filter(item => !selectedTech.includes(item))]);
    }
    
    const handleMcqData=()=>{
        
      }
        return (
            <>
                <>
                  {/* <ContextAPI.Provider value={{store,handleData,addTechnology}}> */}
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div>
                                    <Label htmlData="NumberOfQuestions" labelData="Number of Questions :" />
                                    <Input
                                        inputType="text"
                                        inputPlaceholder="Enter the No of Question"
                                        inputValue={numOfQuestions}
                                        fieldChange={handleData}
                                        pattern="^[0-9]\d*$"
                                        name="total"
                                        fieldErrorMessage="Please Enter the Positive number of zero"
                                    />
                                </div>
                                {    
                                    selectedValue.map(element => (
                                        <Dropdown options={element} handleChange={handleChange} addTechnology={addTechnology} store={store} setnumOfQuestions={setnumOfQuestions} handleData={handleData} selectedValue={selectedValue} />
                                    ))
                                }
                            </div>
                            <div className='col-sm-6'>
                                {
                                    render || numOfQuestions.length > 0 && <button className='btn btn-success mt-3' onClick={Addquestion}>Add questions</button>
                                }
                                {
                                    mcqQestions.map((ele) => {
                                        return <Questions />
                                    })
                                }

                                {!render || numOfQuestions!=0  &&<button className='btn btn-success'  onClick={handleMcqData}>Submit</button>}
                            </div>
                        </div>
                    </div>
                    {/* </ContextAPI.Provider> */}
                </>
            </>
        )
    }
export default DynamicQuestion;