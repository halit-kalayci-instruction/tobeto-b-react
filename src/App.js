import { useEffect, useState } from 'react';
import './App.css';


// JSX => HTML + JS
// HTML'de keywordün ismini değiştirmek
// class => className
export default function App() {
  // react hooks
  // total, setTotal => initial value
  // let total = 0;
  const [total, setTotal] = useState(0);

  // useEffect
  // component ilk render edildiğinde
  // dep. listesindeki verilerin değiştiği anda tekrar tetiklenen yapıdır.
  useEffect(
    () => {
      console.log(total);
    },
    [total]);

  useEffect(() => {
    console.log("use effect 2")
  }, [])


  const increase = () => {
    setTotal(total + 1); // async
  }

  const decrease = () => {
    setTotal(total - 1);
  }

  // Two Way Data Binding
  const [activity, setActivity] = useState("");
  const [activityList, setActivityList] = useState(["Aktivite 1", "Aktivite 2", "Aktivite 3"]);


  const clearActivity = () => {
    setActivity("");
  }
  const addActivity = () => {
    setActivityList([...activityList, activity]);
    clearActivity();
  }
  const removeActivity = (activity) => {
    setActivityList(activityList.filter(i => i !== activity));
  }
  return (
    <>
      <div>
        <p>{total}</p>
      </div>
      <div>
        <button onClick={() => { increase() }}>Artır</button>
        <button onClick={() => { decrease() }}>Azalt</button>
      </div>
      <hr />
      <div>
        <input value={activity} onChange={(event) => { setActivity(event.target.value) }} type='text' placeholder='Aktivite Giriniz..' />
        <br />
        <button onClick={() => { addActivity() }}>Ekle</button>
        <ul>
          {/* JSX içerisinde iterasyonlar her zaman MAP ile yapılmalıdır. */}
          {activityList.map((element) =>
            <li key={element}>{element} <button onClick={() => { removeActivity(element) }}>X</button></li>)}
        </ul>
      </div>
    </>
  );
}