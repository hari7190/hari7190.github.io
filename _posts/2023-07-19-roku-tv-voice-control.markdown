---
layout: post
title:  "Voice Control For TV"
date:   2023-07-14 00:09:57 -0400
categories: api
---

[![An old rock in the desert](https://www.commitstrip.com/wp-content/uploads/2020/04/Strip-Covid19-5-650-finalenglish-1.jpg "Shiprock, New Mexico by Beau Rogers")]  

Check out [Commit Strip](https://www.commitstrip.com/en/2020/04/16/a-story-of-duplicate-code/). They're awesome.  
&nbsp;

**Overview**  
This is a super simple implementation using Google speech APIs and a Roku TV. You can use any language. I am using Python today. My objective was to control my Roku TV. I actually tried capturing network traffic from my TV Remote App to TV to find the commands. An easier and better way to do is reading Roku documentation !! They explained it pretty well there.  

**Environment**    
- Create a environment of Python 3.6 with Anaconda.  
- Brew install Portaudio. (Security aspects TBD)  
- Then Pip install pyaudio.  
- Get speech_recognition and requests lib (if you are making requests that way)  

**Logic**  
 - Setup variables for sampling rate, chunk size and mic name. I used following values.  
    Sampling rate : 44100  
    Chunk Size : 3096  
    I was using built in mic so name was 'Built-in Microphone'.  
    You can find the name using either : system_profiler SPAudioDataType or
system_profiler SPUSBDataType to find usb audio devices like dedicated mics.  
- Put out a console message indicating program is ready to listen.  
- Sample the input and use speech recognition library to reach out to Google to get it processed and convert that to text.  
- Pick up the resulting text and look for what you want in there. I looked for if starting with 'roku' and ending with one of the commands like 'play'.  
- After this its pretty much basic if-else logic and logging. Then use requests library to make a http post call to TV according to text. It will be like  
`$ curl -d '' http://192.168.XXX.X:8060/keypress/XXXXX  `

**Code**  
[GitHub Repo here. (Quick dirty code. Clean up TBD.)](https://github.com/hari7190/VoiceControlledRokuTv)

**Path forward**  
Deploy this into a RaspberryPi.
Make it offline. Now it uses Google Speech API. Since there are only a few commands, it should be easy to setup a model and teach it. Deploy that in one of the home servers for Pi to talk to.