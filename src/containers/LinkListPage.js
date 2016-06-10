import React from 'react';
import LinksData from '../LinksData';
localStorage.setItem('linksData', JSON.stringify(LinksData));

let MOCKDATA = [
      {
        id: 1,
        name: 'Test Link',
        vote: 0
      },
      {
        id: 2,
        name: 'Test Link 2',
        vote: 2
      }];


class LinkListPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: MOCKDATA,
      deneme : 10
    };

    this.voteUp = this.voteUp.bind(this);

  }

  componentDidMount() {
    this.state = {data: MOCKDATA, deneme: 1}
  }

  shouldComponentUpdate() {
  }

  getData() {
  }

  voteUp(e) {
    e.preventDefault();
    this.setState = ({
      deneme : ++this.state.deneme
    }, function() {
    });
  }

  render() {
    // let renderData = this.state.data.map(n => {
    //   return (
    //         <li key={n.id}>{n.name}
    //           <p>{n.vote}</p>
    //
    //            <button>Down</button>
    //          </li>
    //        );
    // });

    return (
      <div>
        <button onClick={this.voteUp}>Up</button>
        Count is :{this.state.deneme}s
          {/*<ul>{renderData}</ul>*/}
      </div>
    );
  }

}


export default LinkListPage;
