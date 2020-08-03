import React, { Component } from "react";
import "./App.css";
import NewItemForm from "./Components/NewItemForm";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import MainArea from "./Components/MainArea";
import LibraryItem from "./Components/LibraryItem";
import Button from "./Components/Button";
import InputText from "./Components/InputText";
import InputSelect from "./Components/InputSelect";

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
    },
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
      fieldType = event.target.id;

    fields[fieldType] = value;
    this.setState({ formFields: fields });
  };

  toggleFormVisibility = () => {
    console.log("hi");
    this.setState({ isFormVisible: !this.state.isFormVisible });
  };

  resetFormFields = () => {
    const clearedFields = {
      title: "",
      composer: "",
      style: "",
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
    };

    this.setState({ formFields: clearedFields });
    this.toggleFormVisibility();
  };

  submitFormFields = (e) => {
    e.preventDefault();

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
    console.log(this.state.libraryList);
    this.resetFormFields();
    this.toggleFormVisibility();
  };

  render() {
    const LibraryListItems = this.state.libraryList.map((item) => (
      <LibraryItem
        title={item.title}
        composer={item.composer}
        style={item.style}
        key={item.id}
        childColor={"#dc3545"}
      />
    ));

    return (
      <div className="App">
        <Header>
          <h1>My Sheet Music Library</h1>
        </Header>
        <SideNav click={this.toggleFormVisibility} childColor={"#008cba"} />
        <MainArea>
          <h2>Library List</h2>
          {LibraryListItems}
        </MainArea>
        <NewItemForm visible={this.state.isFormVisible}>
          <InputText
            value={this.state.formFields.title}
            id={"title"}
            changed={this.handleInputChange}
            text="Title"
          />
          <InputText
            value={this.state.formFields.composer}
            changed={this.handleInputChange}
            id={"composer"}
            text="Composer"
          />
          <InputSelect
            value={this.state.formFields.style}
            changed={this.handleInputChange}
            id={"style"}
            text="Style"
            options={this.state.formFields.styleTypes}
          />
          <Button
            name={"Add music"}
            clicked={this.submitFormFields}
            color={"#008cba"}
          />
          <Button
            name={"Cancel"}
            type={"reset"}
            color={"#dc3545"}
            clicked={this.resetFormFields}
          />
        </NewItemForm>
      </div>
    );
  }
}

export default App;
