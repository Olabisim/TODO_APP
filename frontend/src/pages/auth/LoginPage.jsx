import { Button } from "../../components/Button"
import { InputField, PasswordInput } from "../../components/Input"
import {AiTwotoneAlert} from 'react-icons/ai'
import { Link } from "react-router-dom"
import { useQuery } from "react-query"
import { useState } from "react"
// import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'


export const LoginPage = () => {

        const navigate = useNavigate('')

        // const [loading, setLoading]
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const options = {
                method: 'POST',
                headers: {
                        "Content-Type": "application/json", "Accept": "application/json"
                },
                body: JSON.stringify({email, password})
        }

        const {isLoading, data, refetch} = useQuery('login', () => (
                fetch('http://localhost:8080/login/', options).then(res => res.json())
        ),{enabled: false})


        const handleClick = () => {
                refetch()
        }

        console.log("data")
        console.log(data)

        if(data?.status) {
                navigate('/home')
                // toast.success(data?.data.message)
        }

        if(data?.status === false) {
                // toast.error(data?.data.message)
        }




        return (
                <div className="">
                        <section className="bg-gray-50">
                                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                                <a href="#sdf" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900">
                                        {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                                        <span className="pr-2">
                                                <AiTwotoneAlert />
                                        </span>
                                        TodoApp    
                                </a>
                                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                                        Sign in to your account
                                                </h1>
                                                <div className="space-y-4 md:space-y-6">

                                                <InputField
                                                        required
                                                        label="Your email"
                                                        type="email"
                                                        name="email"
                                                        makeWhite
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        
                                                />

                                                <PasswordInput
                                                        required
                                                        label="Your password"
                                                        type="password"
                                                        name="password"
                                                        makeWhite
                                                        onChange={(e) => setPassword(e.target.value)}
                                                />

                                                        
                                                <Button buttonText="Submit" loading={isLoading} onClick={handleClick} /> 
                                                        
                                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                                Don’t have an account yet? <Link to="/signup"><span href="#dasd" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</span></Link> 
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                                </div>
                        </section>
                </div>
        )
}