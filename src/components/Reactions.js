import React from 'react' 

export default class Reaction extends React.PureComponent {
     reaction = { active : true}
    render() {
       (this.reaction.active ? "Like" : "Dislike")
      return (<div>
          
        { 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => {
            return (<button 
              key={letter} 
              onClick={() => this.props.handleClick(letter)}
            >
              { letter }
            </button>)
          })
        }
      </div>)
    }
  }