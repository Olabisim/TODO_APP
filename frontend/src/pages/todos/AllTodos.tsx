
import {useQuery} from 'react-query'
import {useMemo, useState} from 'react'
import {Link} from 'react-router-dom'

export const AllTodos = () => {

        const [todoState, setTodoState] = useState([])

        const {isLoading, error, data} = useQuery('alltodos', () => (
                fetch('http://localhost:8080/todos').then(res=> res.json())
        ))


        useMemo(() => {
                if(data?.status) setTodoState(data?.data.todos)
        }, [data])



        console.log("data")
        console.log(data?.data.todos)

        return (
                <div>
                        {
                        todoState.length !== 0 
                        &&
                        todoState.map((each:{title: string, completed: string}, i ) => (
                                <div key={i}>
                                        {each.title}
                                        {each.completed}
                                </div>
                        ))}

                        <Link to="/createTodos"><span className='mt-32 bg-black px-3 py-1 text-white'>Create a Todo</span></Link>
                </div>
        )
}