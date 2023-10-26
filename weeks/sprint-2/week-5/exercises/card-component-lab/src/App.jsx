import "./App.css";
import Card from "./components/Card";

function App() {
  const lemonData = {
    title: "Lemon",
    titleColor: "#166F39",
    subtitle: "This is a really tasty fruit.",
    emoji: "🍋",
    primaryColor: "#8cffba",
    secondaryColor: "#cfffe2",
    buttonColor: "#FCED84",
    buttonText: "ORDER NOW",
    buttonTextColor: "#000",
  };

  const rocketData = {
    title: "Rocket",
    titleColor: "#0B0C11",
    subtitle: "Join us into the outer space!",
    emoji: "🚀",
    primaryColor: "#A6CFE2",
    secondaryColor: "#C2DCE9",
    buttonColor: "#0B0C11",
    buttonText: "BOOK SEAT",
    buttonTextColor: "#FFD600",
  };

  const dogData = {
    title: "Doggy",
    titleColor: "#502F7E",
    subtitle: "Hello, do you want to be friends?",
    emoji: "🐶",
    primaryColor: "#EEB200",
    secondaryColor: "#FFE086",
    buttonColor: "#FFF",
    buttonText: "ADOPT ME",
    buttonTextColor: "#502F7E",
  };
  return (
    <>
      <main>
        <Card data={lemonData} />
        <Card data={rocketData} />
        <Card data={dogData} />
      </main>
    </>
  );
}

export default App;
