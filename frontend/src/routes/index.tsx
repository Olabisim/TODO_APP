
import {Routes, Route} from 'react-router'
import { LoginPage } from '../pages/auth/LoginPage.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RegisterPage } from '../pages/auth/RegisterPage.jsx'
import { AllTodos } from '../pages/todos/AllTodos'
import { CreateTodo } from '../pages/todos/Create'
import ErrorBoundary from '../ErrorBoundary'
import { BrowserRouter as Router } from 'react-router-dom';
import { Support } from './Support'


const queryClient = new QueryClient()

const Routerss = () => {

        return (
                <ErrorBoundary>
                <QueryClientProvider client={queryClient}>
                        {/* <Support> */}
                                <Routes>
                                        <Route path="/" element={<LoginPage />} />
                                        <Route path="/register" element={<RegisterPage />} />
                                        <Route path="/todos" element={<AllTodos />} />
                                        <Route path="/createTodos" element={<CreateTodo />} />
                                </Routes>
                        {/* </Support> */}
                </QueryClientProvider>
                </ErrorBoundary>
        )
}

export default Routerss