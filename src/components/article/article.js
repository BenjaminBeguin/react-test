import React from 'react';
import store from '../../store/store';


class Article extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.article.name}</h2>
      </div>
    );
  }
}

export default Article;
