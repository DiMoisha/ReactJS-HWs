import './App.css';
import { useMessageList } from './hooks/useMessage'
import { useDidUpdate } from './hooks/useDidUpdate'
import { MessageList } from './components/MessageList';
import { MessageInputForm } from './components/MessageInputForm';

function App(props) {
  const [messages, setNewMessage] = useMessageList([]);

  useDidUpdate(() => {
    let i = messages.length - 1;
    if (i >= 0 && !messages[i].isBot) {
      let message = { id: Date.now(), dat: new Date().toLocaleString('ru-RU'), author: 'bot', text: `${messages[i].author}, ваше сообщение опубликовано!`, isBot: true };
      window.setTimeout(() => {
        setNewMessage(message);
      }, 1500);
    }
  }, messages)

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