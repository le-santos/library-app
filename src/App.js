import React, { Component } from "react";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import MainArea from "./Components/MainArea";
import LibraryList from "./Components/LibraryList";
import AddItemForm from "./Components/AddItemForm";
import ButtonAdd from "./Components/ButtonAdd";

class App extends Component {
  state = {
    libraryList: [],
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

    const shouldRenderLibraryList =
      this.state.libraryList.length === 0 ? (
        <p style={{ margin: "1.2em" }}>
          List is empty. Create your first entry.
        </p>
      ) : (
        <LibraryList
          libraryList={this.state.libraryList}
          removeLibraryItem={this.removeLibraryItem}
        />
      );

    return (
      <div className="App">
        <Header>
          <h1>My Sheet Music Library</h1>
        </Header>
        <SideNav click={this.toggleFormVisibility} childColor={"#0c5460"} />
        <MainArea>
          <h2 style={{ margin: "1em" }}>Library List</h2>
          {shouldRenderLibraryList}
          <ButtonAdd
            name={"+"}
            color={"#0C5460"}
            hoverColor={"#f8f8f8"}
            clicked={this.toggleFormVisibility}
          />
        </MainArea>
        {mainForm}
      </div>
    );
  }
}

export default App;
