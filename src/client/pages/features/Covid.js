import React, { Component, useState } from "react";
import Axios from "axios";
import {Recorder} from 'react-voice-recorder';
import 'react-voice-recorder/dist/index.css';

class Covid extends Component  {

  constructor() {
    super();
    this.state = {
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      }
    }
  }

	getResults = () => {
		const formData = new FormData();
		formData.append("images", files[files.length - 1]);
		// Axios.post(
		// 	`https://eureka-api-radioactive11.herokuapp.com/pneumonia`,
		// 	formData
		// )
		// 	.then((res) => {
		// 		console.log(res.data, "ok");
		// 		setResult(res.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	};

  handleAudioStop = (data) => {
      console.log(data)
      this.setState({ audioDetails: data });
  }

  handleAudioUpload = (file) => {
      var newfile = this.blobToFile(file, 'Covid_audio_sample.mp3');
      // var newfile = new File([file], "Covid_audio_sample.mp3", {lastModified: 1534584790000});
      console.log(newfile);
  }

  handleRest = () => {
      const reset = {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      };
      this.setState({ audioDetails: reset });
    }

  blobToFile = (theBlob, fileName) => {
      //A Blob() is almost a File() - it's just missing the two properties below which we will add
      theBlob.lastModifiedDate = new Date();
      theBlob.name = fileName;
      return theBlob;
  }

  render() {
    return (
  		<div className="Pneumonia">
  			<div className="container">
  				<div>
  					<h1>Covid Prediction</h1>
  					<p className="content">
  						Prediction of Covid19 from cough audio of the patient.
  					</p>
  				</div>

          <Recorder
            record={true}
            title={"New recording"}
            audioURL={this.state.audioDetails.url}
            showUIAudio
            handleAudioStop={data => this.handleAudioStop(data)}
            handleAudioUpload={data => this.handleAudioUpload(data)}
            handleRest={() => this.handleRest()}
          />

  				<button className="primary" onClick={() => getResults()}>
  					Get results
  				</button>
  			</div>
  		</div>
  	);
  }

};

export default Covid;
