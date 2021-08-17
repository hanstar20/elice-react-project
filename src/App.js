import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import SetPage from './components/SetPage';


function App() {

  return (
    <Provider store={store}>
      <SetPage />
    </Provider>
  );
}

export default App;
