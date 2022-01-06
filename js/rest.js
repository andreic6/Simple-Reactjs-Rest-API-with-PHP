const { useState } = React
function App() {
 const [typing, setTyping] = useState('')
 const [response, setResponse] = useState('')
 const config = {
	 headers: {
		 'Content-Type':'application/x-www-form-urlencoded'
	 }
 }
function Send(e) {
	e.preventDefault();
axios.post('http://192.168.1.1/rest.php', {value:typing}, config)
      .then(res => {
       setResponse(res.data);
       })
}
 return (
  <div>
   <form>
    <label> Name:
    <input type = "text" value={typing} onChange={e => setTyping(e.target.value)}/>
     </label>
     <button onClick={Send}>Add</button><br/>
     <span>{response}</span>
      </form>
   </div>
   )
}
ReactDOM.render(<App />, document.getElementById('mydiv'))  
