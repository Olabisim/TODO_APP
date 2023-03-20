
import {Routes, Route} from 'react-router'
import { LoginPage } from '../pages/auth/LoginPage.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()

const Routerss = () => {

        return (
                <QueryClientProvider client={queryClient}>
                        <Routes>
                                        <Route path="/" element={<LoginPage />} />
                        </Routes>
                 </QueryClientProvider>
        )
}

export default Routerss