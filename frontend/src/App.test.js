import { render } from "@testing-library/react"
import App from "./App"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routerss from "./routes";


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate
}));

describe("App", () => {
        it("renders correctly", () => { 
                
                render (
                        <Router>
                            <ToastContainer
                              position="top-right"
                              autoClose={5000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              pauseOnHover
                            ></ToastContainer>
                            <Routerss />
                        </Router>
                )
                
        })
})