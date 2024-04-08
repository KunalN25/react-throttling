function App() {
  const fetchData = async () => {
    const resp = await fetch("http://localhost:8000/data");
    return resp.json();
  };
  const handleClick = () => {
    fetchData().then((data) => {
      console.log(data);
    });
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
