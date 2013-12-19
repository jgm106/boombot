/*
 Copyright (c) 2012-2013 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
TERMS OF REPRODUCTION USE
 
Failure to follow these terms will result in me getting very angry at you
and having your software tweaked or removed if possible. Either way, you're
still an idiot for not following such a basic rule.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 
 
 * NOTE:  PLEASE CONTACT DJ-NEON FOR THIS SCRIPT (DO NOT CHANGE ANYTHING ON THIS SCRIPT OR USE THIS SCRIPT WHICH
 * WAS WRITTEN BY IT'S RIGHTFUL OWNER: DJ NOEN)
 *
 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 * @Member:    RogieRog (Owner. of The Country Club)
 *
 */
 
var Countrybot = {};
var total = API.getDJ().djPoints + API.getDJ().listenerPoints + API.getDJ().curatorPoints;
var ruleSkip = {};
Countrybot.misc = {};
Countrybot.settings = {};
Countrybot.moderators = {};
Countrybot.filters = {};
botMethods = {};
Countrybot.pubVars = {};
 
toSave = {};
toSave.settings = Countrybot.settings;
toSave.moderators = Countrybot.moderators;
 
Countrybot.misc.version = "banjo2.0";
Countrybot.misc.origin = "banjo2.0 bot";
Countrybot.misc.changelog = "Added a secondary check for history";
Countrybot.misc.ready = true;
Countrybot.misc.lockSkipping = false;
Countrybot.misc.lockSkipped = "0";
Countrybot.misc.tacos = new Array();
 
 
joined = new Date().getTime();
 
cancel = false;
 
Countrybot.filters.swearWords = new Array();
Countrybot.filters.commandWords = new Array();
Countrybot.filters.racistWords = new Array();
Countrybot.filters.beggerWords = new Array();
 
Countrybot.settings.maxLength = 10; 
Countrybot.settings.cooldown = 10; 
Countrybot.settings.staffMeansAccess = true;
Countrybot.settings.historyFilter = true;
Countrybot.settings.swearFilter = true;
Countrybot.settings.commandFilter = true;
Countrybot.settings.racismFilter = true;
Countrybot.settings.beggerFilter = true;
Countrybot.settings.interactive = true;
Countrybot.settings.ruleSkip = true;
Countrybot.settings.removedFilter = true;


Countrybot.admins = 
//       [NEON]                      [Rogie]                    [RedNeck]                   [minellium]               [Jovi]
//["50aeaeb6c3b97a2cb4c25bd2","50b3dd0d3e083e26dbef9319","51c49679877b9263732212c7","5293525e96fba53bee4179e5","50b3e11a877b9228b4cf2527"];
["5293525e96fba53bee4179e5"];
 
Countrybot.filters.swearWords = ["slut","mofo","penis","penus","fuck","shit","bitch","cunt","twat","faggot","queer","dumb ass","pussy","dick","cocksucker","asshole","vagina","tit","mangina","tits","cock","jerk","puta","puto","cum","sperm","ass-hat","ass-jabber","assbanger","assfuck","assfucker","assnigger","butt plug","bollox","blowJob","Blow job","bampot","cameltoe","chode","clitfuck","cunt","dildo","douche","doochbag","dike","dyke","fatass","fat ass","fuckass","fuckbag","fuckboy","fuckbrain","gay","gaylord","handjob","hoe","Jizz","jerk off","kunt","lesbian","lesbo","lezzie","minge","munging","nut sack","nutsack","queer","queef","rimjob","scrote","schlong","titfuck","twat","unclefucker","va-j-j","vajayjay","vjayjay","wankjob","whore"];
 
Countrybot.filters.commandWords = [".say",".catfact",".dogfact",".banjo",".songlink",".commands",".bansong 1",".down",".join",".woot",".meh",".status",".tcf",".cf",".rules",".version",".test",".cancel",".test",".source"];
 
Countrybot.filters.racistWords = ["nigger","kike","spick","porchmonkey","camel jockey","towelhead","towel head","chink","gook","porch monkey","Coolie","nigga","nigguh","black shit","black monkey","you ape","you monkey","you gorilla","black ass","assnigger","honkey","White bread","white ass","jungle bunny","niglet","nigaboo","paki","ruski","sand nigger","sandnigger","wetback","wet back"];
 
Countrybot.filters.beggerWords = ["fanme","fan me","fan4fan","fan 4 fan","fan pls","fans please","need fan","more fan","fan back","give me fans","gimme fans"];
 
//Fun commands for misc below.
 
Countrybot.misc.tacos = ["blunt","kush","Chemo","Locoweed","marijuana","Ganja"];
 
Countrybot.misc.cookie = ["a chocolate chip cookie", "a sugar cookie", "an oatmeal raisin cookie", "a 'special' brownie", "an animal cracker", "a scooby snack", "a blueberry muffin", "a cupcake"];
 
Countrybot.misc.drink = [
" Gimme a beer!",
" Hic, to much Egg Nog",
" You got any more bourbon for the Egg Nog?",
" Very doubtful that I'll be walking tomorrow. Hic"];

Countrybot.misc.ball = [
" Very doubtful"];
 
Countrybot.misc.ht = ["My magic coins says: Tails", "My magic coin says: Heads"];
Countrybot.misc.roll = [
"You rolled A 1. Bummer :(",
"You rolled A 2.Bummer :(",
"You rolled A 3. Bummer :(",
"You rolled A 4. Awesome!",
"You rolled A 5. Awesome!",
"You rolled A 6. Awesome!"];
 
Countrybot.misc.catfact = [
"Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible."];
 
Countrybot.misc.dogfact = [
"Seeing eye dogs pee and poo on command so that their owners can clean up after them."];
 
Countrybot.misc.banjo = [
" you play a mean banjo",
" weeeeeee! weeeeeee! weeeeeee!",
" Explain this to me again. I didn't know somebody could shoot themself with their own arrow.",
"  Paddle Faster."];
 
 
Countrybot.pubVars.skipOnExceed;
Countrybot.pubVars.command = false;
 
Array.prototype.remove=function(){var c,f=arguments,d=f.length,e;while(d&&this.length){c=f[--d];while((e=this.indexOf(c))!==-1){this.splice(e,1)}}return this};
 
API.on(API.DJ_ADVANCE, djAdvanceEvent);
 
API.on(API.USER_JOIN, UserJoin);
function UserJoin(user)
{
API.sendChat("Welcome to The Country Club @"+ user.username +"!");
}
 
API.on(API.DJ_ADVANCE, DJ);
function DJ(obj) {
  if (obj == null) return;
  var str = "";
  var currentDJ = obj.dj;
  str += currentDJ.username;
  str += " Is now playing: " + obj.media.author + " - " + obj.media.title;
  API.sendChat(str);
}
 
API.on(API.VOTE_SKIP, SKIP);
function SKIP() {
API.sendChat("Sorry Cowboy don't play that shitty music again!");
}
 
API.on(API.CURATE_UPDATE, callback);
function callback(obj)
{
var media = API.getMedia();
API.sendChat(obj.user.username + " Added this song!");
}
 
function djAdvanceEvent(data){
    setTimeout(function(){ botMethods.djAdvanceEvent(data); }, 500);
}
 
botMethods.skip = function(){
    setTimeout(function(){
        if(!cancel) API.moderateForceSkip();
    }, 3500);
};
 
botMethods.load = function(){
    toSave = JSON.parse(localStorage.getItem("CountrybotSave"));
    Countrybot.settings = toSave.settings;
    ruleSkip = toSave.ruleSkip;
};
 
botMethods.save = function(){localStorage.setItem("CountrybotSave", JSON.stringify(toSave))};
 
botMethods.loadStorage = function(){
    if(localStorage.getItem("CountrybotSave") !== null){
        botMethods.load();
    }else{
        botMethods.save();
    }
};
 
botMethods.checkHistory = function(){
    currentlyPlaying = API.getMedia(), history = API.getHistory();
    caught = 0;
    for(var i = 0; i < history.length; i++){
        if(currentlyPlaying.cid === history[i].media.cid){
            caught++;
        }
    }
    caught--;
    return caught;
};
 
botMethods.getID = function(username){
    var users = API.getUsers();
    var result = "";
    for(var i = 0; i < users.length; i++){
        if(users[i].username === username){
            result = users[i].id;
            return result;
        }
    }
 
    return "notFound";
};
 
botMethods.cleanString = function(string){
    return string.replace(/&#39;/g, "'").replace(/&amp;/g, "&").replace(/&#34;/g, "\"").replace(/&#59;/g, ";").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};
 
botMethods.djAdvanceEvent = function(data){
    clearTimeout(Countrybot.pubVars.skipOnExceed);
    if(Countrybot.misc.lockSkipping){
        API.moderateAddDJ(Countrybot.misc.lockSkipped);
        Countrybot.misc.lockSkipped = "0";
        Countrybot.misc.lockSkipping = false;
        setTimeout(function(){ API.moderateRoomProps(false, true); }, 500);
    }
    var song = API.getMedia();
    if(botMethods.checkHistory() > 0 && Countrybot.settings.historyFilter){
        if(API.getUser().permission < 2){
            //API.sendChat("This song is in the history! You should make me a mod so that I could skip it!");
        }else if(API.getUser().permission > 1){
            //API.sendChat("@" + API.getDJ().username + ", playing songs that are in the history isn't allowed, please check next time! Skipping..");
            //API.moderateForceSkip();
        }else if(song.duration > Countrybot.settings.maxLength * 60){
            Countrybot.pubVars.skipOnExceed = setTimeout( function(){
                //API.sendChat("@"+ API.getDJ().username +" You have now played for as long as this room allows, time to let someone else have the booth!");
                //API.moderateForceSkip();
            }, Countrybot.settings.maxLength * 60000);
            API.sendChat("@"+ API.getDJ().username +" This song will be skipped " + Countrybot.settings.maxLength + " minutes from now because it exceeds the max song length.");
        }else{
            setTimeout(function(){
                if(botMethods.checkHistory() > 0 && Countrybot.settings.historyFilter){
                    //API.sendChat("@" + API.getDJ().username + ", playing songs that are in the history isn't allowed, please check next time! Skipping..");
                    //API.moderateForceSkip();
                };
            }, 1500);
        }
    }
};
 
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('_') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(Countrybot.misc.ready || Countrybot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1 || API.getStaff(data.fromID).permission > 2){
                switch(command[0].toLowerCase()){
 
                    case "votes":
                        if(API.getUser(fromID).permission < 2 || Countrybot.admins.indexOf(fromID) > -1){
                            API.sendChat("Users vote:  :+1: " + API.getRoomScore().positive + " | :purple_heart: " + API.getRoomScore().curates+" | :-1: " + API.getRoomScore().negative);
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
                    
                    case "facebook":
                    case "fb":
                        if(API.getUser(fromID).permission < 2 || Countrybot.admins.indexOf(fromID) > -1){
                            API.sendChat(data.from +" I Bet you're cute or handsome! Please join our facebook group here: http://goo.gl/6EeDZG");
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
               
                    case "djinfo":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            API.sendChat("Current dj is: "+ API.getDJ().username +". Points: "+ total +" | Fans: "+API.getDJ().fans+" | Curated: "+ API.getDJ().curatorPoints +".");
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "roominfo":
                        if(API.getUser(fromID).permission < 2 || Countrybot.admins.indexOf(fromID) > -1){
                            API.sendChat("Welcome to The Country Club! Get to meet our Host: "+ API.getHost().username +". We play mostly Country, Southern Rock, & Folk. Please don't forget to visit our facebook page: http://goo.gl/6EeDZG");
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "bot":
                        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1){
                            API.sendChat("You have something to say?? @"+ data.from);
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
                        
                    case "commands":
                        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1){
                           API.sendChat(".{command} mention is included");
                        setTimeout(function(){
                           API.sendChat("rules | theme | roominfo | roomhelp | whywoot | whymeh | wiki | link | facebook | define | songlink | download | props | votes | djinfo | bot | ping | marco | banjo | drink | 8ball | roll | hug | catfact | dogfact | flipcoin | props | whoami");
                        }, 650);
                        setTimeout(function(){
                           API.sendChat("test | join | leave | woot | meh | skip | tcf | trf | thf | tsf | tbf | version | lock | unlock | lockskip | save | changelog | cancel | source | status | cooldown | maxlength");
                        }, 1000);
                        Countrybot.misc.ready = false;
                        setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "whoami":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("Username: "+ data.from +" ID: "+ data.fromID);
                            API.sendChat("You're good enough, you're smart enough, and gosh darnit people like you!");
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "ping":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("@"+ data.from +" Pong!");
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "marco":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            API.sendChat("@"+ data.from +" POLO!");
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "rules":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Rules:  Have some fun. Leave the drama at the door. Keep it somewhat family friendly. Staff has final say.");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Rules:  Have some fun. Leave the drama at the door. Keep it somewhat family friendly. Staff has final say.");
                        }else{
                            API.sendChat("Rules: Have some fun. Leave the drama at the door. Keep it somewhat family friendly. Staff has final say.");
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "theme":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Themes: Country, Southern Rock, and Folk");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Theme: Country, Southern Rock, and Folk");
                        }else{
                            API.sendChat("Themes: Country, Southern Rock, and Folk");
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
               
                    case "whywoot":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }else{
                            API.sendChat("Plug gives you 1 point for wooting the current song if you don't like the song i suggest you remain neutral");
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "props":
                    case "bonus":
                        if(typeof command[1] == "undefined"){
                        API.sendChat("@"+ data.from +" just gave props to @"+ API.getDJ().username +" for playing a dope track!");
                        }
                        break;
 
                    case "whymeh":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }else{
                            API.sendChat("Reserve Mehs for songs that are a) extremely overplayed b) off genre c) absolutely god awful or d) troll songs. ");
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "roomhelp":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Welcome to the The Country Club! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+ "Welcome to the The Country Club! Create a playlist and populate it with songs from either YouTube or Soundcloud. Click the 'Join Waitlist' button and wait your turn to play music.");
                                setTimeout(function(){
                            API.sendChat("Ask a mod if you're unsure about your song choice.");
                         }, 650);
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "wiki":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@"+data.from+" https://en.wikipedia.org/wiki/Special:Random");
                        }else{
                            var r = data.message.substring(6).replace(g, "_");
                            $.getJSON("http://jsonp.appspot.com/?callback=?&url=" + escape("http://en.wikipedia.org/w/api.php?action=query&prop=links&format=json&titles="+r.replace(g,"_")),
                                function(wikiData){
                                    if (!wikiData || !wikiData.query || !wikiData.query.pages);
                                        return API.sendChat("@"+data.from+" http://en.wikipedia.org/wiki/"+r+" (NOT GUARANTEED TO BE CORRECT)");
                                    if (wikiData.query.pages[-1]) {
                                        API.sendChat("@"+data.from+" article not found");
                                    }else{
                                        for (var i in wikiData.query.pages)
                                            // note: the #... is just to make the url look nicer
                                            return API.sendChat("@"+data.from+" https://en.wikipedia.org/wiki/?curid="+i+"#"+escape(wikiData.query.pages[i].title) );
                                    }
                                }
                            );
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "link":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Put a link starting off from www.");
                        }else if(command[1].toLowerCase().indexOf("plug.dj") === -1 && command[1].toLowerCase().indexOf("bug.dj") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("http://"+command[1]);
                        }else{
                            API.sendChat("@"+ data.from +" What are you an idiot?");
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "define":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Define what?!");
                        }else if(command[1].toLowerCase().indexOf("xxx") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("@"+ data.from +" http://www.urbandictionary.com/define.php?term="+command[1]);
                        }else{
                            API.sendChat("@"+ data.from +" What are you an idiot?");
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "songlink":
                        if(API.getMedia().format == 1){
                            API.sendChat("@" + data.from + " " + "http://youtu.be/" + API.getMedia().cid);
                        }else{
                            var id = API.getMedia().cid;
                            SC.get('/tracks', { ids: id,}, function(tracks) {
                                API.sendChat("@"+data.from+" "+tracks[0].permalink_url);
                            });
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "download":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Download your song free here: http://www.vebsi.com/");
                        }else{
                            API.sendChat("Download your song free here: http://www.vebsi.com/");
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                }
            }
        }
    });
 
        API.on(API.CHAT, function(data){
        if(data.message.indexOf('_') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(Countrybot.misc.ready || Countrybot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
                switch(command[0].toLowerCase()){
 
                case "say":
                    if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            }else{
                            API.sendChat(command[1]);
                        }
                    }
                        break;
 
                    case "skip":
                    if(API.getUser(data.fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.moderateForceSkip()
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                    }
                        break;
 
                    case "unlock":
                        if(API.getUser(data.fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.moderateLockWaitList(false);
                        }
                    }
                        break;
               
                    case "lock":
                        if(API.getUser(data.fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.moderateLockWaitList(true);
                        }
                    }
                        break;
 
                    case "meh":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("Bummer, A meh has been requested!!");
                        setTimeout(function(){
                           document.getElementById("meh").click()
                        }, 650);
                        }else{
                           API.sendChat("This command requires bouncer +");
                        }
                    }
                        break;
 
                    case "woot":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("One woot coming up!");
                        setTimeout(function(){
                           document.getElementById("woot").click()
                        }, 650);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                    }
                        break;
                   
                    case "join":
                    case "stepup":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.djJoin();
                        }
                    }
                        break;
 
                    case "leave":
                    case "down":
                    case "dive":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                            API.djLeave();
                        }
                    }
                        break;
               
                    case 'cancel':
                        cancel = true;
                        API.sendChat('AutoSkip cancelled');
                        break;
 
                    case "lockskip":
                        if(API.getUser(data.fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(true);
                            API.moderateForceSkip();
                        setTimeout(function(){
                           API.moderateLockWaitList(false);
                        }, 650);
                        }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "test":
                        if(Countrybot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +" Test Successful");
                            }else{
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "source":
                        if(API.getUser(data.fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            API.sendChat("Howdy Staff "+ data.from +"! My source is located here: http://goo.gl/xarlwt");
                            }else{
                            API.sendChat("This command requires bouncer only!");
                        }
                        break;
 
                    case "historyfilter":
                    case "hf":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1) Countrybot.settings.historyFilter ? API.sendChat("History filter is enabled") : API.sendChat("History filter is disabled");
                        botMethods.save();
                        break;
 
                    case "swearfilter":
                    case "sf":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1) Countrybot.settings.swearFilter ? API.sendChat("Swearing filter is enabled") : API.sendChat("Swearing filter is disabled");
                        botMethods.save();
                        break;
 
                    case "commandfilter":
                    case "cf":
                        if(Countrybot.admins.indexOf(fromID) > -1) Countrybot.settings.commandFilter ? API.sendChat("Commands filter is enabled") : API.sendChat("Commands filter is disabled");
                        botMethods.save();
                        break;
 
                    case "racismfilter":
                    case "rf":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1) Countrybot.settings.racismFilter ? API.sendChat("Racism filter is enabled") : API.sendChat("Racism filter is disabled");
                        botMethods.save();
                        break;
 
                    case "beggerfilter":
                    case "bf":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1) Countrybot.settings.beggerFilter ? API.sendChat("Begger filter is enabled") : API.sendChat("Begger filter is disabled");
                        botMethods.save();
                        break;
 
                    case "tsf":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            if(Countrybot.settings.swearFilter){
                                Countrybot.settings.swearFilter = false;
                                API.sendChat("Bot will no longer filter swearing.");
                            }else{
                                Countrybot.settings.swearFilter = true;
                                API.sendChat("Bot will now filter swearing.");
                            }
                        }
                        botMethods.save();
                        break;
       
                    case "tcf":
                        if(API.getUser(data.fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            if(Countrybot.settings.commandFilter){
                                Countrybot.settings.commandFilter = false;
                                API.sendChat("Bot will no longer filter commands.");
                            }else{
                                Countrybot.settings.commandFilter = true;
                                API.sendChat("Bot will now filter commands.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "trf":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            if(Countrybot.settings.racismFilter){
                                Countrybot.settings.racismFilter = false;
                                API.sendChat("Bot will no longer filter racism.");
                            }else{
                                Countrybot.settings.racismFilter = true;
                                API.sendChat("Bot will now filter racism.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "tbf":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            if(Countrybot.settings.beggerFilter){
                                Countrybot.settings.beggerFilter = false;
                                API.sendChat("Bot will no longer filter fan begging.");
                            }else{
                                Countrybot.settings.beggerFilter = true;
                                API.sendChat("Bot will now filter fan begging.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "thf":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            if(Countrybot.settings.historyFilter){
                                Countrybot.settings.historyFilter = false;!
                                    API.sendChat("Bot will no longer skip songs that are in the room history.");
                            }else{
                                Countrybot.settings.historyFilter = true;
                                API.sendChat("Bot will now skip songs that are in the room history.");
                            }
                        }
                        botMethods.save();
                        break;
                 
                    case "version":
                        if(API.getUser(data.fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            API.sendChat("CountryBot version " + Countrybot.misc.version);
                            }else{
                                API.sendChat("This command requires Admins only!");
                            }
                        break;
 
                    case "origin":
                    case "author":
                    case "authors":
                    case "creator":
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                           API.sendChat(Countrybot.misc.origin);
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ mubBot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "status":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            var response = "";
                            var currentTime = new Date().getTime();
                            var minutes = Math.floor((currentTime - joined) / 60000);
                            var hours = 0;
                            while(minutes > 60){
                                minutes = minutes - 60;
                                hours++;
                            }
                            hours == 0 ? response = "Running for " + minutes + "m " : response = "Running for " + hours + "h " + minutes + "m";
                            response = response + " | Begger filter: "+Countrybot.settings.beggerFilter;
                            response = response + " | Swear filter: "+Countrybot.settings.swearFilter;
                            response = response + " | Command filter: "+Countrybot.settings.commandFilter;
                            response = response + " | Racism filter: "+Countrybot.settings.racismFilter;
                            response = response + " | History filter: "+Countrybot.settings.historyFilter;
                            response = response + " | MaxLength: " + Countrybot.settings.maxLength + "m";
                            response = response + " | Cooldown: " + Countrybot.settings.cooldown + "s";
                            response = response + " | BanSongs: "+ Countrybot.settings.ruleSkip;
                            response = response + " | Removed Video Filter: "+ Countrybot.settings.removedFilter;
                            API.sendChat(response);
                        }
                        break;
 
                    case "cooldown":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            if(typeof command[1] == "undefined"){
                                if(Countrybot.settings.cooldown != 0.0001){
                                    API.sendChat('Cooldown is '+Countrybot.settings.cooldown+' seconds');
                                }else{
                                    API.sendChat('Cooldown is disabled');
                                }
                            }else if(command[1] == "disable"){
                                Countrybot.settings.cooldown = 0.0001;
                                API.sendChat('Cooldown disabled');
                            }else{
                                Countrybot.settings.cooldown = command[1];
                                API.sendChat('New cooldown is '+Countrybot.settings.cooldown+' seconds');
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "maxlength":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            if(typeof command[1] == "undefined"){
                                if(Countrybot.settings.maxLength != 1e+50){
                                    API.sendChat('Maxlength is '+Countrybot.settings.maxLength+' minutes');
                                }else{
                                    API.sendChat('Maxlength is disabled');
                                }
                            }else if(command[1] == "disable"){
                                Countrybot.settings.maxLength = Infinity;
                                API.sendChat('Maxlength disabled');
                            }else{
                                Countrybot.settings.maxLength = command[1];
                                API.sendChat('New maxlength is '+Countrybot.settings.maxLength+' minutes');
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "interactive":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            Countrybot.settings.interactive ? API.sendChat("Bot is interactive.") : API.sendChat("Bot is not interactive.");
                        }
                        break;
 
                    case "toggleinteractive":
                    case "ti":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            if(Countrybot.settings.interactive){
                                Countrybot.settings.interactive = false;
                                API.sendChat("Bot will no longer interact.");
                            }else{
                                Countrybot.settings.interactive = true;
                                API.sendChat("Bot will now interact.");
                            }
                        }
                        botMethods.save();
                        break;
 
                    case "save":
                        if(Countrybot.admins.indexOf(fromID) > -1){
                            botMethods.save();
                            API.sendChat("Settings saved.");
                        }else{
                             API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                    case "stfu":
                        if(API.getUser(fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
                            Countrybot.settings.interactive = false;
                            API.sendChat("Yessir!");
                        }
                        botMethods.save();
                        break;
 
                    case "changelog":
                        if(Countrybot.admins.indexOf(fromID) > -1){
                            API.sendChat("New in version " + Countrybot.misc.version + " - " + Countrybot.misc.changelog)
                        }else{
                             API.sendChat("This command requires Admins only!");
                        }
                        break;
 
                }
            }
        }
    });
 
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('_rule ') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
        if(Countrybot.misc.ready || Countrybot.admins.indexOf(fromID) > -1 ||API.getUser(fromID).permission > 1){
                switch(command[1]){
                    case '1':
                        API.sendChat("Have some fun and Leave the drama at the door.");
                        break;
                    case '2':
                        API.sendChat("eep it somewhat family friendly.");
                        break;
                    case '3':
                        API.sendChat("Mods have final say.");
                        break;
                    default:
                        API.sendChat("Seems like you ain't from around here huh?!");
                        setTimeout(function(){
                        API.sendChat("Welp... Thats an Unknown Rule.");
                        }, 650);
                        break;
                }
            }
        }
    });
   
        API.on(API.CHAT, function(data){
        if(data.message.indexOf('_') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(Countrybot.misc.ready || Countrybot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1){
                switch(command[0].toLowerCase()){
 
                case "punish":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on @"+botMethods.cleanString(command[1])+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates @"+botMethods.cleanString(command[1])+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes @"+botMethods.cleanString(command[1])+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes @"+botMethods.cleanString(command[1])+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me pinches @"+botMethods.cleanString(command[1])+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("/me gives @"+botMethods.cleanString(command[1])+" a wet willy");
                                    break;
 
                                case 6:
                                    API.sendChat("/me Sets @"+botMethods.cleanString(command[1])+" hair on fire");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on @"+botMethods.cleanString(command[1])+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates @"+botMethods.cleanString(command[1])+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes @"+botMethods.cleanString(command[1])+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes @"+botMethods.cleanString(command[1])+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me pinches @"+botMethods.cleanString(command[1])+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("/me gives @"+botMethods.cleanString(command[1])+" a wet willy");
                                    break;
 
                                case 6:
                                    API.sendChat("/me Sets @"+botMethods.cleanString(command[1])+" hair on fire");
                                    break;
                            }
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
 
                case "roll":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomRoll = Math.floor(Math.random() * Countrybot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ Countrybot.misc.roll[randomRoll]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ Countrybot.misc.roll[randomRoll]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomRoll = Math.floor(Math.random() * Countrybot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ Countrybot.misc.roll[randomRoll]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ Countrybot.misc.roll[randomRoll]);
                                    break;
                           }
                        }
                        if(Countrybot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
               
 
                case "banjo":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomFortune = Math.floor(Math.random() * Countrybot.misc.banjo.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ Countrybot.misc.banjo[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ Countrybot.misc.banjo[randomFortune]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomFortune = Math.floor(Math.random() * Countrybot.misc.banjo.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ Countrybot.misc.banjo[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ Countrybot.misc.banjo[randomFortune]);
                                    break;
                           }
                        }
                        if(Countrybot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "drink":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomDrink = Math.floor(Math.random() * Countrybot.misc.drink.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.drink[randomDrink]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.drink[randomDrink]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomDrink = Math.floor(Math.random() * Countrybot.misc.drink.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.drink[randomDrink]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.drink[randomDrink]);
                                    break;
                           }
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "8ball":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomBall = Math.floor(Math.random() * Countrybot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.ball[randomBall]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomBall = Math.floor(Math.random() * Countrybot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.ball[randomBall]);
                                    break;
                           }
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "flipcoin":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomHt = Math.floor(Math.random() * Countrybot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(Countrybot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(Countrybot.misc.ht[randomHt]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomHt = Math.floor(Math.random() * Countrybot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(Countrybot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(Countrybot.misc.ht[randomHt]);
                                    break;
                           }
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
 
                    case "cookie":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCookie = Math.floor(Math.random() * Countrybot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + Countrybot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + Countrybot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 2:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + Countrybot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 3:
                                    API.sendChat("@" +crowd[randomUser].username+ ", @" + data.from + " has rewarded you with " + Countrybot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCookie = Math.floor(Math.random() * Countrybot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" +botMethods.cleanString(command[1])+ ", @" + data.from + " has rewarded you with " + Countrybot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 1:
                                    API.sendChat("@" +botMethods.cleanString(command[1])+ ", @" + data.from + " has rewarded you with " + Countrybot.misc.cookie[randomCookie] + ". Enjoy!");
                                    break;
                                case 2:
                                    API.sendChat("@" +botMethods.cleanString(command[1])+ ", @" + data.from + " has rewarded you with " + Countrybot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                                case 3:
                                    API.sendChat("@" +botMethods.cleanString(command[1])+ ", @" + data.from + " has rewarded you with " + Countrybot.misc.cookie[randomCookie]+ ". Enjoy!");
                                    break;
                            }
                        }
                        if(Countrybot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                      case "weed":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomTaco = Math.floor(Math.random() * Countrybot.misc.tacos.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + crowd[randomUser].username + ", take this " + Countrybot.misc.tacos[randomTaco] + ", you bum!");
                                    break;
                                case 1:
                                    API.sendChat("@" + crowd[randomUser].username + ", quickly! Smoke this " + Countrybot.misc.tacos[randomTaco] + " before I do!");
                                    break;
                                case 2:
                                    API.sendChat("One free " + Countrybot.misc.tacos[randomTaco] + " for you, @" + crowd[randomUser].username + ".");
                                    break;
                                case 3:
                                    API.sendChat("/me throws a " + Countrybot.misc.tacos[randomTaco] + " at @" + crowd[randomUser].username + "!");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomTaco = Math.floor(Math.random() * Countrybot.misc.tacos.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + botMethods.cleanString(command[1]) + ", take this " + Countrybot.misc.tacos[randomTaco] + ", you bum!");
                                    break;
                                case 1:
                                    API.sendChat("@" + botMethods.cleanString(command[1]) + ", quickly! Smoke this " + Countrybot.misc.tacos[randomTaco] + " before I do!");
                                    break;
                                case 2:
                                    API.sendChat("One free " + Countrybot.misc.tacos[randomTaco] + " for you, @" + botMethods.cleanString(command[1]) + ".");
                                    break;
                                case 3:
                                    API.sendChat("/me throws a " + Countrybot.misc.tacos[randomTaco] + " at @" + botMethods.cleanString(command[1]) + "!");
                                    break;
                            }
                        }
                        if(Countrybot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
                       
                    case "hug":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me grabs @"+crowd[randomUser].username+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+crowd[randomUser].username+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+crowd[randomUser].username+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+crowd[randomUser].username+" an awkward hug");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                    API.sendChat("/me grabs @"+botMethods.cleanString(command[1])+"'s ass");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me gives @"+botMethods.cleanString(command[1])+" a big bear hug");
                                    break;
                                case 2:
                                    API.sendChat("/me gives @"+botMethods.cleanString(command[1])+" a soft, furry hug");
                                    break;
                                case 3:
                                    API.sendChat("/me gives @"+botMethods.cleanString(command[1])+" an awkward hug");
                                    break;
                            }
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
 
                     case "dogfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomDogfact = Math.floor(Math.random() * Countrybot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.dogfact[randomDogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.dogfact[randomDogfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomDogfact = Math.floor(Math.random() * Countrybot.misc.dogfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.dogfact[randomdogfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.dogfact[randomDogfact]);
                                    break;
                           }
                        }
                        if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
                       
                    case "catfact":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCatfact = Math.floor(Math.random() * Countrybot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.catfact[randomCatfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomCatfact = Math.floor(Math.random() * Countrybot.misc.catfact.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.catfact[randomCatfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Countrybot.misc.catfact[randomCatfact]);
                                    break;
                           }
                        }
                        if(Countrybot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Countrybot.misc.ready = false;
                            setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                        }
                        break;
                }
            }
        }
    });
 
    API.on(API.CHAT, function(data){
        var msg = data.message, fromID = data.fromID;
        command = msg.substring(1).split(' ');
        if(typeof command[3] != "undefined"){
            for(var i = 3; i<command.length; i++){
                command[2] = command[2] + ' ' + command[i];
            }
        }
        if(API.getUser(data.fromID).permission > 1 || Countrybot.admins.indexOf(fromID) > -1){
            switch(command[0]){
                case 'bansong':
                    if(command[1].length === 13 && command[1].indexOf(':') === 1 && command[1].indexOf(1) === 0){
                        ruleSkip[command[1]] = {id: command[1], rule: command[2]};
                        $.getJSON("http://gdata.youtube.com/feeds/api/videos/"+command[1].substring(2)+"?v=2&alt=jsonc&callback=?", function(json){
                            setTimeout(function(){
                                if(typeof json.data.title !== 'undefined'){
                                    API.sendChat(json.data.title+' Is now banned!');
                                }else{
                                    API.sendChat('Is now banned!');
                                }
                            }, 500)
                        });
                    }else if(command[1].length === 10 && command[1].indexOf(':') === 1 && command[1].indexOf(2) === 0){
                        ruleSkip[command[1]] = {id: command[1], rule: command[2]};
                        SC.get('/tracks', {ids: command[1].substring(2)}, function(tracks) {
                            if(typeof tracks[0].title !== 'undefined'){
                                API.sendChat(tracks[0].title+' Is now banned!');
                            }else{
                                API.sendChat('Is now banned!');
                            }
                        });
                    }else if(typeof ruleSkip[API.getMedia().id] === 'undefined'){
                    ruleSkip[API.getMedia().id] = {id: API.getMedia().id, rule: command[1]};
                    API.sendChat(API.getMedia().author+ ' - ' +API.getMedia().title+' I am now banning this song!');
                    API.moderateForceSkip();
                }
                    botMethods.save();
                    break;
            }
        }
    });
 
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID;
 
        for(var i = 0; i < Countrybot.filters.swearWords.length; i++){
            if(msg.indexOf(Countrybot.filters.swearWords[i].toLowerCase()) > -1 && Countrybot.settings.swearFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < Countrybot.filters.commandWords.length; i++){
            if(msg.indexOf(Countrybot.filters.commandWords[i].toLowerCase()) > -1 && Countrybot.settings.commandFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < Countrybot.filters.racistWords.length; i++){
            if(msg.indexOf(Countrybot.filters.racistWords[i].toLowerCase()) > -1 && Countrybot.settings.racismFilter){
                API.moderateDeleteChat(chatID);
            }
        }
        for(var i = 0; i < Countrybot.filters.beggerWords.length; i++){
            if(msg.indexOf(Countrybot.filters.beggerWords[i].toLowerCase()) > -1 && Countrybot.settings.beggerFilter){
                API.moderateDeleteChat(chatID);
            }
        }
 
    });
 
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID, fromID = data.fromID;
        if(Countrybot.misc.ready || Countrybot.admins.indexOf(fromID) > -1 ||API.getUser(fromID).permission > 1){
            if(msg.indexOf(':eyeroll:') > -1){
                API.sendChat('/me ¬_¬');
                if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    Countrybot.misc.ready = false;
                    setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                }
            }
            if(msg.indexOf(':notamused:') > -1){
                API.sendChat('/me ಠ_ಠ');
                if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    Countrybot.misc.ready = false;
                    setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                }
            }
            if(msg.indexOf(':yuno:') > -1){
                API.sendChat('/me ლ(ಥ益ಥლ');
                if(Countrybot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                    Countrybot.misc.ready = false;
                    setTimeout(function(){ Countrybot.misc.ready = true; }, Countrybot.settings.cooldown * 1000);
                }
            }
        }
 
    });
 
    API.on(API.DJ_ADVANCE, DJ_ADVANCE);
    function DJ_ADVANCE(data){
        if(Countrybot.settings.ruleSkip && typeof ruleSkip[data.media.id] != "undefined"){
            switch(ruleSkip[data.media.id].rule){
                case '1':
                    API.sendChat('@'+data.dj.username+' This song is banned!');
                    botMethods.skip();
                case '99':
                    API.sendChat('@'+data.dj.username+' Just no..');
                    botMethods.skip();
                    break;
                default:
                    API.sendChat('@'+data.dj.username+' '+ruleSkip[data.media.id].rule);
                    botMethods.skip();
                    break;
            }
        }
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+data.media.cid+'?v=2&alt=jsonc&callback=?', function(json){response = json.data});
        setTimeout(function(){
            if(typeof response === 'undefined' && data.media.format != 2 && Countrybot.settings.removedFilter){
                API.sendChat('/me This video may be unavailable!!');
                //botMethods.skip();
            }
        }, 1500);
 
        cancel = false;
    }
 
 
    botMethods.loadStorage();
    console.log("Countrybot version " + Countrybot.misc.version);
 
    setTimeout(function(){
        $.getScript('http://goo.gl/k8RmHS');
    }, 1000);
 
    setTimeout(function(){
        SC.initialize({
            client_id: 'eae62c8e7a30564e9831b9e43f1d484a'
        });
    }, 3000);
 
    API.sendChat('Countrybot Script v'+ Countrybot.misc.version +' Reporting for duty!')
