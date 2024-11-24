import './App.css'
import Card from './components/card'
import MemoDemo from './components/MemoDemo'
import ContextAPIDemo from './components/ContextAPIDemo'
import UseRefDemo from './components/useRefDemo'

function App() {

  return (
    <>
      {/* <div className='card-container'>
        <div>
          <Card title="Hello 1"/>
          <Card title="Hello 2 "/>
          <Card title="Hello 3"/>
        </div>
        <div>
          <Card title="Hello 1"/>
          <Card title="Hello 2 "/>
          <Card title="Hello 3"/>
        </div>

      </div> */}
      {/* <MemoDemo/> */}
      {/* <ContextAPIDemo/> */}
      <UseRefDemo/>

    </>
  )
}

export default App
