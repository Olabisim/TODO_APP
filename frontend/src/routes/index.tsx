
import {Routes, Route} from 'react-router'
import { LoginPage } from '../pages/auth/LoginPage.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RegisterPage } from '../pages/auth/RegisterPage.jsx'


const queryClient = new QueryClient()

const Routerss = () => {

        return (
                <QueryClientProvider client={queryClient}>
                        <Routes>
                                        <Route path="/" element={<LoginPage />} />
                                        <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                 </QueryClientProvider>
        )
}

export default Routerss