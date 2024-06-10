import "./App.css";

function App() {
  const links = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <main className="bg-[#141414] flex justify-center items-center h-screen w-screen text-center">
      <div className="bg-[#1F1F1F] p-[40px] rounded-[12px]">
        <img />
        <p className="text-white">Jessica Randall</p>
        <p className="text-[#C4F82A]">London, United Kingdom</p>
        <div className="flex flex-col pt-[8px]">
          {links.map((link, index) => {
            return (
              <a
                className="text-white hover:text-[#333333] hover:bg-[#C4F82A] bg-[#333333] p-3 my-[8px] rounded-[8px] w-full text-center"
                key={index}
              >
                {link}
              </a>
            );
          })}
        </div>
      </div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </main>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
