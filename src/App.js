import "./App.css";
import Customer from "./components/Customer";
import { Component } from "react";
import TableBody from "@mui/material/TableBody"
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";


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
      <Paper sx={{overflowX: "auto"}}>
        <Table stickyHeader sx={{maxWidth:'1080px', minWidth:'1080px'}}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c=>{
              return(
                <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
