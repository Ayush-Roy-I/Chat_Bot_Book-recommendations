# Chat_Bot_Book-recommendations
The chatbot is for recommending book based on genre selected by the user


In this project I use IBM cloud services like IBM Watson assistant for creating our chatbot. By configure all the setups I are created the chatbot by keeping all the requirements and diverse genre.

Tools Used:-

🔹 IBM Watson Assistant 
Main platform for building and managing the conversational flow using intents, entities, and dialog nodes.
🔹 IBM Cloud platform to host Watson services and manage deployments.
🔹 HTML/CSS/JavaScriptUsed to embed the chatbot into a website or web application.
🔹 IBM Cloud Functions (Optional)Serverless functions to add custom logic or third-party API calls.
🔹Datasets of Different genre of BooksDifferent types of genres were taken for training purposes

Implementations:

->Define Use Case and Scope
Determine what type of books you will recommend (e.g., fiction, academic, kids' books).
Choose recommendation criteria: genre.

->Set Up IBM Watson Assistant
Create a Watson Assistant instance on IBM Cloud.
Create a new Assistant and attach a Dialog Skill.

->Design Intents and Entities:
Intents (user goals): 
	#Greeting: "Hello", "Hi there”
	#genre: Mystery,Novels,Fantasy etc.
Entities :
	@genre: Mystery,Romance,Adventure,Horror etc.

->Build Dialog Flow
Use dialog nodes to create conversation paths:	
	Greet user → Ask for preferences → Recommend books
	Suggest random books of that preference.
->Test the Chatbot
Use the “Try it out” feature in Watson Assistant to simulate real conversations.
Fine-tune intents, responses, and logic based on test interactions.

->Deploy the Chatbot
Web Chat Integration:
Generate embed code from Watson Assistant → Paste it into your website.
Optional Channel Deployment:
Deploy to Slack, Facebook Messenger, or WhatsApp using integration options or IBM Cloud Functions.


-?Monitor and Improve
Use Watson Assistant Analytics to monitor:
User satisfaction
Intent match rate
Drop-offs in conversation
Update intents, training data, and dialog as needed for better performance.
