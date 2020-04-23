import React from "react";
// import Cards from './components/Cards/Cards'
// import Charts from './components/Charts/Charts'
// import CountryPicker from './components/CountryPicker/CountryPicker'
import { Navbar, Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./Api";
import coronaImage from "./images/image.png";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.body}>
        <Navbar />
        <div className={styles.container}>
          <img className={styles.image} src={coronaImage} alt="covid imge" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
        <Charts data={data} country={country} />
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default App;
