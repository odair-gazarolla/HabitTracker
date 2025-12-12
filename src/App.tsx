import CustomButton1 from './componets/CustomButton1';
import customButton2 from './componets/CustomButton2';
import customButton3 from './componets/CustomButton3';
import './App.css'

// ----- End of test Components -----


function App() {
  return (
    <>
      <div>
        <p>Let's start from the <h1>Stone Age</h1></p>
        <div className='buttons-box'>
          <CustomButton1 />
          { customButton2() }
          { customButton3 }
        </div>
      </div>
    </>
  )
}

export default App
