import './App.css'


// Component for initial tests
function CustomButton() {
  return (
    <button>Custom Button!</button>
  )
}

const customButton2 = () => {
    return (
      <button>Custom Button 2!</button>
    )
  }

const customButton3 = (
    <button>Custom Button 3!</button>
  );

// ----- End of test Components -----


function App() {
  return (
    <>
      <div>
        <p>Let's start from the <h1>Stone Age</h1></p>
        <div className='buttons-box'>
          <CustomButton />
          { customButton2() }
          { customButton3 }
        </div>
      </div>
    </>
  )
}

export default App
