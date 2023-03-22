
import {useMutation, useQuery} from 'react-query'
import { useEffect, useMemo, useState} from 'react'
import {Link} from 'react-router-dom'
import { getAllTodos } from '../../utils'
import { AiTwotoneAlert } from 'react-icons/ai'
import { toast } from 'react-toastify'

export const AllTodos = () => {

        const [title, setTitle] = useState('')
        const [completed, setCompleted] = useState('')

        const {isLoading, error, data, refetch} = useQuery('alltodos', getAllTodos)

        if(data?.err) toast.error("error while fetching all APIs, please refresh")
        if(data?.success) toast.success("sucessfully fetched all APIs")

        console.log("data")
        console.log(data)
        
        let options = {
                method: 'POST',
                headers: {
                        "Content-Type": "application/json", "Accept": "application/json"
                },
                body: JSON.stringify({title, completed})
        }

        
        let options2 = {
                method: 'DELETE',
                headers: {
                        "Content-Type": "application/json", "Accept": "application/json"
                },
                // body: JSON.stringify({title, completed})
        }


        console.log(JSON.stringify({title, completed}))

        const { isLoading: isLoading2, error:error2, refetch:refetch2, data:data2} = useQuery('createToddo', () => (
                fetch('http://localhost:8080/todos', options).then(res=> res.json())
        ), {enabled: false})

        if(data2?.err) toast.error("error while creating a Todo, please refresh")
        if(data2?.success) toast.success("sucessfully fetched all APIs")
        
        const { isLoading: isLoading3, error:error3, mutate, isSuccess: isSuccess3, data:data3} = useMutation( (id:any) => (
                fetch(`http://localhost:8080/todos/${id}`, options2).then(res=> res.json())
        ))

        if(data3?.err) toast.error("error while fetching all APIs, please refresh")
        if(data3?.success) toast.success("sucessfully fetched all APIs")

        const handleSubmit = () => {
                setTitle('')
                refetch2()
                refetch()
        }

        useEffect(() => {
                if(isSuccess3 === true) refetch()

        }, [isSuccess3, refetch])



        return (
                <>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#sdf" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900">
                                        {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                                        <span className="pr-2">
                                                <AiTwotoneAlert />
                                        </span>
                                        TodoApp    
                                </a>
                <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans ">
                        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg dark:bg-gray-800">
                                <div className="mb-4">
                                        <h1 className="text-white">Todo List</h1>
                                        <div className="flex mt-4">
                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" onChange={(e:any)=> setTitle(e.target.value)} />
                                                <button className="flex-no-shrink p-2 border-2 rounded  hover:text-teal border-teal text-white hover:bg-[#008080] " onClick={() => handleSubmit()}>Add</button>
                                        </div>
                                </div>
                                <div>
                                        
                                        {
                                        data?.length !== 0 
                                        &&
                                        data?.newTodo?.map((each:{title: string, completed: string, _id: any}) => (
                                                <div key={each._id}>
                                                        
                                                        {/* {each.completed} */}
                                                        {/* <button onClick={() => mutate(each._id)}>delete</button> */}

                                                        
                                                        <div className="flex mb-4 items-center">
                                                                <p className="w-full text-white">{each.title}</p>
                                                                {/* <button className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green`}>{each.completed == 'true' ? 'Done' : 'Not Done'}</button> */}
                                                                <button className="flex-no-shrink p-2 ml-2 rounded border-red text-red border-red hover:text-white bg-[#990000] hover:bg-black text-white hover:" onClick={() => mutate(each._id)}>Remove</button>
                                                        </div>
                                                </div>
                                        ))}
                                        {/* 
                                        <div className="flex mb-4 items-center">
                                                <p className="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                                                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                                                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                                        </div>
                                        <div className="flex mb-4 items-center">
                                                <p className="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                                                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
                                                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                                        </div> */}
                                </div>
                        </div>
                </div>
                </div>
                
                </>
        )
}