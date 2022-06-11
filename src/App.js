import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '~/router';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((router, i) => {
                        const Page = router.element;
                        return <Route key={i} path={router.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
