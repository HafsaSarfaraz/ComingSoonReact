import { useState } from "react"



function App() {
  let [name, setName] = useState("");

  const setNames = (e) => {
    setName(e.target.value);
  };


  const getName = () => {
    let count = 0;
    let names = "";
    for (let letter of name) {
      if (letter === "@") {
        break;
      } else {
        names += letter;
        count++;
      }
    }
    console.log("The no of name letter without @ is ", count);
    alert(`Ok ${names} we will notify you, through your Email which is ${name}`);
  };

  return (

    <div className="animate-[wiggle_1s_ease-in-out_1] bg-purple-600 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center p-2 border-4 drop-shadow-2xl mix-blend-multiply animate-bounce w-96 h-28">
        Coming Soon!
      </h1>
      <div className="h-20 w-1/3 font-bold text-white relative top-3 ">
        <p>Our Website is under Construction. We will be here soon with our new awesome site. Enter Mail to be notified.</p>
      </div >
      <div className="h-24 w-1/2 flex flex-row drop-shadow-lg justify-center	"  >
        <input type="email"
          id="Notify"
          onChange={setNames}
          name="Email"
          autoComplete="email"
          className="h-12 w-1/2 text-center"
          placeholder="Your Email address" />

        <button onClick={getName} className="bg-transparent h-12 w-32 border-2  text-white font-bold " >Notify me</button>
      </div>
    </div>
  )
}

export default App
