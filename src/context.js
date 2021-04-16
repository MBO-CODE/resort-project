import React, { Component } from "react";

// RCC
// folosind React.createContext() avem acces la 2 componente: provider si consumer
const RoomContext = React.createContext();

// https://reactjs.org/docs/context.html check this!
// CONTEXT API
class RoomProvider extends Component {
  state = {
      greeting: 'hello',
      name: "John"
  };

  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
          {/* pentru a accesa copiii */}
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
// creem un consumer
const RoomConsumer = RoomContext.Consumer;
export  {RoomProvider, RoomConsumer, RoomContext};