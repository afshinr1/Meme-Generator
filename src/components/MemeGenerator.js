import React, { Component } from "react";
import troll from './trollface.png'
export class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: troll,
      allMemeImgs: [],
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ allMemeImgs: data.data.memes, isLoading: false });
      });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  generate = (event) =>{
      event.preventDefault();
    //Generate random img from array
   let randomIndex = Math.floor(Math.random() * 100);
    this.setState({randomImage : this.state.allMemeImgs[randomIndex].url});

  }

  render() {
    console.log(this.state.allMemeImgs);
    return (
      <div className="generator">
        <form className="formname" onSubmit={this.generate}>
          <input
          placeholder='Top Text'
            name="topText"
            className="inputs"
            type="text"
            onChange={this.handleChange}
            value={this.state.topText}
          />

          <input
          placeholder="Bottom Text"
            name="bottomText"
            className="inputs"
            type="text"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <button className="generate">Generate</button>
        </form>

        <div className='meme-holder'>
        <h2 className='topText'>{this.state.topText}</h2>
            <h2 className='bottomText'>{this.state.bottomText}</h2>
            <img src={this.state.randomImage} alt="22"></img>
          
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
