import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './components/UI_Components/Member/index';
import ChatRoom from './components/UI_Components/ChatRoom/index';
import RoomInfo from './components/UI_Components/RoomInfo/index';
import SearchBox from './components/UI_Components/SearchBox/index';
import ButtonBox from './components/UI_Components/ButtonBox/index';

class App extends Component {
  // _renderMembers = () => {
  //   const members = this.state.members.map(member => {
  //     return <Member
  //     // tit,le={member.title_english} 
  //     // poster={member.medium_cover_image} 
  //     // key={member.id} 
  //     // genres={member.genres}
  //     // synopsis={member.synopsis}
  //     />
  //   });

  //   return members;

  //   // 함수명에 _(언더스코어)를 붙이는 이유? 리액트 자체 기능과 내가 만든 기능에 차이를 두기 위해서
  // }


  render() {
    return (
      <Fragment>
        <div className="App">
        <h3>Document Chat Room - Object Storage의 이해와 활용 V1.pdf</h3>
          <RoomInfo>
            <ButtonBox />
            <SearchBox />
          </RoomInfo>
          <ChatRoom>
          </ChatRoom>
          {/* <Member profile="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" name="wl수" dept="개발" /> */}
        </div>
      </Fragment>

    );
  }
}

export default App;
