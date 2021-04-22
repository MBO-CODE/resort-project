import React, { Component } from "react";
import items from "./data";

// RCC
// folosind React.createContext() avem acces la 2 componente: provider si consumer
const RoomContext = React.createContext();

// https://reactjs.org/docs/context.html check this!
// CONTEXT API
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  //getData
  componentDidMount() {
    let rooms = this.formatData(items);
    // just to check out if I'm reding the values.
    console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      // this "," is tricky. I'm just collecting all infos from all (id, images)
      let room = { ...item.fields, images, id };

      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [... this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug)
    return room;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {/* pentru a accesa copiii */}
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
// creem un consumer
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
