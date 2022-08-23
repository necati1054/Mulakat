import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {AllDataPerson,AddPerson} from "./components/features/PersonSlice"
import {AllDataBook,AddBook} from "./components/features/BookSlice"
import {AllDataGivenBook,AddGivenBook,DestroyGivenBooK} from "./components/features/GivenBookSlice"

function App() {

  const dispatch = useDispatch();

  const { person } = useSelector((state) => state.person)

  useEffect(() => {
    dispatch(AllDataPerson());
    // dispatch(AllDataBook())
    // dispatch(AllDataGivenBook())
  }, [])

  function AddPersonn(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    const item = {
      'name': data.get("name"),
      'identification':data.get("identification"),
      'type' :data.get("type")
    }
    dispatch(AddPerson(item))
  }

  function AddBookk(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget)
    const item = {
      'name': data.get('name')
    }
    console.log(item);
    dispatch(AddBook(item));
  }
  
  function AddGivenBook(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const item = {
      'person':data.get("person"),
      'book':data.get("book"),
      'date':data.get("date")
    }
    console.log(item);
  }

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Add Person</h2>
          <form onSubmit={AddPersonn}>
            <label className="form-label" >name</label>
            <input className="form-control" name="name" type="text"/><br/>
            <label className="form-label" >identification</label>
            <input className="form-control" name="identification" min="11" max="11" type="text"/><br/>
            <label className="form-label"  >level</label> 
            <select className="form-select" name="type">
              <option>Select Level</option>
              <option value={0}>Writer</option>
              <option value={1}>Student</option>
            </select>
            <button className="btn btn-primary" type="submit">Add Person</button>
          </form>
          <h2>Add Book</h2>
          <form onSubmit={AddBookk}>
            <label className="form-label">name</label>
            <input className="form-control" name="name" type="text"></input>
            <button className="btn btn-primary" type="submit">Add Book</button>
          </form>
          <h2>Add Given Book</h2>
          <form onSubmit={AddGivenBook}>
            <label className="form-label" >Person</label>
            <select className="form-select" name="person">
              <option>Select Person</option>
              {
                person.map((item)=>(<option value={item.id}>{item.name}</option>))
              }
            </select>
            <div className="given_book">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Book</label>
                  <select className="form-select" name="book">
                  <option>Select Book</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Date</label>
                  <input className="form-control" name="date" type="date" />
                </div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">Add Given Book</button>
          </form>
          {/* <h2>Given Books</h2>
          <table>
            <thead>
              <th>Person Name</th>
              <th>Book Name</th>
              <th>Purchase Date</th>
              <th>detail</th>
            </thead>
            <tbody>
              <tr>a</tr>
              <tr>a</tr>
              <tr>a</tr>
              <tr><button>Remove</button></tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
