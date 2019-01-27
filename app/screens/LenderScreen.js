
import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TextInput, ListView } from 'react-native';
import { Header } from '../components/common';

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class ToDoScreen extends Component {

  constructor(props) {
    super(props);
    //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([]),
      items: []
    };
  }

  addTodo() {
    if (!!this.state.name && this.state.time) {
      var newItem = {name: this.state.name, time: this.state.time};
      this.state.items.push(newItem);
      this.setState({
        dataSource: ds.cloneWithRows(this.state.items),
        name: undefined,
        time: undefined
      });
    }
  }

  deleteRow(rowData) {
    for (var i = this.state.items.length - 1; i >= 0; i--) {
      if (this.state.items[i] === rowData) {
        this.state.items.splice(i, 1);
        break;
      }
    }
    this.setState({
      dataSource: ds.cloneWithRows(this.state.items)
    });
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        underlayColor='#dddddd'
        onPress={() => this.deleteRow(rowData)}
      >
        <View
          style={{
            height: 45,
            borderBottomColor: '#ededed',
            borderBottomWidth: 1,
            paddingLeft: 10,
            paddingTop: 10
          }}
        >
          <Text style={{ fontSize: 16 }}>
            {`${rowData.name}-${rowData.time}`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Header headerText="Bike-Me" />
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ name: text })}
            value={this.state.name}
            placeholder='שם'
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ time: text })}
            value={this.state.time}
            placeholder='שעות השאלה'
            keyboardType='numeric'
          />

          <TouchableHighlight
            style={styles.button}
            onPress={() => this.addTodo()}
            underlayColor='#dddddd'
          >
            <Text style={styles.btnText}>הוסף</Text>
          </TouchableHighlight>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
          enableEmptySections={true}
        />
        <View style={{ flex: 1 }}>
          <View style={styles.footer}>
            <Text style={{ fontSize: 16, color: 'red' }}>הקלק על שורה כדי למחוק</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  appContainer: {
    flex: 1
  },
  inputcontainer: {
    marginTop: 5,
    padding: 10,
    height: 150,
    flexDirection: 'column'
  },
  btnText: {
    fontSize: 18,
    color: 'steelblue',
    marginTop: 6,
    marginRight: 5,
    marginLeft: 'auto'
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    padding: 12,
    height: 44
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  todoText: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    alignItems: 'center'
  }
};
