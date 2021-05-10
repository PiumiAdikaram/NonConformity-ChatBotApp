import React, { Component } from 'react'
import Stylesheet from './Stylesheet/style.js'
import {
    Text, 
    Stylesheet,
   /* View, 
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
    Dimensions,*/
  
} from 'react-native'
<Text>
<p className="test">hello</p>
</Text>
/*
import AWS from 'aws-sdk/dist/aws-sdk-react-native'
import { AutoScaling } from 'aws-sdk';
// Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'eu-central-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-central-1:44785595-57cf-4e3c-8b7b-ad75b8fae382',
});

let lexRunTime = new AWS.LexRuntime()
let lexUserId = 'mediumBot' + Date.now()

let createdAt= new Date()

const windowWidth = Dimensions.get("window").width;
export default class App extends Component {
    constructor(props) {
        super(props)
    this.state = {
        
            userInput: '',
            messages: [],
            inputEnabled: true,
            createdAt: new Date(),
            suggestedMessages: ["Hi","Tell me about ​non_conformity app","Type tag"],
            
            //suggestedMessages: ["Non_Conformity","Improvement_Suggestion","Critical_Notification"],
        };
      }
// Sends Text to the lex runtime
    handleTextSubmit() {
        let inputText = this.state.userInput.trim()
        if (inputText !== '')
            this.showRequest(inputText)
            
    }
// Populates screen with user inputted message
    showRequest(inputText) {
        // Add text input to messages in state
        let oldMessages = Object.assign([], this.state.messages)
        oldMessages.push({from: 'user', msg: inputText})
        this.setState({
            messages: oldMessages,
            userInput: '',
            inputEnabled: false,
            createdAt: new Date(),
            })
        this.sendToLex(inputText)
            
    }
// Responsible for sending message to lex
    sendToLex(message) {
        let params = {
            botAlias: '$LATEST',
            botName: 'NonConformity',
            inputText: message,
            userId: lexUserId,
            //createdAt
        }
        lexRunTime.postText(params, (err, data) => {
            if(err) {
                // TODO SHOW ERROR ON MESSAGES
            }
            if (data) {
                this.showResponse(data)
            }
        })
    }
showResponse(lexResponse) {
    
    let msg = lexResponse.message;
    let responseCard = lexResponse.responseCard;
    let oldMessages = Object.assign([], this.state.messages);

    oldMessages.push({ from: "bot", msg, responseCard });
        this.setState({
            messages: oldMessages,
            inputEnabled: true ,
                  })
    }
renderTextItem(item) {
        let style,
            responseStyle
        if (item.from === 'bot') {
            style = styles.botMessages
            responseStyle = styles.responseContainer
        } else {
            style = styles.userMessages
            responseStyle = {}
        }
        return (
          
          
            <View style={responseStyle}>

                <Text style={style}>{item.msg}</Text>
                {item.responseCard &&
          item.responseCard.genericAttachments.map((attachment, index) => {
            return (
              
              <View style={styles.responseCard} key={index}>
                <Image
                  style={styles.reponseCardImage}
                  source={{
                    uri: attachment.imageUrl,
                  }}
                />
                {attachment.buttons.map(
                  (button, index) => {
                    return (
                      <TouchableOpacity
                        style={styles.responseCardButton}
                        key={index}
                        onPress={() => this.showRequest(button.value)}
                      >
                        <Text
                          style={styles.suggestionText}
                            >{` ${button.text} `}</Text>
                      
                      </TouchableOpacity>
                    
                    );
                  }
                )}
              </View>
            );
          })}
            </View>
        )
    }
render(){
   
        return(
          createdAt= new Date(),
            <View style={styles.container}>
                <View style={styles.messages}>
                <Text className="datestatus">{` ${createdAt} `} </Text>
                    <FlatList 
                   
                        data={this.state.messages}
                        renderItem={({ item}) =>    this.renderTextItem(item)}
                        keyExtractor={(item, index) => index}
                        extraData={this.state.messages}
                                               
                    />
                       <FlatList 
                        renderTextItem={({ createdAt }) =>    this.renderTextItem(createdAt)}                  
                      />           
                </View>
                           
                <Image style={styles.logo}
                    source={{uri: 'https://storage.googleapis.com/media.landbot.io/181535/channels/FU52GH186ET4L1YEH3W43WEOFXS8AFNS.png'}}
                />
                    
                <View style={styles.suggestionWrapper}>
          {this.state.suggestedMessages.map((message, index) => {
            return (
              
              <TouchableOpacity
                style={styles.suggestion}
                key={index}
                onPress={() => this.showRequest(message)}
              >
                <Text style={styles.suggestionText}>{` ${message} `} </Text>
              </TouchableOpacity>
              
            );
          })}
        </View>
        <View style={styles.inputContainer}> 
            <TextInput
            onChangeText={(text) => this.setState({ 
              userInput: text , 
            })}
            value={this.state.userInput}
            style={styles.textInput}
            editable={this.state.inputEnabled}
            placeholder={"Reply to non conformity bot!"}
            autoFocus={true}
            onSubmitEditing={this.handleTextSubmit.bind(this)}
            
          />
          
        </View>
      </View>
    );
  }
}*/