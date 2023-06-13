import { useState } from 'react';
import { Routes, Route, useNavigate, useMatch } from 'react-router-dom';
import Footer from './components/Footer';
import About from './screens/About';
import Menu from './components/Menu';
import AnecdoteList from './screens/AnecdoteList';
import CreateNew from './screens/CreateNew';
import Anecdote from './screens/Anecdote';
import Home from './screens/Home';

const App = () => {

    const navigate = useNavigate();

    const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ]);
  console.log(anecdotes);

  const [notification, setNotification] = useState('');

  const match = useMatch('anecdotes/:id');
  const anecdote = match ? anecdotes.find(i => i.id === Number(match.params.id)) : null;

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a));
  }

  return (
    <>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification.length !== 0 &&
        <p>{notification}</p>
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anecdotes/:id' element={<Anecdote anecdote={anecdote} />} />
        <Route path='/anecdotes' element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path='/about' element={<About />} />
        <Route path='/new' element={<CreateNew anecdotes={anecdotes} setAnecdotes={setAnecdotes} setNotification={setNotification} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;