
import {useState} from 'react'
import {useQuery} from 'react-query'
import {useNavigate} from 'react-router-dom'

export const CreateTodo = () => {


        
        const [title, setTitle] = useState<string>('')
        const [completed, setCompleted] = useState('')

        console.log(title, completed)

        const navigate = useNavigate()

        let options = {
                method: 'POST',
                headers: {
                        "Content-Type": "application/json", "Accept": "application/json"
                },
                body: JSON.stringify({title, completed})
        }

        console.log(JSON.stringify({title, completed}))

        const { isLoading, error, refetch, data} = useQuery('createTodo', () => (
                fetch('http://localhost:8080/todos', options).then(res=> res.json())
        ), {enabled: false})

        const handleSubmit = () => {
                refetch()
        }

        console.log(data)

        if(data?.status) {
                navigate('/todos')
        }

        return (
                <div>

                        <input type="text" onChange={(e)=> setTitle(e.target.value)} />
                        <input type="text" onChange={(e)=> setCompleted(e.target.value)} />

                        <button onClick={handleSubmit}>submit</button>

                </div>
        )
}