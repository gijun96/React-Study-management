import "./App.css";
import Customer from "./components/Customer";
import { Component } from "react";

const customers = [{
  id: 1,
  image:
  "http://via.placeholder.com/64x64/any",
  name: "홍길동",
  birthday: "961207",
  gender: "남자",
  job: "학생",
},
{
  id: 2,
  image:
  "http://via.placeholder.com/64x64/any",
  name: "장길산",
  birthday: "971007",
  gender: "남자",
  job: "도적",
},
{
  id: 3,
  image:
   "http://via.placeholder.com/64x64/any",
  name: "임꺽정",
  birthday: "981107",
  gender: "남자",
  job: "산적",
},
];

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=>{ return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
 
      </div>
    );
  }
}

export default App;
