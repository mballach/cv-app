import HeadCard from './HeadCard'
import Education from './Education'
import Work from './Work'

import '../styles/App.css'

function App() {

  return (
    <>
      <HeadCard />
      <hr style={{marginTop:"40px"}}></hr>
      <Education />
      <hr style={{marginTop:"40px"}}></hr>
      <Work />
    </>
  )
}

export default App
