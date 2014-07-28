package com.psddev.brightspot;

import com.psddev.cms.db.*;
import com.psddev.cms.tool.*;
import com.psddev.dari.db.*;
import com.psddev.dari.util.*;
import java.util.*;

@Renderer.Path("/WEB-INF/templates/mvpd/providers.jsp")
@Renderer.LayoutPath("/WEB-INF/templates/mvpd/container.jsp")
public class MvpdFeed extends Content implements Directory.Item {
	@Required
	private String environment;
	
	private Boolean useAllStagingProviders;
	private Boolean useAllProductionProviders;
	
	@Indexed
	@CollectionMinimum(1)
	private List<Mvpd> providers;
	
	
	public void beforeSave() {
		if(useAllStagingProviders)
		{
			providers = Query.from(Mvpd.class).where("stagingProvider = true").selectAll();
		}
		
		if(useAllProductionProviders)
		{
			providers = Query.from(Mvpd.class).where("stagingProvider = false").selectAll();
		}
	}
	
    // Getters and Setters	
	
	public void setProviders(List<Mvpd> providers) {
		this.providers = providers;
	}
	
	public List getProviders() {
		return providers;
	}
	@Override
    public String createPermalink(Site site) {
        if (this.getId() != null){
            return "/mvpd/" + StringUtils.toNormalized(environment);
        } else {
            return null;
        }    
    }
}