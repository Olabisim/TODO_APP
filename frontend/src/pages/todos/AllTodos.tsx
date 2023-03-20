
import {useQuery} from 'react-query'
import {useMemo, useState} from 'react'

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
                </div>
        )
}