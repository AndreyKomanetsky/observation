import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import {useMessage} from '../hooks/message.hook'


export const CreatePage = () => {

    const {request, clearError, error} = useHttp()
    //const [] = useState('')
    const auth = useContext(AuthContext)
    const history = useHistory()
    const message = useMessage()

    useEffect(() => {
        window.M.updateTextFields()
      }, [])

    useEffect(()=>{
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]:event.target.value })
    }

    const  [form, setForm] = useState({
        mark:'', caseType:'', number:''
      })

    const confirmHandler = async event => {
        try {
            const data = await request('api/link/write', 'POST', {mark: form.mark, caseType: form.caseType, number: form.number}, {
                Authorization: `Bearer ${auth.token}`
            })
            history.push(`/detail/${data.link._id}`)
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div className='row'>
            <div className="col 6 s8 offset-s2" style={{paddingTop: '2rem'}}>
            <div className="card blue darken-1">
        <div className="card-content white-text">
          <span className="card-title">Добавление новой записи</span>
          <div>   

          <div className="input-field">
          <input placeholder="Введите марку авто" id="mark" type="text" name="mark" value={form.mark} onChange ={changeHandler} />
          <label htmlfor="mark">Марка</label>
          </div>

          <div className="input-field">
          <input placeholder="Введите тип кузова" id="caseType" type="text" name="caseType" value={form.caseType} onChange ={changeHandler} />
          <label htmlfor="caseType">Тип кузова</label>
          </div>

          <div className="input-field">
          <input placeholder="Введите гос. номер" id="number" type="text" name="number" value={form.number} onChange ={changeHandler} />
          <label htmlfor="number">Гос. номер</label>
          </div>

           </div>
        </div>
        <div className="card-action">
          <button className="btn yellow darken-4" onClick={confirmHandler} >Сохранить</button>
        </div>
      </div>
        </div>
        </div>
    )
}