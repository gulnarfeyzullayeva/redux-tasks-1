import Counter from "./counter/counter";
import Student from "./student/Student";
import Theme from "./theme/Theme";
import Todo from "./todo/Todo";
import UserProfile from "./user/UserProfile"

function App(){
    return (
        <div>
            <h2>Task 1</h2>
            <Counter/>
            <br />
            <h2>Task 2</h2>
            <UserProfile/>
            <br />
            <h2>Task 3</h2>
            <Theme/>
            <br />
            <h2>Task 4</h2>
            <Student/>
            <br />
            <h2>Task 5</h2>
            <Todo/>
        </div>
    )
}
export default App;