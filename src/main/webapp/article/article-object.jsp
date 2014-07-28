<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="cms" uri="http://psddev.com/cms" %>


<div class="article">
    <h1><c:out value="${content.headline}"/></h1>
    <cms:render value="${content.body}" />
</div>
