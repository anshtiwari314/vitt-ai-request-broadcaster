//const data = require('./base64.json')
//console.log(data)

let contentArr = ["Hello,<br/><br/>Welcome to the interview! I’m Recruito, your interviewer today. I’m excited to learn more about your skills and experiences.<br/><br/>Before we begin, I’d like to share a few guidelines to ensure the interview runs smoothly:<br/><br/>Please make sure you’re in a quiet and distraction-free environment for the best experience.<br/><br/>When answering a question, please provide your response in one go, without long pauses. If I notice a significant gap during your answer, I may assume you’ve finished and move on to the next question.<br/><br/>Feel free to take a deep breath and gather your thoughts before responding to each question. Let’s get started!"]
let obj = {
   'color': '#7D11E9',
   'iconColor': 'blue',
   'content': contentArr,
   'sessionid': 'anuj',
   'similarity_query': 'Hello,<br/><br/>Welcome to the interview! I’m Recruito, your interviewer today. I’m excited to learn more about your skills and experiences.<br/><br/>Before we begin, I’d like to share a few guidelines to ensure the interview runs smoothly:<br/><br/>Please make sure you’re in a quiet and distraction-free environment for the best experience.<br/><br/>When answering a question, please provide your response in one go, without long pauses. If I notice a significant gap during your answer, I may assume you’ve finished and move on to the next question.<br/><br/>Feel free to take a deep breath and gather your thoughts before responding to each question. Let’s get started!',
   'type': 'cues',
   // 'audio_url': 'https://storage.googleapis.com/ai-recruiter-vitt/preformatted-audios/generic/welcome.mp3',
   'audio_base64': '',
   // 'audio_url':null
   "audiofiletimestamp":"2024-12-12 08:19:50.570737",
    //"content":['A mutual fund pools investment from multiple inves…. <br/><br/> Shares <br/><br/>3. <br/><br/> Bonds'],

    "initquery":"mutual fund tell me about mutual fund",
    "match_score":"0.10251588",
    "matched_query":"can you explain what a mutual fund be",
    "raw_modded_query":"mutual fund tell me about mutual fund",
    "similarity_query": "Definition of mutual fund"

}

let serverUrl = 'https://vitt-ai-request-broadcaster-production.up.railway.app/sendData'
let localServerUrl = 'http://localhost:5000'

fetch(localServerUrl, {
   method: 'POST',
   headers: {
      'Accept': 'application.json',
      'Content-Type': 'application/json'
   },
   body: JSON.stringify(obj)
}).then(res => res.json())
   .then(result => console.log(result.toString()))