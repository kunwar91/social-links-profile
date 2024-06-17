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
      <div className="bg-[#1F1F1F] p-[40px] rounded-[12px] flex justify-center items-center flex-col">
        <img
          src="./avatar-jessica.jpeg"
          className="rounded-full w-[88px] h-[88px]"
          alt="img"
        />
        <p className="text-white">Jessica Randall</p>
        <p className="text-[#C4F82A]">London, United Kingdom</p>
        <p className="text-white my-6">
          {`"Front-end developer and avid reader."`}
        </p>
        <div className="flex flex-col w-full">
          {links.map((link, index) => {
            return (
              <a
                className="text-white hover:text-[#333333] hover:bg-[#C4F82A] bg-[#333333] p-3 my-2 rounded-lg w-full text-center"
                key={index}
              >
                {link}
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
