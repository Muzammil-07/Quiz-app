import React from 'react'
import questions from './Questions'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
function Answer() {
    const [answer,setanswer]=useState(<div>loading</div>)
    var arr=[]
  useEffect(()=>{
      const reload =()=>{
         questions.map((doc)=>{
         arr.push(doc.questionText)
         })
              
              setanswer(
              <ol>
                  {questions.map((doc,index)=>{
                    return(
                      <li key={index}>{doc.questionText}
                      <ul>
                      {doc.answerOptions.map((res,index)=>{
                        if(res.isCorrect == true){

                          return(
                          <li key={index} style={{color:'yellow'}}>{res.answerText}</li>
                          )
                        }else{
                          return(
                            <li key={index} >{res.answerText}</li>
                            )
                        }
                      })}</ul></li>
                      
                      )
                  })}
                 
                  </ol>
           
                  )
       
                }
                reload()
    },[])

      console.log(arr)
  
  return (
    <>
    <div className='app'style={{position:"relative"}} >
      {answer}
    </div>
     <Link to="/" style={{position:"fixed" ,top:"10%",left:"50%"}}>Back to Quiz</Link> 
     </>
  )
}

export default Answer