package com.psddev.brightspot;

import com.psddev.cms.db.*;
import com.psddev.cms.tool.*;
import com.psddev.dari.db.*;
import com.psddev.dari.util.*;
import java.util.*;

@Renderer.Path("/WEB-INF/templates/mvpd/provider.jsp")
@Renderer.LayoutPath("/WEB-INF/templates/mvpd/container.jsp")
public class Mvpd extends Content implements Directory.Item {
	@Indexed(unique=true)
	@Required
    private String providerId;
	@Required
	private String displayName;
	
	/*
	* @todo: we can use and StorageItem insted
	* private StorageItem logo;
	*/
	private String logoUrl;	
	private String metadata;
	
	private String freewheelHash;
	
	@Indexed
	@ToolUi.Filterable
	private Boolean stagingProvider;
	
	@ToolUi.Tab("Other options")
	private Boolean foregroundLogout;
	
	@ToolUi.Tab("Other options")
	private Boolean isProxy;
	
	@ToolUi.Tab("Other options")
	private Boolean authPerBrowserSession;
	
	@ToolUi.Tab("Other options")
	private Boolean authPerAggregator;
	
	@ToolUi.Tab("Other options")
	private Boolean frameRequired;
	
	@ToolUi.Tab("Other options")
	private String frameHeight;
	
	@ToolUi.Tab("Other options")
	private String frameWidth;
	
    // Getters and Setters
	
	public String getProviderId()
	{
		return providerId;
	}
	
	public void setProviderId(String providerId)
	{
		this.providerId = providerId;
	}
	
	public String getDisplayName()
	{
		return displayName;
	}
	
	public void setDisplayName(String displayName)
	{
		this.displayName = displayName;
	}
	
	public String getLogoUrl()
	{
		return logoUrl;
	}
	
	public void setLogoUrl(String logoUrl)
	{
		this.logoUrl = logoUrl;
	}
	
	public String getMetadata()
	{
		return metadata;
	}
	
	public void setMetadata(String metadata)
	{
		this.metadata = metadata;
	}
	
	public String getFreewheelHash()
	{
		return freewheelHash;
	}
	
	public void setFreewheelHash(String freewheelHash)
	{
		this.freewheelHash = freewheelHash;
	}
	
	public Boolean getForegroundLogout()
	{
		return foregroundLogout;
	}
	
	public void setForegroundLogout(Boolean foregroundLogout)
	{
		this.foregroundLogout = foregroundLogout;
	}
	
	public Boolean getStagingProvider()
	{
		return foregroundLogout;
	}
	
	public void setStagingProvider(Boolean stagingProvider)
	{
		this.stagingProvider = stagingProvider;
	}
	
	public Boolean getAuthPerBrowserSession()
	{
		return authPerBrowserSession;
	}
	
	public void setAuthPerBrowserSession(Boolean authPerBrowserSession)
	{
		this.authPerBrowserSession = authPerBrowserSession;
	}
	
	public Boolean getAuthPerAggregator()
	{
		return authPerAggregator;
	}
	
	public void setAuthPerAggregator(Boolean authPerAggregator)
	{
		this.authPerAggregator = authPerAggregator;
	}
	
	public Boolean getIsProxy()
	{
		return isProxy;
	}
	
	public void setIsProxy(Boolean isProxy)
	{
		this.isProxy = isProxy;
	}
	
	public Boolean getFrameRequired()
	{
		return frameRequired;
	}
	
	public void setFrameRequired(Boolean frameRequired)
	{
		this.frameRequired = frameRequired;
	}
	
	public String getFrameHeight()
	{
		return frameHeight;
	}
	
	public void setFrameHeight(String frameHeight)
	{
		this.frameHeight = frameHeight;
	}
	
	public String getFrameWidth()
	{
		return frameWidth;
	}
	
	public void setFrameWidth(String frameWidth)
	{
		this.frameWidth = frameWidth;
	}
	
	@Override
    public String createPermalink(Site site) {
        return "/mvpd/" + StringUtils.toNormalized(providerId);
    }
}