import React, { useState } from "react";
import './login.css'

function UserValidation() {
    const [admin,setAdmin] = useState(false)
    const [userValidated, setUserValidated] = useState('')
    const [userEmailValidated, setEmailUserValidated] = useState('')

    const [StateRegister, setStateRegister] = useState(true);
    const [error, setError] = useState({});
    const [errorFromRegister, seterrorFromRegister] = useState({});

    // LOGIN
    const [UsernameFromLogIn,setUsernameFromLogIn] = useState('')
    const pressUsernameFromLogIn = (evt) =>{
        setUsernameFromLogIn(evt.target.value)
    }
    const [PasswordFromLogIn,setPasswordFromLogIn] = useState('')
    const pressPasswordFromLogIn = (evt) =>{
        setPasswordFromLogIn(evt.target.value)
    }

    // REGISTER
    const [UsernameFromRegister,setUsernameFromRegister] = useState('')
    const pressUsernameFromRegister = (evt) =>{
        setUsernameFromRegister(evt.target.value)
    }
    const [EmailFromRegister,setEmailFromRegister] = useState('')
    const pressEmailFromRegister = (evt) =>{
        setEmailFromRegister(evt.target.value)
    }
    const [EmailCheckFromRegister,setEmailCheckFromRegister] = useState('')
    const pressEmailCheckFromRegister = (evt) =>{
        setEmailCheckFromRegister(evt.target.value)
    }
    const [PasswordFromRegister,setPasswordFromRegister] = useState('')
    const pressPasswordFromRegister = (evt) =>{
        setPasswordFromRegister(evt.target.value)
    }



    const stateFromValidation = () =>{
        setStateRegister(!StateRegister)
        setAnimation(!animation)
    }

    //fetch to backEnd

    const fetchToBackEnd = async (data) => {

        try{
            const response = await fetch('https://ecommercesite-38jt.onrender.com/apiForValidation',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(response.ok){
                const result = await response.json()
                if(result.isAvailable){
                    setEmailUserValidated(true);
                }else{
                    setEmailUserValidated(false);
                }

                if(result.validAdmin){
                    setAdmin(true)
                    window.location.href = 'http://localhost:5173/'; 
                }else if(result.valid){
                    setUserValidated(true)
                    window.location.href = 'http://localhost:5173/'; 
                }else{
                    setUserValidated(false)
                }
            }else{
                console.log('Error en la respuesta del servidor.')
            }
        }catch(e){
            console.error('Error durante la solicitud:', e);
        }
    }


    const dateValidationFromLogIn = (event) =>{
        event.preventDefault()
        const error = {}
        // Username Validation
        if(UsernameFromLogIn.length < 7 || UsernameFromLogIn.length > 20){ //FALTA CHEQUEAR EN LA BASE DE DATOS
            error.username = "Must contain at least 7 letters and less than 20."
        }
        if(PasswordFromLogIn.length < 7){ //FALTA CHEQUEAR EN LA BASE DE DATOS
            error.password = "Must contain at least 7 letters."
        }

        setError(error)

        if(Object.keys(error).length === 0){
            const dataFromUser = {user: UsernameFromLogIn, password: PasswordFromLogIn}
            fetchToBackEnd(dataFromUser)
            setUsernameFromLogIn('')
            setPasswordFromLogIn('')
        }else{
            console.log(error)
        }
        
    }

    const dateValidationFromRegister = (event) =>{
        event.preventDefault()
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const error2 = {}
        // Username Validation
        if(UsernameFromRegister.length < 7 || UsernameFromRegister.length > 20){ //AGREGAR CONDICIONES
            error2.username = "Must contain at least 7 letters and less than 20."
        }
        if(EmailCheckFromRegister !== EmailFromRegister || !emailPattern.test(EmailFromRegister) || EmailFromRegister.length < 7){ //FALTA CHEQUEAR EN LA BASE DE DATOS
            error2.email = "Incorrect email."
        }
        if(PasswordFromRegister.length < 7){ //FALTA CHEQUEAR EN LA BASE DE DATOS
            error2.password = "Must contain at least 7 letters."
        }
        seterrorFromRegister(error2)

        if(Object.keys(error2).length === 0){
            const dataFromUser = {user: UsernameFromRegister, email: EmailFromRegister, password: PasswordFromRegister}
            fetchToBackEnd(dataFromUser)
            setUsernameFromRegister('')
            setEmailFromRegister('')
            setEmailCheckFromRegister('')
            setPasswordFromRegister('')
        }else{
            console.log(errorFromRegister)
        }
    }

    const [animation,setAnimation] = useState(true)

    return(
        <div className="validation-div">  
                <a className="back-button" href="/"><i className="fi fi-br-cross"></i></a>
                <div className={animation ? 'validation-div-box animation-box' : 'validation-div-box animation-box2'}>
                    {StateRegister ? 
                    <div>
                        <h1 className="validation-title">
                            Log In
                        </h1>
                        <form className="validation-div-form" action="">
                            <input onChange={pressUsernameFromLogIn} className="validation-input" type="text" placeholder="Username" name="usernameFromLogIn" id="usernameFromLogIn" value={UsernameFromLogIn}/>
                            {error.username && <span className="span-error">{error.username}</span>}
                            <input onChange={pressPasswordFromLogIn} className="validation-input" type="password" placeholder="Password" name="passwordFromLogIn" id="passwordFromLogIn" value={PasswordFromLogIn}/>
                            {error.password && <span className="span-error">{error.password}</span>}
                            <input onClick={dateValidationFromLogIn} className="validation-input-button" type="submit" value="Iniciar" name="submitFromLogIn" id="submitFromLogIn" />
                        </form>
                        <button className="validation-buttons">Forgot your password?</button>
                        <button onClick={stateFromValidation} className="validation-buttons">Register</button>
                        {admin === '' ? '' : admin && <span className="span-great">Verified admin.</span>}
                        {userValidated === '' ? '' : userValidated ? <span className="span-great">Verified.</span> : <span className="span-error">Incorrect data.</span>}
                    </div> : 
                    <div>
                        <h1 className="validation-title">
                            Register
                        </h1>
                        <form className="validation-div-form" action="">
                            <input onChange={pressUsernameFromRegister} className="validation-input" type="text" placeholder="Username" name="usernameFromRegister" id="usernameFromRegister" value={UsernameFromRegister}/>
                            {errorFromRegister.username && <span className="span-error">{errorFromRegister.username}</span>}
                            <input onChange={pressEmailFromRegister} className="validation-input" type="email" placeholder="email" name="emailFromRegister" id="emailFromRegister" value={EmailFromRegister}/>
                            {errorFromRegister.email && <span className="span-error">{errorFromRegister.email}</span>}
                            <input onChange={pressEmailCheckFromRegister} className="validation-input" type="email" placeholder="confirm email" name="emailCheckFromRegister" id="emailCheckFromRegister" value={EmailCheckFromRegister}/>
                            {errorFromRegister.email && <span className="span-error">{errorFromRegister.email}</span>}
                            <input onChange={pressPasswordFromRegister} className="validation-input" type="password" placeholder="Password" name="passwordFromRegister" id="passwordFromRegister" value={PasswordFromRegister}/>
                            {errorFromRegister.password && <span className="span-error">{errorFromRegister.password}</span>}
                            <input onClick={dateValidationFromRegister} className="validation-input-button" type="submit" value="Finish" name="submitFromRegister" id="submitFromRegister" />
                        </form>
                        <button onClick={stateFromValidation} className="validation-buttons">Log In</button>
                        {userEmailValidated === '' ? '' : userEmailValidated ? <span className="span-great">User created.</span> : <span className="span-error">User already registered.</span>}
                    </div>}
                </div>
        </div>
    )
}

export default UserValidation;