import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Articles from "../Articles";
import ArticleFrame from "../ArticleFrame";
import Saved from "../Saved";

class Search extends Component {
  state = {
    topic: "",
    start: "",
    end: "",
    articles: [],
    savedArticles: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      API.nytsearch(this.state.topic, this.state.start, this.state.end
      ).then(res =>
            {
            const resultingArticles = res.data.response.docs.filter(object => object.headline.print_headline)
            const topFiveArticles = resultingArticles.splice(0,5).map(object => JSON.stringify(object))
            this.setState({"articles": topFiveArticles})
      })
      .catch(err => console.log(err));
    }
  };

  saveArticle = event =>
  {
    const targetArticle = JSON.parse(event.target.name),
          articleData =
          {
            "title": targetArticle.headline.main,
            "date": targetArticle.pub_date,
            "url": targetArticle.web_url
          }
          console.log(articleData);
    API.saveArticle(articleData)
      .then(res => {
        API.savedArticles().then(res => {
          this.setState({savedArticles: res.data});
          console.log(res.data)
        }).catch(err => console.log(err));
      })
  };

  deleteArticle = event =>
  {

    API.deleteArticle(event.target.name)
    .then(res =>
    {
          API.savedArticles().then(res =>
          {
            this.setState({savedArticles: res.data})
          }).catch(err => console.log(err));
    })
  };

  componentDidMount = () =>
  {
    API.savedArticles().then(res =>
      {
        this.setState({savedArticles: res.data})
        console.log(this.state.savedArticles);
      }).catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
            <form>
              <h1 style={{ textAlign: "center" }} >Search</h1>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (Required)"
              />
              <Input
                value={this.state.start}
                onChange={this.handleInputChange}
                name="start"
                placeholder="Start Year (Optional)"
              />
              <Input
                value={this.state.end}
                onChange={this.handleInputChange}
                name="end"
                placeholder="End Year (Optional)"
              />
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >Search Articles</FormBtn>
            </form>
          </Col>
          <Col size="md-1"></Col>
        </Row>
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
            <Articles>
              {this.state.articles.map((obj,i) => 
                <ArticleFrame key={i} style={{ float: "left" }} title={JSON.parse(obj).headline.main} url={JSON.parse(obj).web_url}>
                  <button type="button" style={{ float: "right" }} className="btn save" name={obj} onClick={this.saveArticle}>Save Article</button>
                </ArticleFrame>
              )}
            </Articles>
          </Col>
          <Col size="md-1"></Col>
        </Row>
        <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
            <Saved>
              
            </Saved>
          </Col>
        <Col size="md-1"></Col>
        </Row>  
      </Container>
    );
  }
}

export default Search;
