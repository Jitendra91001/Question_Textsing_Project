import React, { useState } from 'react'
import Input from '../input/Input'
import Questions from '../Question/Questions'
import Label from '../Label/Label'

const DynamicQuestion = () => {

    //generate the Dynamic questions
    const [numOfQuestions, setnumOfQuestions] = useState(0)

    //generate the mcqQuestions in Dynamic
    const [mcqQestions, setmcqQestions] = useState([])

    //graterThan the equtions in 

    const [isGraterthanStaticQuestions, setisGraterthanStaticQuestions] = useState(false)

    const Addquestion = () => {
        let mcqQestionsBaseStructure = {
            questions: '',
            options: [],
            answer: ''
        }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

        setmcqQestions([...mcqQestions, mcqQestionsBaseStructure])

        if ([...mcqQestions, mcqQestionsBaseStructure].length > numOfQuestions - 1)
            setisGraterthanStaticQuestions(true)
    }

    return (
        <>
            <>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <Label htmlData="NumOfQuestions" labelData="Static Questions" />
                            <Input
                                inputType="text"
                                inputPlaceholder="Enter the Stataic Questions"
                                inputValue={numOfQuestions}
                                fieldChange={(e) => setnumOfQuestions(e.target.value)}
                                pattern="^[0-9]\d*$"
                                fieldErrorMessage="Please Enter the Positive number of zero"
                            />

                            {
                                isGraterthanStaticQuestions || numOfQuestions.length > 0 && <button className='btn btn-success roundec-circle mt-3' onClick={Addquestion}>Add questions</button>
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