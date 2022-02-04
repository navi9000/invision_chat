import ReactDOM from 'react-dom'
import Container from './Container'
import ErrorBoundary from './helpers/ErrorBoundary'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

function Test(props) {
    return (
        <div>
            <p>Hello there</p>
            <div>{props.children}</div>
        </div>
    )
}

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Container component="Register" />} />
                    <Route path="/login" element={<Container component="Login" />} />
                    <Route path="/home" element={<Container component="Home" />} />
                    <Route path="/users/:id" element={<Container component="Profile" />} />
                    <Route path="/chats/:id" element={<Container component="Chat" />} />
                    <Route path="/chats/:id/compose" element={<Container component="Compose" />} />
                    <Route path="/search" element={<Container component="Search" />} />
                    <Route path="*" element={<div>No Match</div>} />
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
  );