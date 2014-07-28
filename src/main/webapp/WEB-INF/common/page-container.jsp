<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="cms" uri="http://psddev.com/cms" %>

<head>
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
	<cms:render value="${stage.headNodes}" />
</head>

<body>	
	<div class="container">
	  <cms:render value="${mainContent}"/>  <hr>
	      <footer class="pull-right">
	        <p>Powered by Brightspot CMS</p>
	      </footer>
	</div>
</body>