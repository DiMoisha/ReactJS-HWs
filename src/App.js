import './App.css';
import { useMessageList } from './hooks/useMessage'
import { useDidUpdate } from './hooks/useDidUpdate'
import { MessageList } from './components/MessageList';
import { MessageInputForm } from './components/MessageInputForm';

function App(props) {
  const [messages, setNewMessage] = useMessageList([]);

  useDidUpdate(() => {
    let i = messages.length - 1;
    if (i >= 0) {
      let $msglist = document.querySelector(".msg-list");
      window.setTimeout(() => {
        $msglist.insertAdjacentHTML('beforeend', `<div class="msg-item-requestbot">${messages[i].author}, ваше сообщение опубликовано!</div>`);
        console.log(messages[i].text);
      }, 1500);
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <h3>{props.heading}</h3>
      </header>
      <div className="App-body">
        <div className="container">
          <MessageList messages={messages} />
          <hr />
          <MessageInputForm onSubmit={setNewMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;