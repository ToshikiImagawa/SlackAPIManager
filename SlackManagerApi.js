function create(token) {
  return new SlackManagerApi(token);
}

function chatPostMessage(channel, text, username, icon_emoji) {
  throw new Error("このメソッドは直接呼び出せません。createメソッドをコールし取得したインスタンスより呼び出してください。");
}

function chatUpdate(ts, channel, text) {
  throw new Error("このメソッドは直接呼び出せません。createメソッドをコールし取得したインスタンスより呼び出してください。");
}

function channelsCreate(name) {
  throw new Error("このメソッドは直接呼び出せません。createメソッドをコールし取得したインスタンスより呼び出してください。");
}

function channelsArchive(channel) {
  throw new Error("このメソッドは直接呼び出せません。createメソッドをコールし取得したインスタンスより呼び出してください。");
}

function channelsSetPurpose(topic,channel) {
  throw new Error("このメソッドは直接呼び出せません。createメソッドをコールし取得したインスタンスより呼び出してください。");
}

function channelsSetTopic(topic,channel) {
  throw new Error("このメソッドは直接呼び出せません。createメソッドをコールし取得したインスタンスより呼び出してください。");
}

function channelsInvite(channel,user) {
  throw new Error("このメソッドは直接呼び出せません。createメソッドをコールし取得したインスタンスより呼び出してください。");
}

function channelsList(exclude_archived) {
  throw new Error("このメソッドは直接呼び出せません。createメソッドをコールし取得したインスタンスより呼び出してください。");
}

function emojiList() {
  throw new Error("このメソッドは直接呼び出せません。createメソッドをコールし取得したインスタンスより呼び出してください。");
}

function usersList(presence) {
  throw new Error("このメソッドは直接呼び出せません。createメソッドをコールし取得したインスタンスより呼び出してください。");
}

(function(global) {
  var SlackManagerApi;
  SlackManagerApi = (function() {
    
    SlackManagerApi.name = 'SlackManagerApi';
    
    function SlackManagerApi(token) {
      this.token = token;
      if (!(this.token != null)) throw new Error("the token is required");
      this.BASE_URI = "https://slack.com";
      this.API_ENDPOINT = "" + this.BASE_URI + "/api/";
    }
    
    SlackManagerApi.prototype.chatPostMessage = function(channel, text, username, icon_emoji) {
      var url        = this.API_ENDPOINT+"chat.postMessage";
      var parse      = 'full';
      var method     = 'post';
      
      var payload = {
        'token'      : this.token,
        'channel'    : channel,
        'text'       : text,
        'username'   : username,
        'parse'      : parse,
        'icon_emoji' : icon_emoji
      };
      
      var params = {
        'method'     : method,
        'payload'    : payload
      };
      
      return UrlFetchApp.fetch(url, params);
    };
    
    SlackManagerApi.prototype.chatUpdate = function(ts, channel, text) {
      var url        = this.API_ENDPOINT+"chat.update";
      var parse      = 'full';
      var method     = 'post';
      
      var payload = {
        'token'      : this.token,
        'channel'    : channel,
        'text'       : text,
        'parse'      : parse
      };
      
      var params = {
        'method'     : method,
        'payload'    : payload
      };
      
      return UrlFetchApp.fetch(url, params);
    };
    
    SlackManagerApi.prototype.channelsCreate = function(name) {
      var url        = this.API_ENDPOINT+"channels.create";
      var method     = 'post';
      
      var payload = {
        'token'      : this.token,
        'name'       : name
      };
      
      var params = {
        'method'     : method,
        'payload'    : payload
      };
      
      return UrlFetchApp.fetch(url, params);
    };
    
    SlackManagerApi.prototype.channelsArchive = function(channel) {
      var url        = this.API_ENDPOINT+"channels.archive";
      var method     = 'post';
      
      var payload = {
        'token'      : this.token,
        'channel'    : channel
      };
      
      var params = {
        'method'     : method,
        'payload'    : payload
      };
      
      return UrlFetchApp.fetch(url, params);
    };
    
    SlackManagerApi.prototype.channelsSetPurpose = function(purpose,channel) {
      var url        = this.API_ENDPOINT+"channels.setPurpose";
      var method     = 'post';
      
      var payload = {
        'token'      : this.token,
        'channel'    : channel,
        'purpose'    : purpose
      };
      
      var params = {
        'method'     : method,
        'payload'    : payload
      };
      
      return UrlFetchApp.fetch(url, params);
    };
    
    SlackManagerApi.prototype.channelsSetTopic = function(topic,channel) {
      var url        = this.API_ENDPOINT+"channels.setTopic";
      var method     = 'post';
      
      var payload = {
        'token'      : this.token,
        'channel'    : channel,
        'topic'      : topic
      };
      
      var params = {
        'method'     : method,
        'payload'    : payload
      };
      
      return UrlFetchApp.fetch(url, params);
    };
    
    SlackManagerApi.prototype.channelsList = function(exclude_archived) {
      var url        = this.API_ENDPOINT+"channels.list";
      var method     = 'post';
      
      var payload = {
        'token'      : this.token,
        'exclude_archived' : exclude_archived
      };
      
      var params = {
        'method'     : method,
        'payload'    : payload
      };
      
      return UrlFetchApp.fetch(url, params);
    };
    
    SlackManagerApi.prototype.emojiList = function() {
      var url        = this.API_ENDPOINT+"emoji.list";
      var method     = 'post';
      
      var payload = {
        'token'      : this.token
      };
      
      var params = {
        'method'     : method,
        'payload'    : payload
      };
      
      return UrlFetchApp.fetch(url, params);
    };
    
    SlackManagerApi.prototype.channelsInvite = function(channel,user) {
      var url        = this.API_ENDPOINT+"channels.invite";
      var method     = 'post';
      
      var payload = {
        'token'      : this.token,
        'channel'    : channel,
        'user'    : user
      };
      
      var params = {
        'method'     : method,
        'payload'    : payload
      };
      
      return UrlFetchApp.fetch(url, params);
    };
    
    SlackManagerApi.prototype.usersList = function(presence) {
      var url        = this.API_ENDPOINT+"users.list";
      var method     = 'post';
      
      var payload = {
        'token'      : this.token,
        'presence'    : presence
      };
      
      var params = {
        'method'     : method,
        'payload'    : payload
      };
      
      return UrlFetchApp.fetch(url, params);
    };
    
    return SlackManagerApi;
    
  })();
  return global.SlackManagerApi = SlackManagerApi;
})(this);
