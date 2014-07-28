<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="cms" uri="http://psddev.com/cms" %>

<link href="http://html.univision.com/nnunez/brightspot/css/uvn-video-player.min.css" type="text/css" rel="stylesheet" />
<link href="http://html.univision.com/nnunez/brightspot/css/video.css" type="text/css" rel="stylesheet" />
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
<script src='http://html.univision.com/nnunez/brightspot/script/uvn-video-player.js'></script>

<div class="video-container">
    <div id="video-details">
        <h1 class="white-txt" id="video-title">
            <c:out value="${content.title}"/>
        </h1>
        <h3 id="video-desc">
            <cms:render value="${content.description}" />
        </h3>
    </div>

    <div id="player"></div>

    <c:forEach items="${content.articles}" var="article" >
        <div>
            <cms:render src="${article}"/>
        </div>
    </c:forEach>
</div>

<c:choose>
      <c:when test="${content.isEpisode == 'true'}">
        <script>
            (function () {
                uvn.VideoPlayer = uvn.video.Player.create(
                    'player', 
                    '<c:out value="${content.providerId}"/>', 
                    {
                        autoplay: <c:out value="${content.autoplay}"/>,
                        height: '500px',
                        width: '700px',
                        showLoginAtStart: true,
                        staticResourceId: 'univision',
                        player: {
                            // adobe pass core player
                            playerId: 'de1aa413c6f349c59d48e17b77310fb8'
                        }
                    }).ready(function (player) {

                        /*player.on(uvn.video.Player.Events.AUTH_STATUS, function (auth) {
                            var $toggle = $('#toggle');
                            uvn.auth = auth;
                            if (auth.loggedIn) {
                                $toggle.text('Logout');
                            }
                        });

                        jQuery(function ($) {
                            var $toggle = $('#toggle');
                            $toggle.on('click', function () {
                                var auth = player.getAuthentication(),
                                        loggedIn = auth && auth.loggedIn;
                                player[loggedIn ? 'logout' : 'login']();
                            });
                        });*/

                })
            }).call(this);
        </script>
      </c:when>

      <c:otherwise>
        <script>
            (function() {
                uvn.DEBUG = true;
                uvn.video.Player.create(
                    'player', 
                    '<c:out value="${content.providerId}"/>', 
                    {
                        autoplay: <c:out value="${content.autoplay}"/>,
                        height: '500px',
                        width: '700px'
                    }
                );
            }).call(this);
        </script>
      </c:otherwise>
</c:choose>