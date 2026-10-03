import "./App.css";
import Button from './components/Button';
import Alert from "./components/Alert";
import error from "./icon/error.png";
import warning from "./icon/warning.png";
import info from "./icon/info.png";
import success from "./icon/success.png";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button 
          text="Primary"
          color="#0040ff"
        />
        <Button 
          text="Secondary"
          color="#37d4ff"
        />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert
          icon={error}
          text="This is error alert box"
          color="#ff9999"
        />
        <Alert
          icon={warning}
          text="This is warning alert box"
          color="#ffb499"
        />
        <Alert
          icon={info}
          text="This is info alert box"
          color="#ffd699"
        />
        <Alert
          icon={success}
          text="This is success alert box"
          color="#d1ff99"
        />
      </div>
    </div>
  );
}

export default App;
