var fb_url = 'https://graph.facebook.com/112412848774431';
var tw_url = 'https://api.twitter.com/1/users/show.json?screen_name=djangocon&callback=?';
var tw_tl_url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=djangocon&count=20&include_rts=1&callback=?';

function set_facebook() {
    $.getJSON(fb_url, function(data){
        $('.counter.facebook').html(data.likes);
    });
}

function set_twitter() {
    $.getJSON(tw_url, function(data){
        $('.counter.twitter').html(data.followers_count);
    });

    $.getJSON(tw_tl_url, function(data){
        var tweet;
        for(i=0; i < data.length; i++) {
            tweet = '<a target="_blank" href="https://twitter.com/djangocon/status/' +
                    data[i].id_str + '"><div class="tweet">' + 
                    data[i].text + '</div></a>';
            $('.tweets').append(tweet);
        }
    });
}

$(document).ready(function(){
    set_facebook();
    set_twitter();
});