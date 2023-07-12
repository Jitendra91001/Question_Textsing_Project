import React, { useState } from 'react'
import Input from '../input/Input'
import Questions from '../Question/Questions'
import Label from '../Label/Label'
import Select from '../Select/Select'

const DynamicQuestion = () => {

    //generate the Dynamic questions
    const [numOfQuestions, setnumOfQuestions] = useState(0)

    //generate the mcqQuestions in Dynamic
    const [mcqQestions, setmcqQestions] = useState([])

    //graterThan the equtions in 

    const [render, setrender] = useState(false)
    const [selectedValue,setSelectedValue]=useState([])
    const [selectMCQ,setSelectMCQ]=useState([])
    //dynamic created in Select box
    let options = ["React", "MongoDB", "Express", "Node", "Java"]

    //selective question
    let selectQuestion = ["MCQ", "Programming", "Descriptive"]

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
        // setSelectedValue({...selectedValue,firstSelect:[...selectedValue.firstSelect,e.target.value]})
        setSelectedValue(e.target.value)
    }

    //select mcq questions

    const SelectMCQ = (e) => {
        let filteredData = selectQuestion.filter(item => item == e.target.value)
        // setSelectedValue({...selectedValue,secondSelect:[...selectedValue.secondSelect,e.target.value]})
        // console.log(selectedValue.secondSelect)
        setSelectMCQ(e.target.value)
        console.log(selectMCQ)
    }
    return (
        <>
            <>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div>
                                <Label htmlData="NumberOfQuestions" labelData="Number of Questions :" />

                                <Input
                                    inputType="text"
                                    inputPlaceholder="Enter the No of Question"
                                    inputValue={numOfQuestions}
                                    fieldChange={(e) => setnumOfQuestions(e.target.value)}
                                    pattern="^[0-9]\d*$"
                                    fieldErrorMessage="Please Enter the Positive number of zero"
                                />
                            </div>



                            <Label htmlData="Technology" labelData="Technology" />

                            <Select option={options} handleChange={handleChange} />

                            {
                                selectedValue.length != 0 &&
                                <div>
                                    <Label htmlData="Select Mode" labelData="SelectMode" />
                                    <Select option={selectQuestion} handleChange={SelectMCQ} />
                                </div>
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
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default DynamicQuestion