
import './css/Chat.css'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../components/AppContext';
import backIcon from '../icons/left.svg';
import { POST } from '../function/POST'

let language = navigator.language;

const text = {
  'en': {
    title: 'Group'
  },
  'zh-CN': {
    title: '群组'
  }
}

if (text[language] === undefined) {
  language = 'en';
}

function Chat() {

  const navigate = useNavigate();

  const { context } = useAppContext();

  function back() {
    navigate('/');
  }

  let message = [
    ['Voyage', '12:08', '你说牛魔呢'],
    ['蔡徐坤', '12:09', '难绷'],
    ['Voyage', '12:08', '你说牛魔呢'],
    ['蔡徐坤', '12:09', '难绷'],
    ['Voyage', '12:08', '你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的你说牛魔呢腻麻麻的'],
    ['蔡徐坤', '12:09', '难绷'],
    ['Voyage', '12:08', '你说牛魔呢'],
    ['蔡徐坤', '12:09', '难绷'],
    ['Voyage', '12:08', '你说牛魔呢'],
    ['蔡徐坤', '12:09', '难绷'],
    ['Voyage', '12:08', '你说牛魔呢'],
    ['蔡徐坤', '12:09', '难绷']
  ];
  let messageId = 0;

  (async (message, messageId) => {
    try {
      const response = await POST({ chatId: context.chatId }, 'src/chat/message');
      console.log(response);
      message = response.message;
      messageId = response.messageId;
    } catch (error) {
      console.error('Error: ', error);
    }
  })(message, messageId);

  setInterval(async () => {
    try {
      const response = await POST({ chatId: context.chatId, messageId: messageId }, 'src/chat/newMessage');
      console.log(response);
      message.concat(response.message);
      messageId = response.messageId;
    } catch (error) {
      console.error('Error: ', error);
    }
  }, 2000);

  return (
    <div className="Chat">
      <h1>{text[language].title}</h1>
      <div className="navigator" onClick={back}>
        <img src={backIcon} alt="back" />
      </div>
      {
        message.map((item, index) => {
          return (
            <div className="messageBox" key='index'>
              <div className="messageDetail">
                <div className="userName">{item[0]}</div>
                <div className="time">{item[1]}</div>
              </div>
              <div className="message">{item[2]}</div>
            </div>
          )
        })
      }

    </div>
  )
}

export default Chat