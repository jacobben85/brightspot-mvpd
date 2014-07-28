<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="cms" uri="http://psddev.com/cms" %>


<div class="video-widget">
 <c:forEach var="item" items="${content.videos}" >
 	<div class="video-widget-item" 
 		data-providerid='<c:out value="${item.providerId}"/>' 
 		data-title='<c:out value="${item.title}"/>' 
 		data-desc='<c:out value="${item.description}"/>'
 		data-autoplay='<c:out value="${item.autoplay}"/>'
 		data-episode='<c:out value="${item.isEpisode}"/>'
 		>
		<div href='<c:out value="${item.permalink}"/>' class="item-title load-video">
			<c:out value="${item.title}"/>
		</div>
		<div href='<c:out value="${item.permalink}"/>' class="load-video">
			<div class="item-thumbnail">
				<img src='<c:out value="${item.thumbnail}"/>' />
				<div class="overlay">
					<div class="item-desc"> <cms:render value="${item.description}"/></div>
				</div>
			</div>
		</div>
	</div>
 </c:forEach>
</div>

<script>
	$(document).ready(function(){
		$('.load-video').click(function(){
			var providerId = $(this).closest('.video-widget-item').data('providerid'),
				isEpisode  = $(this).closest('.video-widget-item').data('episode'),
				title = $(this).closest('.video-widget-item').data('title'),
				desc = $(this).closest('.video-widget-item').data('desc'),
				autoplay = $(this).closest('.video-widget-item').data('autoplay');

			uvn.VideoPlayer.destroy();

			if (isEpisode) {
				options = {
                    autoplay: !!autoplay,
                    height: '500px',
                    width: '100%',
                    showLoginAtStart: true,
                    staticResourceId: 'univision',
                    player: {
                        // adobe pass core player
                        playerId: 'de1aa413c6f349c59d48e17b77310fb8'
                    }
                }
			} else {
				options = {
                    autoplay: !!autoplay,
                    height: '500px',
                    width: '100%'
                }
			}

			uvn.VideoPlayer = uvn.video.Player.create(
			 	'player', 
                providerId, 
                options
			 );

			$('#video-title').html(title);
			$('#video-desc').html(desc.substr(1, desc.length -2));
		});
	});
</script>
