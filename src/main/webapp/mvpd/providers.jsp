<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="cms" uri="http://psddev.com/cms" %>

<cms:layout class="mvpd-list">
 <c:forEach var="item" items="${content.providers}" >
	<cms:render value="${item}" />
 </c:forEach>
 </cms:layout>