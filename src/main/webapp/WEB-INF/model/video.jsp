<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="cms" uri="http://psddev.com/cms" %>

<div class="video-container">
	<div id="player"></div>
	<div id="video-details">
		<span class="white-txt" id="video-title">
			<c:out value="${content.title}"/>
		</span>
		<span class="white-txt" id="video-desc">
			<c:out value="${content.description}"/>
		</span>
	</div>
</div>