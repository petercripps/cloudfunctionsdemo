# IBM Cloud Functions Demo
1. Give brief overview of serverless using the appropriate pages from the presentation.
2. Explain that IBM Functions built on OpenWhisk is an open platform that allows FaaS on Bluemix, locally or any Cloud platform where you can deploy the OpenWhisk runtime.
3. The demo has four prepared functions/actions written in JavaScript to show how: A lat/long can be obtained using a location name using Google Maps API (`location-to-latlong.js`); A weather forecast for a provided lat/long can be obtained using the IBM Weather service (`forecast-from-latlong.js`); The output from the weather forecast action can be changed to make it acceptable as input into the Watson translate service (`prep-translate-input.js`); The weather forecast can be translated into e.g. Spanish (`watson-translator.js`).
4. To demo this you need to have deployed the Watson Translator and Weather service to you instance of IBM Cloud.
5. The idea is to show how these functions operate individually as well as together in a sequence. Prep the environment by deploying the Watson Translate and Weather service and uploading the prep-translate-input and watson-translator actions. The other two functions will be uploaded (and invoked initially) from the BX/WSK command line.
6. The command lines are all scripted in the file command-line.txt, change your own username, org, space etc.
7. From a terminal make sure you are logged into the instance of Bluemix you’ll be using as well as the right org/space.
8. Create a new action for location-to-latlong: bx wsk action create location-to-latlong location-to-latlong.js.
9. Invoke the action location-to-latlong: bx wsk action invoke location-to-latlong -b -r -p address "London".
10. If you have time switch into Bluemix, go to Functions and then Manage and show how the action is now there and can be invoked in the same way from Bluemix.
11. Do the same thing with forecast-from-latlong however note you’ll need to include the username and password for your Weather instance on lines 15/16.
12. Once you’ve demo’d separately and if there is time build a sequence in Bluemix in the order: location-to-latlong-> forecast-from-latlong-> prep-translate-input-> watson-translator
13. Again to use the translate service you’ll need to add the username/password at line 11 of the prep-translate-input.js file. This will ensure they get passed in as parameters to the translate function.
14. Once you’ve linked the actions together invoke from the Bluemix window, use a location and pass in as JSON e.g. {“address”: “Sydney”} and the sequence should give the weather in Sydney (in Spanish).
15. Finish by showing the monitoring page showing invocations of services and discuss timings and fact you only pay for what is used.
