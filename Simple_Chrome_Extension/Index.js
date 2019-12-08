let fs = require('fs');
let readline = require('readline');
let {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

//let mailLabel = document.getElementById("mail");
let mailLabel = document.createElement("div");
let htmlContent = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Results</title><body>';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Gmail API.
    authorize(JSON.parse(content), listLabels);
});


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });

    fs.writeFile("listMail.html", htmlContent, (error) => { console.log("Mission failed, we'll get em next time.") });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLabels(auth) {
    let mail = document.createElement("div");
    mail.className="mail";
    let Label = document.createElement("div");
    Label.className="Label";

    //htmlContent.concat('<h1></h1>');
    //var div = document.getElementById("whatever");

    const gmail = google.gmail({version: 'v1', auth});
    gmail.users.labels.list({
        userId: 'me',
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const labels = res.data.labels;
        if (labels.length) {
            htmlContent.concat('<h1>Labels:</h1>');
            //console.log('Labels:');
            labels.forEach((label) => {
                htmlContent.concat("<div class='labels'>" + `- ${label.name}` + "</div>");
                //console.log(`- ${label.name}`);
            });
        } else {
            console.log('No labels found.');
        }
        htmlContent.concat('</body></html>')
    });
}

/*function myFunction() {
    fs.readFile('credentials.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Gmail API.
        authorize(JSON.parse(content), listLabels);
    });
}*/

/*
 Displays a new message.
 @param {String} user
 @param {String} content

function displaymessage(user,content){
    var message=document.createElement("div");
    message.className="message";

    var uname=document.createElement("div");
    uname.className="username";
    uname.textContent=user;
    message.appendChild(uname);

    var cont=document.createElement("div");
    cont.className="message-content";
    cont.textContent=content;
    message.appendChild(cont);

    var chatMessages = id("chat-messages");

    if(chatMessages.scrollTop >= chatMessages.scrollHeight-500){
        var scrolled=true;
    }

    chatMessages.appendChild(message);

    if(scrolled){
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
 */