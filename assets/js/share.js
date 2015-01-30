
(function($) {
    $(function() {
        Share = {
            vk: function(data) {
                url  = 'http://vkontakte.ru/share.php?';
                url += 'url='          + encodeURIComponent(data.url);
                url += '&title='       + encodeURIComponent(data.title);
                url += '&description=' + encodeURIComponent(data.description);
                url += '&image='       + encodeURIComponent(data.image);
                url += '&noparse=true';
                Share.popup(url);
            },
            od: function(data) {
                url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
                url += '&st.comments=' + encodeURIComponent(data.description);
                url += '&st._surl='    + encodeURIComponent(data.url);
                Share.popup(url);
            },
            fb: function(data) {
                url  = 'http://www.facebook.com/sharer.php?s=100';
                url += '&p[title]='     + encodeURIComponent(data.title);
                url += '&p[summary]='   + encodeURIComponent(data.description);
                url += '&p[url]='       + encodeURIComponent(data.url);
                url += '&p[images][0]=' + encodeURIComponent(data.image);
                Share.popup(url);
            },
            tw: function(data) {
                url  = 'http://twitter.com/share?';
                url += 'text='      + encodeURIComponent(data.twitterTitle ? data.twitterTitle : data.title);
                url += '&url='      + encodeURIComponent(data.url);
                url += '&counturl=' + encodeURIComponent(data.url);
                Share.popup(url);
            },
            ml: function(data) {
                url  = 'http://connect.mail.ru/share?';
                url += 'url='          + encodeURIComponent(data.url);
                url += '&title='       + encodeURIComponent(data.title);
                url += '&description=' + encodeURIComponent(data.description);
                url += '&imageurl='    + encodeURIComponent(data.image);
                Share.popup(url)
            },
            gl: function(data) {
                url  = 'https://plus.google.com/share?hl=ru';
                url += '&url='          + encodeURIComponent(data.url);
                Share.popup(url)
            },

            popup: function(url) {
                window.open(url,'','toolbar=0,status=0,width=626,height=436');
            }
        };

        $('.gallery').fancybox({
            titlePosition: 'inside',
            tpl: {
                wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div>' +
                    '<span class="article-pic-soc" id="js-article-image-share" data-twitter-title="" style="display: block;">'+
                    '<span class="article-pic-soc-fb js-button" data-provider="fb"></span>'+
                    '<span class="article-pic-soc-vk js-button" data-provider="vk"></span>'+
                    '<span class="article-pic-soc-tw js-button" data-provider="tw"></span>'+
                    '<span class="article-pic-soc-od js-button" data-provider="od"></span>'+
                    '<span class="article-pic-soc-gl js-button" data-provider="gl"></span>'+
                    '</span>' +
                    '</div></div>'
            },
            afterShow: function() {
                var articleContent = $('#js-article-content');
                var articleImageShare = $('#js-article-image-share');
                articleImageShare.data('title', document.title || '');
                articleImageShare.data('description', location.href);

                articleImageShare.find('.js-button').click(function(ev) {
                    Share[$(this).data('provider')](articleImageShare.data());
                    ev.preventDefault();
                    ev.stopPropagation();
                });


                var item = $('.fancybox-image');
                //item.append(articleImageShare);
                articleImageShare.data('url', 'http://andrewcooler.com' + item.attr('src'));//location.href.replace(/\?.*$/, '').replace(/#.*$/, '') + '?image=' + item.data('id') + '&utm_campaign=art-images-share#image' + item.data('id'));
                articleImageShare.data('image', 'http://andrewcooler.com' + item.attr('src'));

                articleContent.find('.js-article-image').on('mouseleave', function() {
                    articleImageShare.hide();
                });
            }
        });
    });
})(jQuery);