import React,{useState} from 'react'
import Input from '../Component/input/Input'
import Label from '../Component/Label/Label'
import Select from '../Component/Select/Select'
import CheckBox from '../Component/Checkbox/CheckBox'

const Dropdown = ({handleChange,addTechnology,selectedValue, store,handleData, options}) => {
     //selective question
     const checkbox=[
        {value:"MCQ", label:"MCQ"},
        {value:"Programming", label:"Programming"},
        {value:"Descriptive", label:"Descriptive"},
     ]
    const [selectMode, setSelectMode] = useState([])
     //select mcq questions
    
    //  let selectQuestion = ["Choose Mode", "MCQ", "Programming", "Descriptive"]
     let totalquestionsSum=store.discreptive+store.mcq+store.programing;
     const SelectMCQ = (e) => {
        // setSelectMode([...selectMode, e.target.value])
        if(e.target.checked){
            setSelectMode([...selectMode,e.target.value])
        }else{
            setSelectMode([...selectMode.filter(item=>item!==e.target.value)])
        }
    }
    return (
        <>
            {
                < div className='' >
                    <Label htmlData="Technology" labelData="Technology" />
                    <Select option={options} handleChange={handleChange} />
                </div >
            }
            {/* {
                selectedValue.length != 0 &&
                <div>
                    <Label htmlData="Select Mode" labelData="SelectMode" />
                    <Select option={selectQuestion} handleChange={SelectMCQ} />
                </div>
            } */}

            <div>
                <CheckBox checkbox={checkbox} onChange={SelectMCQ}/>
            </div>
            {
                selectMode.includes('MCQ') &&
                <div className=''>
                    <Label htmlData="MCQ" labelData="MCQ" />
                    <Input inputType="text" name="mcq" fieldChange={handleData} inputPlaceholder="Enter the MCQ" />
                </div>
            }
            {
                selectMode.includes('Programming') &&
                <div className=''>
                    <Label htmlData="Programming" labelData="Programming" />
                    <Input inputType="text" name="programing" inputPlaceholder="Enter the Programming" fieldChange={handleData} />
                </div>
            }
            {
                selectMode.includes('Descriptive') &&
                <div className=''>
                    <Label htmlData="Descriptive" labelData="Descriptive" />
                    <Input inputType="text" name="discreptive" inputPlaceholder="Enter the Descreptive" fieldChange={handleData} />
                </div>
            }
            {

                (store.total == totalquestionsSum && store.total) ? (<button onClick={addTechnology} className='btn btn-success m-2'>Add Other Technology</button>) : ((totalquestionsSum > store.total) ? <span className='text-danger'>grater the number of questions</span> : <span></span>)

            }
        </>
    )
        }
export default Dropdown