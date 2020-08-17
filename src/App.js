import React, { Component } from "react";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import MainArea from "./Components/MainArea";
import LibraryList from "./Components/LibraryList";
import AddItemForm from "./Components/AddItemForm";

class App extends Component {
  state = {
    libraryList: [
      {
        title: "Piece title",
        composer: "Composer name",
        style: "Music Style",
        id: "00000",
      },
    ],
    formFields: {
      title: "",
      composer: "",
      style: "",
    },
    styleTypes: [
      null,
      "Renaissance",
      "Baroque",
      "Romantic",
      "Modern",
      "Brasileira",
      "Popular",
      "None",
    ],
    isFormVisible: false,
  };

  NewSheetMusic = (title, composer, style) => {
    return {
      title,
      composer,
      style,
      status: "",
      id: (Math.random().toFixed(6) * 1000000).toString(),
    };
  };

  handleInputChange = (event) => {
    const value = event.target.value,
      fields = { ...this.state.formFields },
      fieldType = event.target.id.toLowerCase();

    fields[fieldType] = value;
    this.setState({ formFields: fields });
  };

  toggleFormVisibility = () => {
    this.setState({ isFormVisible: !this.state.isFormVisible });
  };

  resetFormFields = () => {
    const clearedFields = {
      title: "",
      composer: "",
      style: "",
    };

    this.setState({ formFields: clearedFields });
    this.toggleFormVisibility();
  };

  removeLibraryItem = (event) => {
    if (!window.confirm("Delete library item?")) return;

    const listItemId = event.target.id,
      listCopy = [...this.state.libraryList],
      itemIndex = listCopy.findIndex((item) => item.id === listItemId);

    listCopy.splice(itemIndex, 1);
    this.setState({ libraryList: [...listCopy] });
  };

  submitFormFields = (event) => {
    event.preventDefault();

    if (
      this.state.formFields.title === "" ||
      this.state.formFields.composer === "" ||
      this.state.formFields.style === ""
    )
      return;

    const newItem = this.NewSheetMusic(
      this.state.formFields.title,
      this.state.formFields.composer,
      this.state.formFields.style
    );

    const listCopy = [...this.state.libraryList];
    listCopy.push(newItem);

    this.setState({ libraryList: [...listCopy] });
    this.resetFormFields();
    this.toggleFormVisibility();
  };

  render() {
    const mainForm = this.state.isFormVisible && (
      <AddItemForm
        visible={this.state.isFormVisible}
        textInputs={["Title", "Composer"]}
        textValues={[
          this.state.formFields.title,
          this.state.formFields.composer,
        ]}
        selectLabel={"Style"}
        selectInput={this.state.styleTypes}
        selectValue={this.state.formFields.style}
        changed={this.handleInputChange}
        clickSubmit={this.submitFormFields}
        clickCancel={this.resetFormFields}
      />
    );

    return (
      <div className="App">
        <Header>
          <h1>My Sheet Music Library</h1>
        </Header>
        <SideNav click={this.toggleFormVisibility} childColor={"#008cba"} />
        <MainArea>
          <h2 style={{ margin: "1em" }}>Library List</h2>
          <LibraryList
            libraryList={this.state.libraryList}
            removeLibraryItem={this.removeLibraryItem}
          />
        </MainArea>
        {mainForm}
      </div>
    );
  }
}

export default App;
