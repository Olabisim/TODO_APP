

export async function getAllTodos () {
        const {data}:any = await fetch('http://localhost:8080/todos').then(res=> res.json())
        return data
}
