<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="cms" uri="http://psddev.com/cms" %>

<cms:layout class="provider">
  <div itemscope itemtype="http://schema.org/Class">
    <span itemprop="providerId">
		<c:out value="${content.providerId}"/>
	</span>
    
	<span itemprop="displayName">
		<c:out value="${content.displayName}"/>
	</span>
	
    <span itemprop="logoUrl">
		<c:out value="${content.logoUrl}" />
	</span>
	
	<span itemprop="foregroundLogout">
		<c:out value="${content.foregroundLogout}" />
	</span>
	
	<span itemprop="authPerAggregator">
		<c:out value="${content.authPerAggregator}" />
	</span>
	
	<c:if test="${not empty content.metadata}">
		<span itemprop="metadata">
			<c:out value="${content.metadata}" />
		</span>
	</c:if>
	
	<c:if test="${not empty content.isProxy}">
		<span itemprop="isProxy">
			<c:out value="${content.isProxy}" />
		</span> 
	</c:if>
	
	<c:if test="${not empty content.frameRequired}">
		<span itemprop="iFrameRequired">
			<c:out value="${content.frameRequired}" />
		</span> 
	</c:if>
	
	<c:if test="${not empty content.frameWidth}">
		<span itemprop="iFrameWidth">
			<c:out value="${content.frameWidth}" />
		</span> 
	</c:if>
	
	<c:if test="${not empty content.frameHeight}">
		<span itemprop="iFrameHeight">
			<c:out value="${content.frameHeight}" />
		</span> 
	</c:if>
</div>
</cms:layout>