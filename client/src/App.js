import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    usn: "",
    email: "",
    branch: ""
  });

  const [editId, setEditId] = useState(null);

  // GET students
  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ADD or UPDATE student
  const saveStudent = async () => {
    if (editId) {
      await axios.put(`http://localhost:5000/students/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/students", form);
    }

    setForm({ name: "", usn: "", email: "", branch: "" });
    fetchStudents();
  };

  // DELETE
  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/students/${id}`);
    fetchStudents();
  };

  // EDIT
  const editStudent = (student) => {
    setForm(student);
    setEditId(student._id);
  };

  return (
    <div className="container">
      <h2>🎓 Student Management System</h2>

      <div className="form">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="USN"
          value={form.usn}
          onChange={(e) => setForm({ ...form, usn: e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Branch"
          value={form.branch}
          onChange={(e) => setForm({ ...form, branch: e.target.value })}
        />

        <button onClick={saveStudent}>
          {editId ? "Update Student" : "Add Student"}
        </button>
      </div>

      <h3>Students List</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>USN</th>
            <th>Email</th>
            <th>Branch</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.usn}</td>
              <td>{s.email}</td>
              <td>{s.branch}</td>
              <td>
                <button className="edit" onClick={() => editStudent(s)}>
                  Edit
                </button>
                <button className="delete" onClick={() => deleteStudent(s._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;