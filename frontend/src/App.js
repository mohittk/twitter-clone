import Feed from "./Components/Feed";
import Login from "./Components/Login";
import MyTweets from "./Components/MyTweets";
import Sidebar from "./Components/Sidebar";
import Widgets from "./Components/Widgets";

export default function App() {
  return (
    <div className="container">
      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* <Login/> */}
        {/* Sidebar */}
        {/* <Sidebar /> */}
        {/* Feed */}
        {/* <Feed /> */}
        {/* Widgets */}
        {/* <Widgets /> */}
        {/* Modal */}
        <MyTweets/>
      </main>
    </div>
  );
}
