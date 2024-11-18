import logo from '/logo.png';

const myHeader = () => {
  return (
    <div className="ch-header-content">
      {/* <h1>Chameleon</h1>
          <h2 style = {{textAlign: 'center', color: 'white'}}>Synthetic Radiology Report Dataset</h2> */}
      <img src={logo} alt="logo" style={{ width: '450px' }} />
    </div>
  )
}

export default myHeader;