import React, { Component } from "react";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import MainArea from "./Components/MainArea";
import LibraryList from "./Components/LibraryList";
import AddItemForm from "./Components/AddItemForm";
import ButtonAdd from "./Components/ButtonAdd";
import ListHeader from "./Components/ListHeader";
import { nanoid } from "nanoid";

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
    listOrder: "",
  };

  NewSheetMusic = (title, composer, style) => {
    return {
      title,
      composer,
      style,
      status: "",
      id: nanoid(12),
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

    if (Object.values(this.state.formFields).includes("")) return;

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

  sortList = (list, prop) => {
    list.sort((a, b) => {
      let itemA = a[prop].toUpperCase();
      let itemB = b[prop].toUpperCase();

      if (itemA < itemB) {
        return -1;
      } else if (itemA > itemB) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  handleListOrder = (event) => {
    let value = event.target.value;

    if (this.state.libraryList.length === 0 || value === "") {
      return;
    }

    const listCopy = [...this.state.libraryList];
    this.sortList(listCopy, value);
    this.setState({ libraryList: [...listCopy] });
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
          <ListHeader
            orderOptions={["", ...Object.keys(this.state.formFields)]}
            orderChanged={this.handleListOrder}
          />
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
