
import {Routes, Route} from 'react-router'
import { LoginPage } from '../pages/auth/LoginPage.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RegisterPage } from '../pages/auth/RegisterPage.jsx'
import { AllTodos } from '../pages/todos/AllTodos'
import { CreateTodo } from '../pages/todos/Create'


const queryClient = new QueryClient()

const Routerss = () => {

        return (
                <QueryClientProvider client={queryClient}>
                        <Routes>
                                        <Route path="/" element={<LoginPage />} />
                                        <Route path="/register" element={<RegisterPage />} />
                                        <Route path="/todos" element={<AllTodos />} />
                                        <Route path="/createTodos" element={<CreateTodo />} />
                        </Routes>
                 </QueryClientProvider>
        )
}

export default Routerss