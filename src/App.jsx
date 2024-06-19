import "./App.css";


function App() {
  const links = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  const user = {
    name: "Jessica Randall",
    location: "London, United Kingdom",
    bio: '"Front-end developer and avid reader."',
  };
  return (
    <main className="bg-off-black flex justify-center items-center h-screen w-screen text-center">
      <div className="bg-dark-grey lg:p-10 p-6 rounded-xl flex justify-center items-center flex-col lg:w-96 w-80">
        <img
          src="./avatar-jessica.jpeg"
          className="rounded-full w-[88px] h-[88px] mb-6"
          alt="img"
        />
        <h1 className="text-white font-[Inter-SemiBold] text-2xl">
          {user.name}
        </h1>
        <p className="text-neon-green font-inter-bold text-sm mt-1">
          {user.location}
        </p>
        <p className="text-white my-6 font-interregular text-sm">{user.bio}</p>
        <div className="flex flex-col w-full">
          {links.map((link, index) => {
            return (
              <a
                className="text-white hover:text-off-black hover:bg-neon-green bg-grey p-3 my-2 rounded-lg w-full text-center font-inter-bold text-sm"
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
