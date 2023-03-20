
import {Routes, Route} from 'react-router'
import { LoginPage } from '../pages/auth/LoginPage'

const Routerss = () => {

        return (
                <Routes>
                        <Route path="/" element={<LoginPage />} />
                </Routes>
        )
}

export default Routerss