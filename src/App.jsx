import useThrottle from "./custom-hooks/useThrottle";

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

  const handleClickThrottled = useThrottle(handleClick, 1000);

  return (
    <div className="App">
      <button onClick={handleClickThrottled}>Click Me</button>
    </div>
  );
}

export default App;
