import * as React from 'react';
import './App.css';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toString().toLowerCase());
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <hr />

      <List list={stories} search={searchTerm} />
    </div>
  );
}

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange} />

      <p>Searching for <strong>{searchTerm}</strong></p>
    </div>
  );
}

const List = (props) => {
  let list = props.list;
  list = list.filter((i) => {
    let title = i.title.toString().toLowerCase();
    let author = i.author.toString().toLowerCase();
    return (title.includes(props.search) || author.includes(props.search));
  });

  return (
    <ul>
        {list.map((item) => (
            <Item key={item.objectID} item={item} />
          ))}
      </ul>
  );
}

const Item = (props) => {
  return (
    <ul>
        <li key={props.item.objectID}>
          <span>
            <a target='_blank' href={props.item.url}>{props.item.title}</a>
          </span>
          <span>{props.item.author}</span>
          <span>{props.item.num_comments}</span>
          <span>{props.item.points}</span>
        </li>
    </ul>
  );
}

export default App;