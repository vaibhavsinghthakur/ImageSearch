import React from "react";
import SearchBar from "./SearchBar";
import unplashImages from "../unplashImages";
import ImagesList from "./ImagesList";
import "./App.css"
class App extends React.Component {
  state = { images: [] };
  handleSubmit = async (term) => {
    const response = await unplashImages.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container app"  style={{ marginTop: "20px" }}>
        <h1 className="h11">Search For Images</h1>
        <SearchBar handleSubmit={this.handleSubmit} />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}
//Access key==7THW1Zlckt5L8TFL6tRlALTbNLeerqfdPAAGw8c6fgw
//Secret Key==JOD56aslT9RMyQRPpBkrcaSnyxXJm5DLglfjQymG36Q
/**/
export default App;
